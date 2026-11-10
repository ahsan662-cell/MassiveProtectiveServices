/**
 * Chatbot Configuration and Knowledge Base for Massive Protective Services (MPS)
 * Configured with client phone, WhatsApp, email, quick chips, and full website knowledge.
 */

export interface QuickChip {
  id: string;
  label: string;
  action?: 'qa' | 'contact-flow' | 'link';
  target?: string;
}

export interface ContactOption {
  id: string;
  label: string;
  type: 'tel' | 'callback-form' | 'url';
  action?: string;
  style: 'filled' | 'outline';
}

export interface QARecord {
  id: string;
  chipLabel?: string;
  keywords?: string[];
  answer: string;
  followUpChips?: string[];
  type?: 'text' | 'contact-flow';
  contactOptions?: ContactOption[];
  links?: { label: string; url: string }[];
}

export const CHATBOT_CONFIG = {
  widget: {
    name: "Massive Protective Services",
    subtitle: "Confidential help, 24/7",
    online: true,
    onlineDotColor: "#22c55e",
    primaryColor: "#0E2445",
    accentColor: "#C5A880",
    phone: "+1 (954) 234-7231",
    phoneAction: "tel:19542347231",
    whatsapp: "923088034975",
    whatsappDisplay: "+1 (954) 234-7231",
    contactPage: "/contact",
    email: "smb6925@gmail.com",
    license: "FDACS License B1400200",
    headquarters: "Delray Beach, Florida",
  },

  openingMessage:
    "We provide executive and VIP protection for executives, celebrities, and high-net-worth families across South Florida. Everything is handled confidentially. How can we help you?",

  quickChips: [
    "OUR SERVICES",
    "AREAS WE COVER",
    "HOW FAST CAN YOU START?",
    "HOW IS IT PRICED?",
    "IS IT CONFIDENTIAL?",
    "WHO IS MARC?",
    "TALK TO MARC",
  ],

  qa: [
    {
      id: "our-services",
      chipLabel: "OUR SERVICES",
      keywords: ["services", "service", "what do you do", "offerings", "protection", "guards"],
      answer:
        "We offer Executive Protection, Estate Security, Event Security, Armed Officers, VIP & Celebrity Protection, Concierge Security, Corporate Security, Mobile Patrol, and School Security. Every engagement is custom-planned — no cookie-cutter solutions.",
      followUpChips: ["TALK TO MARC", "HOW IS IT PRICED?", "AREAS WE COVER"],
      links: [
        { label: "Executive Protection", url: "/executive-protection" },
        { label: "Armed Officers", url: "/armed-officers" },
        { label: "Estate Security", url: "/estate-security" },
        { label: "Event Security", url: "/event-security" },
      ],
    },
    {
      id: "areas-we-cover",
      chipLabel: "AREAS WE COVER",
      keywords: ["areas", "locations", "coverage", "where", "cities", "counties", "florida", "palm beach", "miami", "boca", "fort lauderdale"],
      answer:
        "We serve all of South Florida including Delray Beach, Miami, Miami Beach, Palm Beach, Boca Raton, Fort Lauderdale, Naples, Sarasota, Tampa, Orlando, Jacksonville, and surrounding areas. We also operate statewide across Florida and beyond.",
      followUpChips: ["OUR SERVICES", "TALK TO MARC"],
      links: [
        { label: "View All Locations", url: "/locations" },
        { label: "Palm Beach", url: "/locations/palm-beach" },
        { label: "Miami", url: "/locations/miami" },
        { label: "Delray Beach (HQ)", url: "/locations/delray-beach" },
      ],
    },
    {
      id: "how-fast",
      chipLabel: "HOW FAST CAN YOU START?",
      keywords: ["how fast", "start", "timeline", "quick", "urgent", "emergency", "dispatch", "rapid"],
      answer:
        "We can mobilize quickly — sometimes within 24 to 48 hours for urgent situations, and as fast as 2 to 3 hours for critical executive deployments across Palm Beach, Broward, and Miami-Dade. Contact us directly and Marc will assess your situation and needs immediately.",
      followUpChips: ["TALK TO MARC", "IS IT CONFIDENTIAL?"],
    },
    {
      id: "pricing",
      chipLabel: "HOW IS IT PRICED?",
      keywords: ["pricing", "price", "cost", "how much", "rate", "hourly", "fees", "quote"],
      answer:
        "Every engagement is custom-quoted based on your threat level, number of agents required, duration, and specific services. In South Florida, professional executive protection typically ranges from $85 to $175/hr ($450–$900/day), while long-term unarmed security starts at $22–$28/hr. We don't publish rigid rate cards — your situation is handled confidentially from the first conversation.",
      followUpChips: ["TALK TO MARC", "IS IT CONFIDENTIAL?"],
      links: [
        { label: "Bodyguard Cost Guide", url: "/blog/bodyguard-cost-south-florida" },
        { label: "Private Security Cost Guide", url: "/blog/private-security-cost-florida" },
      ],
    },
    {
      id: "confidential",
      chipLabel: "IS IT CONFIDENTIAL?",
      keywords: ["confidential", "privacy", "discreet", "nda", "secret", "protection of identity"],
      answer:
        "Absolutely. We never discuss who we protect, the nature of engagements, or any client details — with anyone. Every inquiry is handled with complete discretion from your first contact with us, and bilateral NDAs are standard upon request.",
      followUpChips: ["TALK TO MARC", "OUR SERVICES"],
    },
    {
      id: "who-is-marc",
      chipLabel: "WHO IS MARC?",
      keywords: ["who is marc", "marc tardalo", "owner", "founder", "founder bio", "background", "experience"],
      answer:
        "Marc A. Tardalo is the founder of Massive Protective Services. He brings 15+ years of executive protection experience — having protected Grammy Award-winning artists, NFL MVPs, BCS Championship executives, and high-net-worth families. He holds a Florida Class G Statewide Firearms License, Class B Security Contractor Manager License, and advanced EP certification from LaSorsa & Associates. MPS was founded in 2013.",
      followUpChips: ["TALK TO MARC", "OUR SERVICES"],
      links: [
        { label: "Read Marc's Full Bio", url: "/about" },
        { label: "Agency Credentials", url: "/credentials" },
      ],
    },
    {
      id: "talk-to-marc",
      chipLabel: "TALK TO MARC",
      keywords: ["talk to marc", "contact", "call", "phone", "speak", "reach", "consultation", "hire"],
      answer: "Happy to connect you with Marc. How would you like to reach him?",
      type: "contact-flow",
      contactOptions: [
        {
          id: "call-now",
          label: "Call Marc Now (954-234-7231)",
          type: "tel",
          action: "tel:19542347231",
          style: "filled",
        },
        {
          id: "request-callback",
          label: "Request a Direct Callback",
          type: "callback-form",
          style: "outline",
        },
        {
          id: "whatsapp",
          label: "WhatsApp Marc Directly",
          type: "url",
          action: "https://api.whatsapp.com/send?phone=923088034975&text=Hello%20Marc%2C%20I%20am%20inquiring%20about%20Massive%20Protective%20Services.",
          style: "outline",
        },
        {
          id: "quote-request",
          label: "Submit Confidential RFP",
          type: "url",
          action: "/contact",
          style: "outline",
        },
      ],
    },
  ] as QARecord[],

  callbackForm: {
    triggerChipId: "request-callback",
    introMessage:
      "Leave your name and best number and Marc will call you back as soon as possible.",
    fields: [
      {
        id: "name",
        label: "Name",
        placeholder: "Your name",
        type: "text",
        required: true,
      },
      {
        id: "phone",
        label: "Phone Number",
        placeholder: "Best number to reach you",
        type: "tel",
        required: true,
      },
      {
        id: "best-time",
        label: "Best Time to Call",
        placeholder: "e.g. Mornings, After 5pm, Anytime",
        type: "text",
        required: false,
      },
    ],
    submitLabel: "Request Callback",
    successMessage:
      "Got it. Marc will call you back shortly. All information is kept strictly confidential.",
    emailTo: "smb6925@gmail.com",
  },

  quoteFlow: {
    triggerChipId: "quote-request",
    introMessage:
      "For a detailed, confidential quote, fill out our secure enquiry form.",
    ctaLabel: "Open Quote Form",
    ctaLink: "/contact",
  },
};

/**
 * Website-Wide Knowledge Index for Free-Text Question Answering
 */
export interface KnowledgeEntry {
  topic: string;
  keywords: string[];
  title: string;
  summary: string;
  linkText?: string;
  url?: string;
  followUps?: string[];
}

export const WEBSITE_KNOWLEDGE_BASE: KnowledgeEntry[] = [
  // Services
  {
    topic: "executive-protection",
    keywords: ["executive protection", "ep", "close protection", "bodyguard", "vip protection", "principal"],
    title: "Executive Protection Details",
    summary:
      "Our executive protection details combine advance venue surveys, counter-surveillance, secure transit, and discreet Class G armed protection. Designed for corporate officers, family office principals, and public figures.",
    linkText: "Explore Executive Protection",
    url: "/executive-protection",
    followUps: ["HOW IS IT PRICED?", "TALK TO MARC"],
  },
  {
    topic: "estate-security",
    keywords: ["estate", "residential", "home security", "property", "gated compound", "residence"],
    title: "Estate & Residential Security",
    summary:
      "We secure private compounds, oceanfront estates, and luxury residences across South Florida with static access control, roving perimeter patrols, and integrated alarm/camera monitoring.",
    linkText: "View Estate Security",
    url: "/estate-security",
    followUps: ["AREAS WE COVER", "TALK TO MARC"],
  },
  {
    topic: "event-security",
    keywords: ["wedding", "party", "event", "gala", "reception", "private party", "guest list"],
    title: "Wedding & Private Event Security",
    summary:
      "Discreet plain-clothes security for luxury weddings and private estate events. We manage guest lists, deter crashers, secure card/gift tables, and handle valet arrivals seamlessly.",
    linkText: "View Event Security",
    url: "/event-security",
    followUps: ["HOW IS IT PRICED?", "TALK TO MARC"],
  },
  {
    topic: "armed-security",
    keywords: ["armed", "firearms", "gun", "class g", "lethal deterrence", "armed officers"],
    title: "Florida Class G Armed Officers",
    summary:
      "All armed operators hold Florida Class G statewide firearm licenses, complete 28 hours of tactical range training, and undergo annual requalifications. Armed bodyguards carry concealed in tailored suits.",
    linkText: "Learn About Armed Security",
    url: "/armed-officers",
    followUps: ["IS IT CONFIDENTIAL?", "TALK TO MARC"],
  },
  {
    topic: "unarmed-security",
    keywords: ["unarmed", "class d", "front desk", "lobby", "concierge guard"],
    title: "Unarmed Security Officers",
    summary:
      "Florida Class D licensed officers focused on presence, customer service, access management, and de-escalation for corporate lobbies, condominiums, and commercial retail.",
    linkText: "View Unarmed Security",
    url: "/unarmed-security-guards",
    followUps: ["HOW IS IT PRICED?", "OUR SERVICES"],
  },
  {
    topic: "corporate-security",
    keywords: ["corporate", "office", "workplace", "termination", "shareholder meeting"],
    title: "Corporate & Workplace Security",
    summary:
      "Protection for executive boardrooms, corporate facilities, and high-risk employee termination hearings with discreet plain-clothes tactical teams.",
    linkText: "View Corporate Security",
    url: "/corporate-security",
    followUps: ["TALK TO MARC", "HOW FAST CAN YOU START?"],
  },
  {
    topic: "secure-transportation",
    keywords: ["driver", "suv", "transport", "airport meet", "convoy", "fbo", "private terminal"],
    title: "Secure Transportation & Security Drivers",
    summary:
      "Dedicated security drivers and luxury armored SUVs providing tarmac meet-and-greet at private FBOs and commercial airports, with pre-planned routes and counter-surveillance.",
    linkText: "Secure Transportation",
    url: "/services/secure-transportation",
    followUps: ["AREAS WE COVER", "TALK TO MARC"],
  },
  {
    topic: "safe-room",
    keywords: ["safe room", "panic room", "storm shelter", "hurricane", "intruder room"],
    title: "Residential Safe Rooms & Storm Defense",
    summary:
      "Safe room planning combining FEMA hurricane wind criteria (250 mph) with ballistic intruder resistance, emergency comms, and verified family response protocols.",
    linkText: "Read Safe Room Guide",
    url: "/blog/safe-room-in-house-florida",
    followUps: ["OUR SERVICES", "TALK TO MARC"],
  },
  // Licensing & Law
  {
    topic: "licensing",
    keywords: ["license", "fdacs", "chapter 493", "class b", "class d", "class g", "legal", "insurance"],
    title: "Statewide Statutory Licensing & Insurance",
    summary:
      "Massive Protective Services operates under Florida Agency License B1400200. We carry comprehensive commercial general liability insurance ($2M–$5M), and all agents are vetted and licensed by FDACS.",
    linkText: "View Credentials",
    url: "/credentials",
    followUps: ["WHO IS MARC?", "TALK TO MARC"],
  },
  // Specific Locations
  {
    topic: "palm-beach",
    keywords: ["palm beach", "manalapan", "gulf stream", "worth avenue", "ocean boulevard"],
    title: "Palm Beach County Security Coverage",
    summary:
      "Headquartered in Delray Beach, we provide rapid deployment and dedicated residential coverage across Palm Beach, Boca Raton, Manalapan, Wellington, and West Palm Beach.",
    linkText: "Palm Beach Services",
    url: "/locations/palm-beach",
    followUps: ["OUR SERVICES", "TALK TO MARC"],
  },
  {
    topic: "miami",
    keywords: ["miami", "brickell", "miami beach", "star island", "coral gables", "aventura"],
    title: "Miami-Dade County Security Coverage",
    summary:
      "Full coverage throughout Miami, Miami Beach, Brickell financial district, Coral Gables, and private residential islands with 24/7 armed details and secure motorcades.",
    linkText: "Miami Security Details",
    url: "/locations/miami",
    followUps: ["OUR SERVICES", "TALK TO MARC"],
  },
];

