import React from 'react';

export function GoogleReviewsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-white/10 animate-pulse min-h-[220px] flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className="h-4 w-full bg-white/10 rounded" />
            <div className="h-4 w-5/6 bg-white/10 rounded" />
            <div className="h-4 w-3/4 bg-white/10 rounded" />
          </div>
          <div className="flex items-center justify-between pt-5 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10" />
              <div className="space-y-1.5">
                <div className="h-4 w-24 bg-white/10 rounded" />
                <div className="h-3 w-16 bg-white/10 rounded" />
              </div>
            </div>
            <div className="h-4 w-20 bg-white/10 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

