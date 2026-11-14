export const url = (path = '') =>
  import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\/+/, '');

export const partners = [
  {
    slug: 'amos-ho-chern-wey', name: 'Partner One', area: 'Dispute Resolution',
    paragraphs: [
      'This sample biography introduces the lead for litigation and dispute resolution. It is a placeholder for the approved profile.',
      'The reference profile sets out experience across court levels, with an emphasis on civil and commercial litigation.',
      'The profile also includes practice highlights, excerpts from directory commentary, languages and professional qualifications.',
    ],
    topics: ['Trial & Advocacy', 'Manufacturing', 'Town Planning & Development', 'Commercial Disputes', 'Tort & Professional Negligence', 'Credit & Finance', 'Employment'],
  },
  {
    slug: 'joe-sew-chin-cheung', name: 'Partner Two', area: 'Conveyancing, Commercial & Corporate',
    paragraphs: [
      'This sample biography introduces a partner in property transactions and commercial law. It is a placeholder for the approved profile.',
      'The reference profile describes legal training and professional experience in conveyancing, real estate and advisory work.',
    ],
    topics: [],
  },
  {
    slug: 'calvin-kiew-wing-khong', name: 'Partner Three', area: 'Conveyancing, Commercial & Corporate',
    paragraphs: [
      'This sample biography introduces a partner in real estate and corporate transactions. It is a placeholder for the approved profile.',
      'The reference profile discusses property sales, development projects and leasing across residential, retail and commercial properties.',
      'Its corporate section covers share transactions and general advisory work.',
    ],
    topics: [],
  },
];

export const practices = [
  {
    slug: 'practice-area-dispute-resolution', label: 'Dispute Resolution', name: 'Dispute Resolution',
    paragraphs: ['This practice covers civil and business disputes before Malaysian courts and tribunals. The topics below show where approved descriptions of the firm’s work would appear.'],
    services: ['Commercial contracts', 'Employment matters', 'Personal and business insolvency', 'Planning and development', 'Company and shareholder disputes', 'Estate administration', 'Defamation', 'Judicial review', 'Land disputes', 'Professional negligence'],
  },
  {
    slug: 'practice-area-conveyancing', label: 'Conveyancing', name: 'Conveyancing, Commercial & Corporate',
    paragraphs: ['This practice covers real estate transactions and legal work for businesses.', 'The list below outlines the types of matters this page is designed to describe.'],
    services: ['Residential and commercial property transfers', 'Leases and tenancies', 'Real estate developments', 'Loan and financing documentation', 'Business agreements', 'Share transactions and corporate advisory'],
  },
];

export const news = [
  { slug: '2024/02/26/kuala-lumpur-high-court-dismissed-judgment-creditors-second-attempt-to-commence-judgment-debtor-summons', title: 'High Court dismisses a second application for a judgment debtor summons', date: '2024-02-26', summary: 'The case concerned a creditor’s attempt to begin another round of judgment debtor proceedings.' },
  { slug: '2024/02/26/thomson-reuters-alb-law-awards-2024', title: '2024 Malaysian legal awards announcement', date: '2024-02-26', summary: 'This entry corresponds to the reference site’s announcement about the 2024 award finalist selections.', photo: 'conference' },
  { slug: '2024/02/26/kuala-lumpur-high-court-handed-down-judgment-in-huat-hing-rubberwood-sdn-bhd-v-goodnite-sdn-bhd-2024', title: 'High Court issues judgment in a commercial trial', date: '2024-02-26', summary: 'This update concerns a contested commercial case decided after a trial in Kuala Lumpur.' },
  { slug: '2021/12/18/high-court-affirms-solicitors-liabilities-for-representing-an-imposter', title: 'High Court upholds liability in a case involving an impersonator', date: '2021-12-18', summary: 'On appeal, the High Court reviewed liability arising from solicitors’ dealings with an impersonator.' },
  { slug: '2021/11/16/high-court-ordered-developer-to-refund-payments-to-purchaser-after-termination-of-sale-and-purchase-agreements', title: 'High Court orders partial repayment after property contracts end', date: '2021-11-16', summary: 'A purchaser sought to recover part of the purchase price after the sale agreements ended.' },
  { slug: '2021/09/10/high-court-upheld-the-right-to-restitution-under-the-principle-of-patel-v-mirza', title: 'High Court considers restitution under Patel v. Mirza', date: '2021-09-10', summary: 'The court considered a restitution claim involving allegations of unlicensed moneylending.' },
  { slug: '2021/01/26/we-are-a-set-of-law-firm-located-in-the-heart-of-kuala-lumpur-2', title: 'Federal Court declines a creditor’s application for leave', date: '2021-01-26', summary: 'A creditor sought leave after an unsuccessful attempt to recover a guaranteed sum.' },
];

export const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(date));

export const navigation = [
  { label: 'About Us', slug: 'about-us' },
  { label: 'Lawyers', slug: 'our-partners', children: partners.map(({ name, slug }) => ({ label: name, slug })) },
  { label: 'Practice Areas', slug: 'practice-areas', children: practices },
  { label: 'News & Events', slug: 'news-events' },
  { label: 'Contact', slug: 'contact' },
];
