type Project = {
  name: string
  description: string
  link: string
  video: string
  videoLink: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  description: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Revolutionizing Logistics The Future of Toll & Damage Attribution',
    description:
      'Automating tolls and damages of trailers to the right parties by analyzing trip data, timestamps, and inspection history.',
    link: 'https://github.com/hsuehningchao/Smart-Logistics-Toll-and-Damage-Process-Redesign/blob/main/poster_new.pdf',
    video:
      'https://res.cloudinary.com/demisrw4d/video/upload/v1748110870/Media2_prse4w.mp4',
    videoLink: 'https://youtu.be/La1AOvXXJeg',
    id: 'project1',
  },
  {
    name: 'Retail Supplier Analysis',
    description: 'Built supplier scorecards and performed ABC analysis using KPIs such as cost, defect rate, production lead time, and revenue, enhancing strategic vendor management.',
    link: 'https://github.com/hsuehningchao/Supplier-Analysis-Retail/blob/main/supply_chain%20analyitcs.ipynb',
    video:
      'https://res.cloudinary.com/demisrw4d/video/upload/v1748111152/Media3_tmpzjt.mp4',
    videoLink: '',
    id: 'project2',
  },
    {
    name: 'Retail Competitor Analysis on Candy Brands',
    description: 'Utilized CatBoost modeling to uncover key sales trends and customer behavior patterns',
    link: 'https://github.com/hsuehningchao/Competitor-Analysis-using-CatBoost-modeling/blob/main/Presentation_CompetitorAnalysis.pdf',
    video:
      'https://res.cloudinary.com/demisrw4d/video/upload/v1748106553/Media1_yc8eal.mp4',
    videoLink: '',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
    {
    company: 'Prediction Guard',
    title: 'Data Analyst - Purdue Capstone Project',
    start: '2025 May',
    end: 'Present',
    description: '',
    link:'',
    id: 'work1',
  },
  {
    company: 'Wabash',
    title: 'Logistics Analyst - Purdue Capstone Project',
    start: '2025 Feb',
    end: '2025 May',
    description: `．Designed toll and damage data attribution workflow using SQL, reducing billing disputes across trailer networks and eliminating manual work equivalent to 2 full-time employees.
      ．Assessed data readiness by aligning four tables and designing unified data schema to enhance data collection for model deployment and damage type classification.`,
    link:'https://www.youtube.com/watch?v=La1AOvXXJeg&t=46s',
    id: 'work2',
  },
  {
    company: 'Taipei City Market Administration Office',
    title: 'Project Manager',
    start: '2022 Feb',
    end: '2024 June',
    description: `．Oversaw operations of Taipei’s top-ranked retail markets, standardized compliance and food safety routines for 500+ vendors
                    by streamlining inspection workflows and implementing vendor training, reducing reported violations and aligning operations
                    with evolving municipal policies.
．Managed sourcing process for $800K facility service contracts by optimizing scope, supplier evaluation, RFP/RFQ
  development and contract negotiation, achieving 5% cost savings while ensuring vendor performance and business model fit.
．Orchestrated food court renovation project by hosting stakeholder briefings and site visits, aligning community concerns, and
  proposing new business model, resulting in 2-month acceleration in project delivery.
．Drove mobile payment adoption across 500+ traditional market vendors by promoting targeted campaigns tied to cultural
  events, resulting in a 30% increase in both vendor adoption and customer foot traffic during the pilot period.
．Responded to stakeholder sentiment during policy transitions by crafting strategic communications, including press releases,
  to mitigate concerns and maintain operational continuity.`,
    link:'',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Analysis: Nestlé and sennder’s Bid to Decarbonise Logistics',
    description: 'Summary on recent Supply Chain trends',
    link: 'https://medium.com/@youthful_chestnut_trout_215/analysis-nestl%C3%A9-and-sennders-bid-to-decarbonise-logistics-75c757e2513c',
    uid: 'blog-1',
  },
  {
    title: 'February 2025 Logistics Manager’s Index Report — Retail Analysis',
    description:
      'Summary on recent Supply Chain trends',
    link: 'https://medium.com/@youthful_chestnut_trout_215/february-2025-logistics-managers-index-report-retail-analysis-1cbbc0dccb9c',
    uid: 'blog-2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/hsueh-ning-chao/',
  },
  {
    label: 'Medium',
    link: 'https://medium.com/@youthful_chestnut_trout_215',
  },
]

export const EMAIL = 'hsuehning.chao@gmail.com'
