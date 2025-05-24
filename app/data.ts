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
      'https://www.youtube.com/watch?v=La1AOvXXJeg&t=46s',
    id: 'project1',
  },
  {
    name: 'Retail Supplier Analysis',
    description: 'Built supplier scorecards and performed ABC analysis using KPIs such as cost, defect rate, production lead time, and revenue, enhancing strategic vendor management.',
    link: 'https://github.com/hsuehningchao/Supplier-Analysis-Retail',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
    {
    name: 'Retail Competitor Analysis',
    description: 'Utilized CatBoost modeling to uncover key sales trends and customer behavior patterns',
    link: 'https://github.com/hsuehningchao/Competitor-Analysis-using-CatBoost-modeling',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Wabash',
    title: 'Logistics Analyst - Purdue Capstone Project',
    start: '2025 Feb',
    end: '2025 May',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Taipei City Market Administration Office',
    title: 'Project Manager',
    start: '2022 Feb',
    end: '2024 June',
    link: 'https://ibelick.com',
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
