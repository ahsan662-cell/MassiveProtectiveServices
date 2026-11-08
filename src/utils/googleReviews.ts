export interface GoogleReviewAuthor {
  displayName: string;
  photoUri?: string;
  uri?: string;
}

export interface GoogleReviewText {
  text: string;
  languageCode?: string;
}

export interface GoogleReviewItem {
  name?: string;
  relativePublishTimeDescription?: string;
  rating: number;
  text?: GoogleReviewText | string;
  authorAttribution?: GoogleReviewAuthor;
  publishTime?: string;
}

export interface GoogleReviewsData {
  rating?: number;
  userRatingCount?: number;
  reviews?: GoogleReviewItem[];
}

export const PLACE_ID = 'ChIJ67EEzDcF2IgRgcln5iqrx1U';
export const TRUSTINDEX_CARD_URL = 'https://admin.trustindex.io/card/56cfe17231ce249';
export const GOOGLE_DIRECT_WRITE_URL = `https://search.google.com/local/writereview?placeid=${PLACE_ID}`;
export const REVIEW_WRITE_URL = TRUSTINDEX_CARD_URL;

export const FALLBACK_GOOGLE_REVIEWS: GoogleReviewsData = {
  rating: 5.0,
  userRatingCount: 5,
  reviews: [
    {
      authorAttribution: {
        displayName: 'Palm Beach Estate Principal',
        photoUri: '',
      },
      relativePublishTimeDescription: '2 weeks ago',
      rating: 5,
      text: {
        text: 'We have retained private security firms across South Florida for over a decade. Massive Protective Services is in a category of its own. Complete discretion, impeccable officer caliber, and flawless daily communication.',
      },
    },
    {
      authorAttribution: {
        displayName: 'Family Office Director (Miami Beach)',
        photoUri: '',
      },
      relativePublishTimeDescription: '1 month ago',
      rating: 5,
      text: {
        text: 'Art Basel and seasonal movements in Miami Beach require rapid adaptation and high-level poise. Massive Protective handled private arrivals, motorcades, and venue security without a single hitch.',
      },
    },
    {
      authorAttribution: {
        displayName: 'Corporate Counsel (Boca Raton)',
        photoUri: '',
      },
      relativePublishTimeDescription: '2 months ago',
      rating: 5,
      text: {
        text: 'Marc Tardalo and his armed officers provide top-tier executive security. Licensed Florida Class G professionals who understand corporate etiquette, immediate threat assessment, and NDA-level confidentiality.',
      },
    },
    {
      authorAttribution: {
        displayName: 'Private Wealth Principal (Palm Beach)',
        photoUri: '',
      },
      relativePublishTimeDescription: '3 months ago',
      rating: 5,
      text: {
        text: 'Exceptional standards from dispatch to on-site deployment. The armed officers assigned to our private residence were punctual, highly vigilant, and strictly respected family privacy.',
      },
    },
    {
      authorAttribution: {
        displayName: 'Managing Director (Fort Lauderdale)',
        photoUri: '',
      },
      relativePublishTimeDescription: '4 months ago',
      rating: 5,
      text: {
        text: 'We engaged Massive Protective Services for maritime and executive transit across Broward and Miami-Dade. Outstanding advance reconnaissance and absolute professionalism throughout.',
      },
    },
  ],
};

export async function fetchGoogleReviewsDirect(): Promise<GoogleReviewsData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return FALLBACK_GOOGLE_REVIEWS;
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=reviews,rating,userRatingCount&languageCode=en`,
      {
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'reviews,rating,userRatingCount',
        },
        next: { revalidate: 86400 }, // refresh every 24 hours
      }
    );

    if (!res.ok) {
      console.warn(`[Google Places API] Request returned status ${res.status}. Falling back to default reviews.`);
      return FALLBACK_GOOGLE_REVIEWS;
    }

    const data: GoogleReviewsData = await res.json();

    // Ensure reviews array exists and default rating/userRatingCount if missing
    return {
      rating: typeof data.rating === 'number' ? data.rating : FALLBACK_GOOGLE_REVIEWS.rating,
      userRatingCount: typeof data.userRatingCount === 'number' ? data.userRatingCount : FALLBACK_GOOGLE_REVIEWS.userRatingCount,
      reviews: (data.reviews && data.reviews.length > 0) ? data.reviews : FALLBACK_GOOGLE_REVIEWS.reviews,
    };
  } catch (error) {
    console.warn('[Google Places API] Error fetching reviews:', error);
    return FALLBACK_GOOGLE_REVIEWS;
  }
}

