'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Compass,
  CheckCircle2,
} from 'lucide-react';
import { ALL_LOCATIONS, LocationOverviewItem } from '@/data/locationsOverviewData';

const LOCATION_IMAGES: Record<string, string> = {
  'palm-beach': '/images/mps_location_palm_beach_hero.jpg',
  'west-palm-beach': '/images/mps_location_wpb_hero.jpg',
  'delray-beach': '/images/mps_location_delray_hero.jpg',
  'boca-raton': '/images/mps_location_boca_raton_hero.jpg',
  'boynton-beach': '/images/mps_location_boynton_hero.jpg',
  'gulf-stream': '/images/mps_location_gulfstream_hero.jpg',
  'manalapan': '/images/mps_location_manalapan_hero.jpg',
  'ocean-ridge': '/images/mps_location_ocean_ridge_hero.jpg',
  'hillsboro-beach': '/images/mps_location_hillsboro_hero.jpg',
  'lighthouse-point': '/images/mps_location_lighthouse_point_hero.jpg',
  'fort-lauderdale': '/images/mps_location_ftl_hero.jpg',
  'aventura': '/images/mps_location_aventura_hero.jpg',
  'miami': '/images/mps_location_miami_hero.jpg',
  'miami-beach': '/images/mps_location_miami_beach_hero.jpg',
  'naples': '/images/mps_location_naples_hero.jpg',
  'sarasota': '/images/mps_location_sarasota_hero.jpg',
  'tampa': '/images/mps_location_tampa_hero.jpg',
  'orlando': '/images/mps_location_orlando_hero.jpg',
  'jacksonville': '/images/mps_location_jacksonville_hero.jpg',
};

type RegionFilterType = 'all' | 'palm-beach' | 'broward-miami' | 'regional';

export const LocationsSlider: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [selectedRegion, setSelectedRegion] = useState<RegionFilterType>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  // Filter locations based on region tab
  const filteredLocations = ALL_LOCATIONS.filter((loc) => {
    if (selectedRegion === 'all') return true;
    if (selectedRegion === 'palm-beach') return loc.region === 'palm-beach';
    if (selectedRegion === 'broward-miami')
      return loc.region === 'broward' || loc.region === 'miami-dade';
    if (selectedRegion === 'regional') return loc.region === 'regional';
    return true;
  });

  // Responsive items-per-view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedRegion]);

  const maxIndex = Math.max(0, filteredLocations.length - visibleCount);

  // Navigation handlers
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  }, [maxIndex]);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [handleNext, isPaused]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
  };

  return (
    <div
      className="mt-14 sm:mt-20 pt-12 border-t border-slate-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0E2445] uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-[#0E2445]" />
            <span>OPERATING JURISDICTIONS · 19 TERRITORIES</span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-sans font-bold text-slate-900">
            Explore Our Active Florida Service Territories
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-sans max-w-2xl leading-relaxed">
            From the barrier islands of Palm Beach County to the financial towers of Brickell and Gulf Coast luxury compounds.
          </p>
        </div>

        {/* Region Filter Buttons & Navigation Controls */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          {/* Region Tabs */}
          <div className="inline-flex items-center p-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono">
            <button
              type="button"
              onClick={() => setSelectedRegion('all')}
              className={`px-3 py-1.5 rounded transition-all ${
                selectedRegion === 'all'
                  ? 'bg-[#0E2445] text-white font-bold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All (19)
            </button>
            <button
              type="button"
              onClick={() => setSelectedRegion('palm-beach')}
              className={`px-3 py-1.5 rounded transition-all ${
                selectedRegion === 'palm-beach'
                  ? 'bg-[#0E2445] text-white font-bold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Palm Beach (8)
            </button>
            <button
              type="button"
              onClick={() => setSelectedRegion('broward-miami')}
              className={`px-3 py-1.5 rounded transition-all ${
                selectedRegion === 'broward-miami'
                  ? 'bg-[#0E2445] text-white font-bold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Broward &amp; Miami (6)
            </button>
            <button
              type="button"
              onClick={() => setSelectedRegion('regional')}
              className={`px-3 py-1.5 rounded transition-all ${
                selectedRegion === 'regional'
                  ? 'bg-[#0E2445] text-white font-bold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Gulf &amp; Central (5)
            </button>
          </div>

          {/* Prev/Next Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="w-9 h-9 rounded-full border border-slate-300 bg-white hover:bg-[#0E2445] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm"
              aria-label="Previous Location Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-9 h-9 rounded-full border border-slate-300 bg-white hover:bg-[#0E2445] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm"
              aria-label="Next Location Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Locations Slider Carousel */}
      <div
        className="overflow-hidden w-full cursor-grab active:cursor-grabbing select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          className="flex gap-6 sm:gap-7"
          animate={{
            x: `-${currentIndex * (100 / visibleCount)}%`,
          }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.6,
            ease: [0.25, 1, 0.5, 1],
          }}
        >
          {filteredLocations.map((loc: LocationOverviewItem, idx: number) => {
            const locImg =
              LOCATION_IMAGES[loc.slug] || '/images/mps_location_palm_beach_hero.jpg';
            const itemWidthPercentage = 100 / visibleCount;

            return (
              <div
                key={loc.slug}
                style={{
                  flex: `0 0 calc(${itemWidthPercentage}% - ${
                    ((visibleCount - 1) * (visibleCount === 1 ? 0 : visibleCount === 2 ? 24 : 28)) /
                    visibleCount
                  }px)`,
                }}
                className="group relative rounded-xl bg-white border border-slate-200/90 hover:border-[#0E2445]/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_36px_rgba(14, 36, 69,0.12)] hover:-translate-y-1.5"
              >
                {/* Hero Photo Container */}
                <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={locImg}
                    alt={`${loc.name} Private Security Coverage`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white">
                      <MapPin className="w-3 h-3 text-blue-300" />
                      <span>{loc.regionLabel}</span>
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#0E2445] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      {loc.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <h4 className="text-xl sm:text-[22px] font-sans font-bold text-slate-900 group-hover:text-[#0E2445] leading-snug transition-colors">
                      {loc.name}
                    </h4>
                    <p className="text-xs text-[#0E2445] font-mono font-semibold line-clamp-1">
                      {loc.tagline}
                    </p>
                    <p className="text-xs sm:text-[13px] text-slate-600 font-sans font-normal leading-relaxed line-clamp-3">
                      {loc.description}
                    </p>

                    {/* Key Highlights */}
                    {loc.highlights && loc.highlights.length > 0 && (
                      <div className="pt-2 space-y-1.5">
                        {loc.highlights.slice(0, 2).map((h, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-[11px] text-slate-600 font-sans"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0E2445] shrink-0" />
                            <span className="truncate">{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Footer Link */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={loc.href}
                      className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-[#0E2445] group-hover:text-[#173A6E] transition-colors"
                    >
                      <span>Explore Jurisdiction Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                    </Link>
                    <span className="text-[11px] font-mono text-slate-400">
                      {String(idx + 1).padStart(2, '0')}/
                      {String(filteredLocations.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Progress Dots & Location Index */}
      <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">
        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-8 bg-[#0E2445]'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to location slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <span className="text-[#0E2445] font-bold">
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          <span>/</span>
          <span>{String(filteredLocations.length).padStart(2, '0')} Territories</span>
        </div>
      </div>
    </div>
  );
};

export default LocationsSlider;

