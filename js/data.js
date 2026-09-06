/**
 * Subterra Dynamics Limited — Centralized site data
 */
const SITE = {
  name: 'Subterra Dynamics Limited',
  tagline: 'Transforming industries through sustainable and innovative solutions.',
  email: 'info@subterradynamics.com',
  phones: ['+2349064159174', '+2348155288800'],
  address: '25/26 Victoria Ironsi Crescent, Road 41, Gwarimpa Estate, Abuja, Nigeria',
  copyright: 'Copyright © 2025 - Subterra Dynamics, All Rights Reserved.',
  baseUrl: 'https://www.subterradynamics.com',
  assetBase: 'https://www.subterradynamics.com/assets/images'
};

const NAV = [
  { label: 'Home', href: '/index.html' },
  { label: 'About', href: '/about.html' },
  { label: 'Services', href: '/services.html', mega: true },
  { label: 'Projects', href: '/projects.html' },
  { label: 'Team', href: '/team.html' },
  { label: 'Contact', href: '/contact.html' }
];

const SERVICES = [
  {
    id: 'consulting',
    number: '01',
    title: 'Consulting Services',
    shortTitle: 'Consulting',
    description: 'Our consulting practice offers strategic guidance across business planning, transformation, compliance, performance improvement, and market entry.',
    capabilities: ['Business strategy development', 'Process optimization', 'Market entry consulting'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
    href: '/services/consulting.html',
    approach: 'We combine rigorous analysis with practical execution planning to help organizations navigate complexity, improve performance, and achieve sustainable growth.',
    visual: 'Executive consulting, strategy, business transformation'
  },
  {
    id: 'hr-training',
    number: '02',
    title: 'HR & Training Services',
    shortTitle: 'HR & Training',
    description: 'We provide strategic HR solutions covering recruitment, talent management, HR outsourcing, and bespoke training programs.',
    capabilities: ['Talent acquisition', 'HR outsourcing', 'Training programs'],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80',
    href: '/services/hr-training.html',
    approach: 'Our HR and training practice aligns people strategy with organizational goals through structured programs, policy development, and capacity building.',
    visual: 'Leadership development, professional training, workforce collaboration'
  },
  {
    id: 'information-technology',
    number: '03',
    title: 'Information Technology Services',
    shortTitle: 'IT',
    description: 'We deliver comprehensive IT services including infrastructure design, software development, enterprise systems integration, and cybersecurity.',
    capabilities: ['Infrastructure design', 'Software development', 'Cybersecurity solutions'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
    href: '/services/information-technology.html',
    approach: 'We design and implement technology solutions that strengthen operations, improve security, and enable digital transformation at enterprise scale.',
    visual: 'Enterprise technology, software engineering, cybersecurity'
  },
  {
    id: 'procurement',
    number: '04',
    title: 'Procurement Services',
    shortTitle: 'Procurement',
    description: 'We offer end-to-end procurement solutions that cover vendor sourcing, supplier management, contract negotiation, purchasing, and logistics. Our approach is grounded in strategic sourcing, risk mitigation, and value optimization.',
    capabilities: ['Vendor sourcing & management', 'Contract negotiation', 'Logistics coordination'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
    href: '/services/procurement.html',
    approach: 'Our procurement practice emphasizes strategic sourcing, transparent supplier management, and efficient logistics to deliver value across the supply chain.',
    visual: 'Supply chain, logistics, procurement operations'
  },
  {
    id: 'renewable-energy',
    number: '05',
    title: 'Renewable Energy Solutions',
    shortTitle: 'Renewable Energy',
    description: 'We offer tailored renewable energy solutions including solar PV system design, energy audits, and hybrid power systems.',
    capabilities: ['Solar PV systems', 'Energy audits', 'Hybrid power solutions'],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80',
    href: '/services/renewable-energy.html',
    approach: 'We deliver practical renewable energy solutions designed for reliability, efficiency, and long-term operational performance.',
    visual: 'Solar panels, power infrastructure, sustainability'
  },
  {
    id: 'construction',
    number: '06',
    title: 'Construction Services',
    shortTitle: 'Construction',
    description: 'We offer professional construction services including civil works, building construction, renovation, and project management.',
    capabilities: ['Civil works', 'Building construction', 'Project management'],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80',
    href: '/services/construction.html',
    approach: 'Our construction team delivers disciplined project management, technical excellence, and quality execution across civil and building works.',
    visual: 'Engineering, infrastructure development, project management'
  },
  {
    id: 'agricultural-export',
    number: '07',
    title: 'Agricultural Commodity Export',
    shortTitle: 'Agricultural Export',
    description: 'We engage in the production, sourcing, and export of high-demand agricultural commodities with full traceability from field to shipment.',
    capabilities: ['Hibiscus leaves', 'Sesame seeds', 'Ginger & soya beans'],
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80',
    href: '/services/agricultural-export.html',
    approach: 'We manage agricultural commodity sourcing and export with traceability, quality control, and international trade standards.',
    visual: 'African agriculture, commodities, export logistics'
  },
  {
    id: 'mining',
    number: '08',
    title: 'Mining and Solid Minerals',
    shortTitle: 'Mining & Solid Minerals',
    description: 'We are engaged in the exportation of solid minerals and provide comprehensive mining services across the project lifecycle.',
    capabilities: ['Mineral exploration', 'Regulatory support', 'Mine development'],
    image: 'https://images.unsplash.com/photo-1619682817481-e994891cd6f5?w=1200&q=80',
    href: '/services/mining.html',
    approach: 'We support mining and solid minerals projects with technical expertise, regulatory guidance, and responsible development practices.',
    visual: 'Geological exploration, minerals, industrial operations'
  }
];

const STATS = [
  {
    value: 20,
    suffix: '+',
    label: 'Projects',
    description: 'We deliver successful projects, meeting complex challenges and exceeding expectations for our diverse clientele.'
  },
  {
    value: 55,
    suffix: '+',
    label: 'Combined Years of Expertise',
    description: 'With over 25 years of expertise, we bring profound industry knowledge to every solution we provide.'
  },
  {
    value: 13,
    suffix: '+',
    label: 'Satisfied Clients',
    description: 'Our commitment to delivering exceptional value has forged strong, lasting relationships with numerous satisfied clients.'
  }
];

const PARTNERS = [
  { name: 'Partner Organization', logo: `${SITE.assetBase}/nor.jpeg` },
  { name: 'National Lottery Nigeria', logo: `${SITE.assetBase}/nln.jpg` },
  { name: 'Systems & Gaming Networks Limited', logo: `${SITE.assetBase}/sandg.jpeg` },
  { name: 'Logic', logo: `${SITE.assetBase}/logic.jpeg` },
  { name: 'UBA', logo: `${SITE.assetBase}/uba.jpeg` },
  { name: 'Natijah Minerals Nigeria Limited', logo: `${SITE.assetBase}/natijah.jpeg` },
  { name: 'EAC', logo: `${SITE.assetBase}/eac.jpeg` },
  { name: 'EEE', logo: `${SITE.assetBase}/eee.jpeg` }
];

const PROJECTS = [
  {
    id: 'project-management-fundamentals',
    title: 'Project Management Fundamentals Training',
    client: 'National Lottery Nigeria',
    category: 'HR & Training',
    categorySlug: 'hr-training',
    image: `${SITE.assetBase}/nln.jpg`,
    description: 'Corporate training program delivering foundational project management skills for National Lottery Nigeria.',
    scope: null
  },
  {
    id: 'microsoft-office-productivity',
    title: 'Microsoft Office Productivity Tools Training',
    client: 'National Lottery Nigeria',
    category: 'HR & Training',
    categorySlug: 'hr-training',
    image: `${SITE.assetBase}/nln.jpg`,
    description: 'Training engagement focused on Microsoft Office productivity tools for National Lottery Nigeria.',
    scope: null
  },
  {
    id: 'finance-for-non-finance',
    title: 'Finance for Non-Finance Professionals Training',
    client: 'National Lottery Nigeria',
    category: 'HR & Training',
    categorySlug: 'hr-training',
    image: `${SITE.assetBase}/nln.jpg`,
    description: 'Specialized training program on finance fundamentals for non-finance professionals at National Lottery Nigeria.',
    scope: null
  },
  {
    id: 'data-analytics-business-intelligence',
    title: 'Corporate Training on Data Analytics and Business Intelligence',
    client: 'Systems & Gaming Networks Limited',
    category: 'IT',
    categorySlug: 'it',
    image: `${SITE.assetBase}/sandg.jpeg`,
    description: 'Corporate training on data analytics and business intelligence for Systems & Gaming Networks Limited.',
    scope: null
  },
  {
    id: 'natijah-minerals-transformation',
    title: 'Organizational Structuring, Job Evaluation, and Digital Transformation of Natijah Minerals Nigeria Limited',
    client: 'Natijah Minerals Nigeria Limited',
    category: 'Consulting',
    categorySlug: 'consulting',
    image: `${SITE.assetBase}/natijah.jpeg`,
    description: 'Comprehensive organizational and digital transformation initiative for Natijah Minerals Nigeria Limited.',
    scope: 'A comprehensive initiative to formalize operations, define job roles, implement a compensation framework, and deploy digital systems for accounting, inventory, and workflow automation.'
  },
  {
    id: 'nln-hr-policy-reform',
    title: 'Job Evaluation, Compensation Framework, and HR Policy Reform for the National Lottery Nigeria',
    client: 'National Lottery Nigeria',
    category: 'HR & Training',
    categorySlug: 'hr-training',
    image: `${SITE.assetBase}/nln.jpg`,
    description: 'Institutional HR reform project for National Lottery Nigeria.',
    scope: 'An institutional HR reform project focused on job grading, compensation alignment, and modernization of HR policies for compliance and performance management.'
  },
  {
    id: 'nln-hr-consultancy',
    title: 'HR Consultancy Services for creation of HR policy, process, procedures and preparation of draft policy documents',
    client: 'National Lottery Nigeria',
    category: 'HR & Training',
    categorySlug: 'hr-training',
    image: `${SITE.assetBase}/nln.jpg`,
    description: 'HR consultancy services covering policy, process, procedures, and draft policy document preparation.',
    scope: null
  },
  {
    id: 'fund-structuring-advisory',
    title: 'Advisory Services on Fund Structuring for sector investment promotion',
    client: 'Confidential',
    category: 'Consulting',
    categorySlug: 'consulting',
    image: 'https://images.unsplash.com/photo-1454165804603-c3d57bc86b40?w=800&q=80',
    description: 'Advisory services on fund structuring for sector investment promotion.',
    scope: 'End-to-end advisory support on the structuring and strategic positioning of a sector-focused investment fund (including outlining governance frameworks, operational guidelines, and compliance considerations, amongst others).'
  },
  {
    id: 'strategic-event-planning',
    title: 'Advisory Services on Strategic Event Planning for Sector Investment Promotion',
    client: 'Confidential',
    category: 'Consulting',
    categorySlug: 'consulting',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    description: 'Strategic event planning advisory for sector investment promotion.',
    scope: 'Development of a comprehensive roadmap and checklist for a high-level corporate event designed to spotlight the fund. The planned event aims to attract over 1,000 key industry stakeholders, financiers, and policymakers, serving as a platform to de-risk the sector, showcase viable opportunities, and catalyze investor participation. Our work bridged financial advisory with strategic stakeholder engagement, positioning the fund for long-term impact and visibility.'
  },
  {
    id: 'it-office-equipment-procurement',
    title: 'Supply of IT and office equipments (Procurement)',
    client: 'National Lottery Nigeria',
    category: 'Procurement',
    categorySlug: 'procurement',
    image: `${SITE.assetBase}/nln.jpg`,
    description: 'Procurement and supply of IT and office equipment for National Lottery Nigeria.',
    scope: null
  },
  {
    id: 'solar-inverter-installation',
    title: 'Installation and Commissioning of 15kva Solar Inverter System',
    client: 'Systems & Gaming Networks Limited',
    category: 'Renewable Energy',
    categorySlug: 'renewable-energy',
    image: `${SITE.assetBase}/sandg.jpeg`,
    description: 'Installation and commissioning of a 15kva solar inverter system for Systems & Gaming Networks Limited.',
    scope: null
  }
];

const PROJECT_FILTERS = [
  { label: 'All', slug: 'all' },
  { label: 'Consulting', slug: 'consulting' },
  { label: 'HR & Training', slug: 'hr-training' },
  { label: 'IT', slug: 'it' },
  { label: 'Procurement', slug: 'procurement' },
  { label: 'Renewable Energy', slug: 'renewable-energy' },
  { label: 'Construction', slug: 'construction' },
  { label: 'Agriculture', slug: 'agriculture' },
  { label: 'Mining', slug: 'mining' }
];

const TEAM = [
  {
    id: 'mojisola-olateru-olagbegi',
    name: 'Mojisola Olateru-Olagbegi',
    title: 'Chairman',
    image: `${SITE.assetBase}/subpro1.png`,
    bio: `Dr. Mojisola Olateru-Olagbegi is a seasoned ICT and project management expert with over 27 years of global experience spanning Nigeria, the U.S., and Canada. She has led diverse technology programs and consulting engagements across public and private sectors, with specialization in ICT strategy, governance, e-Government, and capacity building. A co-founder of The Workplace Centre and Chairman of Elrae Technologies Ltd, Moji has served in leadership and consulting roles for Dow Chemical, General Motors, Chrysler, and the Nigerian Federal Ministry of Communication Technology, among others. She has also led initiatives for the World Bank and Rockefeller Foundation focused on digital jobs and youth empowerment. Moji holds a PhD in Strategy, Project & Programme Management, M.Sc. in Electronics, B.Sc. in Electrical Engineering, and PMP, MCSE, and CISA certifications. A passionate advocate for youth in technology, she also sits on the boards of nonprofit STEM and job creation initiatives in Nigeria and the U.S.`,
    qualifications: ['PhD in Strategy, Project & Programme Management', 'M.Sc. in Electronics', 'B.Sc. in Electrical Engineering', 'PMP, MCSE, and CISA certifications'],
    expertise: ['ICT strategy', 'e-Government', 'Capacity building', 'Project management']
  },
  {
    id: 'benjamin-eliye',
    name: 'Benjamin Eliye',
    title: 'MD/CEO',
    image: `${SITE.assetBase}/subpro13.jpeg`,
    bio: `Benjamin Eliye is the Managing Director of Subterra Dynamics Limited, where he provides visionary leadership and strategic direction to drive sustainable growth and operational excellence. He holds a Bachelor's degree in Economics from the University of Maiduguri and is a Chartered Accountant accredited by the Institute of Chartered Accountants of Nigeria. Benjamin brings a wealth of experience in finance, business development, and corporate governance. He is a co-founder of Elrae Technologies Limited, where he played a key role in pioneering innovative technology solutions and overseeing the successful execution of major projects. His professional background includes key roles at reputable institutions such as Standard Chartered Bank, Stanton Limited, Petra Digital Press Limited and Panic Alarm Security Systems, where he specialized in finance and business growth.before co-founding Elrae As Managing Director of Subterra Dynamics, Benjamin leverages his strong financial expertise and entrepreneurial insight to enhance organizational performance, foster innovation, and build lasting stakeholder value.`,
    qualifications: ["Bachelor's degree in Economics, University of Maiduguri", 'Chartered Accountant (ICAN)'],
    expertise: ['Finance', 'Business development', 'Corporate governance', 'Strategic leadership']
  },
  {
    id: 'kachi-onubogu',
    name: 'Dr. Kachi Onubogu',
    title: 'Programs Director',
    image: `${SITE.assetBase}/subpro4.jpeg`,
    bio: `Dr. Kachi Onubogu is a seasoned business executive, strategist, and thought leader with over 28 years of experience across multiple sectors including FMCG, retail, consulting, and executive education. As Executive Director for Training & Capacity Development at Subterra Dynamics, he brings visionary leadership to the firm's learning programs, with a focus on designing high-impact training solutions for enterprise growth, innovation, and human capital development. Dr. Onubogu's professional journey spans senior leadership roles with leading companies such as Promasidor Nigeria, where he served as Executive Director of Commercial, and Shoprite Nigeria, where he was Chief Executive Officer. He has held significant regional and strategic leadership roles in Africa's corporate landscape and is known for building high-performance teams, driving business transformation, and mentoring emerging leaders. His academic and executive education credentials are globally distinguished. He holds a Doctorate in Business Administration from the Swiss Business School an MBA from the University of Pretoria South Africa, he has completed advanced management program  at the Wharton Business School, and has a BSc in Physics from the University of Jos Nigeria. He is also a Fellow of the National Institute of Marketing and a member of the Institute of Directors of Nigeria. As Programs Director at Subterra Dynamics, Dr. Onubogu leads the design, development, and implementation of transformational learning experiences tailored for public and private sector clients. His approach integrates international best practices with local context to deliver trainings that are strategic, actionable, and measurable. In addition to his role at Subterra Dynamics, Dr. Onubogu serves is an adjunct Faculty of the Lagos Business School, seats on various boards within and outside Nigeria. He is a mentor to numerous startups and entrepreneurs, and is a frequent keynote speaker at conferences focused on strategy, leadership, and business transformation.`,
    qualifications: ['DBA, Swiss Business School', 'MBA, University of Pretoria', 'Advanced Management Program, Wharton Business School', 'BSc Physics, University of Jos'],
    expertise: ['Executive education', 'Business transformation', 'Training & capacity development', 'Strategic leadership']
  },
  {
    id: 'jemila-giwa',
    name: 'Jemila Giwa, Esq.',
    title: 'Legal & Compliance Lead',
    image: `${SITE.assetBase}/jemila.jpeg`,
    bio: `Jemila Giwa is a seasoned corporate and commercial lawyer with expertise in regulatory compliance, data privacy, and technology law. She brings valuable legal insight to Subterra Dynamics, advising on business structuring, risk mitigation, and compliance across various sectors. A member of the Business Recovery and Insolvency Practitioners Association of Nigeria, Jemila has provided legal counsel to startups, mid-sized firms, and large corporations. Her professional experience spans respected law firms and corporate legal departments, including Kanu Agabi SAN & Associates, Ace Solicitors, Kamen Aggregates & Construction Ltd, CrowdForce Inc. With deep knowledge of both domestic and international data protection laws, Jemila helps clients navigate legal complexities in today's digital economy. She is committed to ensuring legal integrity, regulatory compliance, and sound corporate governance in every transaction and advisory role.`,
    qualifications: ['Corporate and commercial law', 'Member, Business Recovery and Insolvency Practitioners Association of Nigeria'],
    expertise: ['Regulatory compliance', 'Data privacy', 'Technology law', 'Corporate governance']
  },
  {
    id: 'akoje-henry-udile',
    name: 'Engr. Akoje Henry Udile',
    title: 'Head, Civil & Structural Engineering',
    image: `${SITE.assetBase}/udile.jpeg`,
    bio: `Engr. Akoje Henry Udile is a COREN-certified civil engineer with nearly two decades of experience in structural design, project management, and civil infrastructure development. A graduate of Civil Engineering from the University of Agriculture, Makurdi, he is also a member of the Nigerian Society of Engineers (NSE) and the Nigerian Institution of Civil Engineers (NICE). Throughout his career, Engr. Henry has led numerous residential, commercial, and industrial construction projects across Nigeria, consistently delivering high-quality results through his technical expertise, cost optimization strategies, and strong leadership skills. His portfolio includes managing the construction of over 500 housing units in Bauchi State, multiple high-end residential developments in Abuja, commercial remodels in Lagos and Kaduna, and infrastructure projects such as quarry machinery foundations, hotel complexes, and truck sheds. He is proficient in structural design tools and software including AutoCAD and ORION, and brings deep knowledge of construction methodologies and equipment handling. With a strong background in client relations and project execution, he ensures timely delivery without compromising standards. Engr. Henry brings a hands-on, solutions-driven approach to engineering leadership at Subterra Dynamics.`,
    qualifications: ['B.Eng Civil Engineering, University of Agriculture, Makurdi', 'COREN-certified', 'Member, NSE and NICE'],
    expertise: ['Structural design', 'Civil infrastructure', 'Project management', 'Construction methodologies']
  },
  {
    id: 'attah-ogaba-joseph',
    name: 'Attah Ogaba Joseph',
    title: 'Head, Renewable and Green Energy',
    image: `${SITE.assetBase}/subpro2.jpeg`,
    bio: `Attah Ogaba Joseph is an experienced engineer with a Bachelor of Engineering in Electrical and Electronics Engineering and certification in Fiber Optics Engineering. He has managed large-scale technical projects, specializing in systems development and fiber optics, with a proven track record of delivering quality projects on time while improving operational efficiency. Recently, Attah has focused on renewable and green energy, driving sustainable technology solutions and clean energy initiatives. He is skilled in project lifecycle management, system design, and strategic process improvements. Attah's ability to lead cross-functional teams and manage complex projects under tight deadlines supports his role in advancing Subterra Dynamics' renewable energy goals, fostering innovative and sustainable energy solutions.`,
    qualifications: ['B.Eng Electrical and Electronics Engineering', 'Certification in Fiber Optics Engineering'],
    expertise: ['Renewable energy', 'Systems development', 'Fiber optics', 'Project lifecycle management']
  }
];

if (typeof module !== 'undefined') module.exports = { SITE, NAV, SERVICES, STATS, PARTNERS, PROJECTS, PROJECT_FILTERS, TEAM };
