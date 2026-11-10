import { CHATBOT_CONFIG, WEBSITE_KNOWLEDGE_BASE, QARecord } from '@/data/chatbotData';

export interface BotResponse {
  id: string;
  text: string;
  type?: 'text' | 'contact-flow';
  contactOptions?: typeof CHATBOT_CONFIG.qa[0]['contactOptions'];
  followUpChips?: string[];
  links?: { label: string; url: string }[];
}

/**
 * Normalizes input string for fuzzy token matching
 */
function normalize(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

/**
 * Finds the best answer for a user query (free-text or chip click)
 */
export function processChatQuery(query: string): BotResponse {
  const normQuery = normalize(query);

  // 1. Direct match with Q&A quick chips
  const directChipMatch = CHATBOT_CONFIG.qa.find(
    (qa) => qa.chipLabel && normalize(qa.chipLabel) === normQuery
  );
  if (directChipMatch) {
    return formatResponse(directChipMatch);
  }

  // 2. Keyword score matching against Predefined QA
  let bestQAMatch: { score: number; qa: QARecord } | null = null;
  for (const qa of CHATBOT_CONFIG.qa) {
    let score = 0;
    if (qa.keywords) {
      for (const kw of qa.keywords) {
        const normKw = normalize(kw);
        if (normQuery.includes(normKw)) {
          score += normKw.split(' ').length * 10;
        }
      }
    }
    if (score > 0 && (!bestQAMatch || score > bestQAMatch.score)) {
      bestQAMatch = { score, qa };
    }
  }

  if (bestQAMatch && bestQAMatch.score >= 10) {
    return formatResponse(bestQAMatch.qa);
  }

  // 3. Search across Website Knowledge Base (Services, Locations, Pricing, Licensing, Safe Room)
  let bestKnowledgeMatch: { score: number; entry: typeof WEBSITE_KNOWLEDGE_BASE[0] } | null = null;
  for (const entry of WEBSITE_KNOWLEDGE_BASE) {
    let score = 0;
    for (const kw of entry.keywords) {
      const normKw = normalize(kw);
      if (normQuery.includes(normKw)) {
        score += normKw.split(' ').length * 10;
      }
    }
    if (score > 0 && (!bestKnowledgeMatch || score > bestKnowledgeMatch.score)) {
      bestKnowledgeMatch = { score, entry };
    }
  }

  if (bestKnowledgeMatch && bestKnowledgeMatch.score >= 10) {
    const k = bestKnowledgeMatch.entry;
    return {
      id: `kb-${k.topic}`,
      text: `${k.summary}`,
      links: k.url ? [{ label: k.linkText || 'Learn More', url: k.url }] : undefined,
      followUpChips: k.followUps || ['TALK TO MARC', 'OUR SERVICES'],
    };
  }

  // 4. Fallback intelligent response offering direct consultation
  return {
    id: `fallback-${Date.now()}`,
    text: "Thank you for reaching out. At Massive Protective Services, every engagement is custom-planned and kept strictly confidential. Would you like to speak directly with Marc A. Tardalo or review our core capabilities?",
    followUpChips: ['TALK TO MARC', 'OUR SERVICES', 'AREAS WE COVER', 'HOW IS IT PRICED?'],
  };
}

function formatResponse(qa: QARecord): BotResponse {
  return {
    id: qa.id,
    text: qa.answer,
    type: qa.type,
    contactOptions: qa.contactOptions,
    followUpChips: qa.followUpChips,
    links: qa.links,
  };
}

/**
 * Builds prefilled WhatsApp URL for instant chat with Marc
 */
export function buildWhatsAppUrl(message?: string): string {
  const number = CHATBOT_CONFIG.widget.whatsapp;
  const defaultText =
    "Hello Marc, I am inquiring about executive protection & security services from Massive Protective Services.";
  const text = message ? message : defaultText;
  return `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(text)}`;
}

