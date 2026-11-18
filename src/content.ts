export const url = (path = '') =>
  import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\/+/, '');

export const navigation = [
  { label: 'About', path: 'about-us/' },
  { label: 'Practice Areas', path: 'practice-areas/' },
  { label: 'People', path: 'our-partners/' },
  { label: 'Insights', path: 'news-events/' },
];

export const practices = [
  {
    slug: 'business-disputes',
    name: 'Business disputes',
    summary: 'Organise the facts, identify what is at stake, and prepare for a conversation about your options.',
    examples: ['Unpaid invoices and disputed obligations', 'Disagreements over commercial agreements', 'Disputes between business owners'],
    prepare: 'Gather the relevant agreements, correspondence, and a short timeline. Flag any deadlines in letters or court documents.',
  },
  {
    slug: 'property-transactions',
    name: 'Property transactions',
    summary: 'Get your documents and questions in order before buying, selling, or leasing property.',
    examples: ['Buying or selling a property', 'Reviewing lease terms', 'Planning a property transaction around financing and completion dates'],
    prepare: 'Bring any offer, draft contract, financing documents, and a list of the dates you are working towards.',
  },
  {
    slug: 'commercial-agreements',
    name: 'Commercial agreements',
    summary: 'Identify the obligations, decisions, and open questions behind a proposed agreement.',
    examples: ['Supply and services agreements', 'New business arrangements', 'Changes to existing contracts'],
    prepare: 'Write down each party’s responsibilities and the commercial terms already agreed. Bring any draft and mark clauses that need discussion.',
  },
];

export const insights = [
  {
    slug: 'prepare-for-a-first-meeting',
    title: 'What to bring to a first meeting',
    summary: 'A short checklist for organising documents, dates, and questions before you meet a lawyer.',
    paragraphs: [
      'Write a timeline in date order. Add an entry for each important conversation, letter, or document, and mark any dates you are unsure about.',
      'Collect the original documents and put related emails or messages together. Keep the full conversation so the reader can see the context.',
      'List what you want to find out at the meeting. Mention any upcoming deadline at the start so it can be discussed early.',
    ],
  },
];
