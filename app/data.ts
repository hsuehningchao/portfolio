type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
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
      'Links tolls and damages to the right subscriber by analyzing trip data, timestamps, and inspection history. ',
    link: 'https://github.com/hsuehningchao/Smart-Logistics-Toll-and-Damage-Process-Redesign/blob/main/poster_new.pdf',
    video:
      'https://res.cloudinary.com/demisrw4d/image/upload/v1748105192/pexels-elevate-1267325_idqinc.jpg',
    id: 'project1',
  },
  {
    name: 'Retail Supplier Analysis',
    description: 'Built supplier scorecards and performed ABC analysis using KPIs such as cost, defect rate, production lead time, and revenue, enhancing strategic vendor management.',
    link: 'https://github.com/hsuehningchao/Supplier-Analysis-Retail',
    video:
      'https://res.cloudinary.com/demisrw4d/image/upload/v1748105192/pexels-tima-miroshnichenko-6169056_adbtx6.jpg',
    id: 'project2',
  },
    {
    name: 'Retail Competitor Analysis on Candy Brands',
    description: 'Utilized CatBoost modeling to uncover key sales trends and customer behavior patterns',
    link: 'https://github.com/hsuehningchao/Competitor-Analysis-using-CatBoost-modeling',
    video:
      'https://res.cloudinary.com/demisrw4d/video/upload/v1748106553/Media1_yc8eal.mp4',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Wabash',
    title: 'Logistics Analyst - Purdue Capstone Project',
    start: '2025 Feb',
    end: '2025 May',
    link:'',
    id: 'work1',
  },
  {
    company: 'Taipei City Market Administration Office',
    title: 'Project Manager',
    start: '2022 Feb',
    end: '2024 June',
    link:'',
    id: 'work2',
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
