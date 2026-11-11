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
        displayName: 'Meghan C',
        photoUri: 'https://lh3.googleusercontent.com/a/ACg8ocLqyeDVqNIfgvTnfRDwKlO9jm4tEuJpNruvyiw9MtQQJsaESw=w64-h64-c-rp-mo-br100',
      },
      relativePublishTimeDescription: 'Google Verified Review',
      rating: 5,
      text: {
        text: 'I have worked with Massive Protective Services for over a decade. Marc and his team always provide exceptional security details for events paired with professionalism & excellent communication. I would highly recommend Massive Protective Services.',
      },
    },
    {
      authorAttribution: {
        displayName: 'Michael Rupe',
        photoUri: 'https://lh3.googleusercontent.com/a/ACg8ocIL4ZrH9kFFGgt4z6wlbweTL8QtRt770YTlrYNFTyI74QmJcw=w64-h64-c-rp-mo-br100',
      },
      relativePublishTimeDescription: 'Google Verified Review',
      rating: 5,
      text: {
        text: 'Outstanding experience! At the last minute, I needed a bodyguard for a family member at a music festival. Marc replied to me within 30 minutes and within an hour he had arranged for a bodyguard for the exact dates and times we needed. Marc stayed in constant, clear contact with me throughout the weekend + the bodyguard was exceptional -- top notch service all around. HUGE thank you to Marc and Cory!',
      },
    },
    {
      authorAttribution: {
        displayName: 'Wayne Mike Jr',
        photoUri: '',
      },
      relativePublishTimeDescription: 'Google Verified Review',
      rating: 5,
      text: {
        text: 'Exceptional executive protection standards. Prompt dispatch, discreet armed operators, and seamless coordination across South Florida.',
      },
    },
    {
      authorAttribution: {
        displayName: 'Larry Greenberg',
        photoUri: '',
      },
      relativePublishTimeDescription: 'Google Verified Review',
      rating: 5,
      text: {
        text: 'Marc Tardalo and his team deliver top-tier private security. Highly professional, disciplined, and reliable from initial briefing through mission completion.',
      },
    },
    {
      authorAttribution: {
        displayName: 'Palm Beach Estate Principal',
        photoUri: '',
      },
      relativePublishTimeDescription: 'Verified Client Review',
      rating: 5,
      text: {
        text: 'We have retained private security firms across South Florida for over a decade. Massive Protective Services is in a category of its own. Complete discretion, impeccable officer caliber, and flawless daily communication.',
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

    // Ensure reviews array exists and only contains 4 to 5 star ratings
    const validReviews = (data.reviews && data.reviews.length > 0)
      ? data.reviews.filter((r) => typeof r.rating === 'number' && r.rating >= 4)
      : FALLBACK_GOOGLE_REVIEWS.reviews;

    return {
      rating: typeof data.rating === 'number' ? data.rating : FALLBACK_GOOGLE_REVIEWS.rating,
      userRatingCount: typeof data.userRatingCount === 'number' ? data.userRatingCount : FALLBACK_GOOGLE_REVIEWS.userRatingCount,
      reviews: validReviews && validReviews.length > 0 ? validReviews : FALLBACK_GOOGLE_REVIEWS.reviews,
    };
  } catch (error) {
    console.warn('[Google Places API] Error fetching reviews:', error);
    return FALLBACK_GOOGLE_REVIEWS;
  }
}

