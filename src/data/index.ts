import { GitHubIcon } from '@/components/icons/github'
import { LinkedInIcon } from '@/components/icons/linkedin'
import { XIcon } from '@/components/icons/x'
import { CSSIcon } from '@/components/icons/tags/css'
import { HTMLIcon } from '@/components/icons/tags/html'
import { JavaScriptIcon } from '@/components/icons/tags/javascript'
import { NextJSIcon } from '@/components/icons/tags/nextjs'
import { OpenAIIcon } from '@/components/icons/tags/openai'
import { ReactIcon } from '@/components/icons/tags/react'
import { SWCIcon } from '@/components/icons/tags/swc'
import { TypeScriptIcon } from '@/components/icons/tags/typescript'
import { ViteIcon } from '@/components/icons/tags/vite'
import { ShadcnIcon } from '@/components/icons/tags/shadcn-ui'
import { TailwindCSSIcon } from '@/components/icons/tags/tailwind-css'
import { AstroIcon } from '@/components/icons/tags/astro'
import { SvelteIcon } from '@/components/icons/tags/svelte'
import { NodeJSIcon } from '@/components/icons/tags/nodejs'
import { VitestIcon } from '@/components/icons/tags/vitest'
import { BootstrapIcon } from '@/components/icons/tags/bootstrap'
import { SupabaseIcon } from '@/components/icons/tags/supabase'
import { ReduxIcon } from '@/components/icons/tags/redux'
import { PNPMIcon } from '@/components/icons/tags/pnpm'
import { VercelIcon } from '@/components/icons/tags/vercel'
import { BasehubIcon } from '@/components/icons/tags/basehub'
import { GraphQLIcon } from '@/components/icons/tags/graphql'
import { FileTextIcon, LinkIcon, MailIcon } from 'lucide-react'

export const AVATAR = {
  name: 'Danyal Moazzam Jan',
  initials: 'DM'
}

export const ABOUT = {
  title: `🖥️ Frontend Engineer, 👨‍💻 Full Stack Developer and 🤖 AI Research Enthusiast.
  Influenced by 🎴Designs.📍Based in Lahore, Pakistan 🇵🇰`,
  description: `• Passionate about creating innovative tech solutions for social impact and in  making a positive difference in the world with my work. The web can sometimes be indistinguishable from magic, but I have the knowledge and patience required to make just about anything.`
}

export const LINKS = [
  {
    title: 'GitHub',
    url: 'https://github.com/danyalmoazzam',
    icon: GitHubIcon
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/danyalmoazzamjan',
    icon: LinkedInIcon
  },
  {
    title: 'X (Twitter)',
    url: 'https://x.com/danyalmoazzamm',
    icon: XIcon
  },
  {
    title: 'Resume',
    url: 'https://danyalcv.vercel.app/',
    icon: FileTextIcon
  },
  {
    title: 'Email',
    url: 'mailto:me@danyalmoazzamjan@gmail.com',
    icon: MailIcon
  },
  {
    title: 'Other Links',
    url: 'https://danyalink.vercel.app',
    icon: LinkIcon
  }
]

export const CAREER = [
  {
    company: 'Self Employed',
    link: 'https://github.com/danyalmoazzam',
    badges: ['Hybrid'],
    title: 'Frontend Developer',
    start: 'Jan, 2024',
    end: 'Present',
    description: `As a frontend web developer proficient in React, Next.js, and Tailwind CSS, I'll craft sleek user interfaces and seamless experiences. Join me in my Journey and shape the digital landscape with responsive, visually captivating web solutions.`
  },
  {
    company: 'MA Block',
    link: 'https://www.linkedin.com/company/mablock/',
    badges: ['Hybrid'],
    title: 'Graphic Designer',
    start: 'Aug, 2023',
    end: 'Dec, 2023',
    description:
    'Seeking a graphic designer with a proven track record of translating client requirements into stunning visual solutions, backed by a portfolio showcasing versatility, innovation, and mastery of design tools.'
  },
  {
    company: 'Concordia Colleges',
    link: 'https://concordia.edu.pk/',
    badges: ['On-Site'],
    title: 'HSSC in Computer Sciences',
    start: 'June, 2021',
    end: 'April, 2023',
    description: 'In intermediate education, computer science unfolds as a realm of deeper exploration, where concepts converge with practical applications, nurturing adeptness in coding languages and problem-solving strategies.'
  },
  {
    company: 'The Educators',
    link: 'https://educators.edu.pk/',
    badges: ['On-Site'],
    title: 'SSC in Computer Sciences',
    start: 'Jun, 2007',
    end: 'May, 2023',
    description:
      'Matriculating in computer science, where code is the canvas and algorithms are the paint, we embark on a journey to unravel the mysteries of digital landscapes and sculpt the future of technology.'
  }
]

const TAGS = {
  NEXT: {
    name: 'Next.js',
    icon: NextJSIcon
  },
  REACT: {
    name: 'React',
    icon: ReactIcon
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    icon: TypeScriptIcon
  },
  JAVASCRIPT: {
    name: 'JavaScript',
    icon: JavaScriptIcon
  },
  HTML: {
    name: 'HTML',
    icon: HTMLIcon
  },
  CSS: {
    name: 'CSS',
    icon: CSSIcon
  },
  VITE: {
    name: 'Vite',
    icon: ViteIcon
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    icon: TailwindCSSIcon
  },
  SHADCN: {
    name: 'Shadcn/ui',
    icon: ShadcnIcon
  },
  SWC: {
    name: 'SWC',
    icon: SWCIcon
  },
  OPENAI: {
    name: 'OpenAI',
    icon: OpenAIIcon
  },
  ASTRO: {
    name: 'Astro',
    icon: AstroIcon
  },
  SVELTE: {
    name: 'Svelte',
    icon: SvelteIcon
  },
  NODE: {
    name: 'Node.js',
    icon: NodeJSIcon
  },
  VITEST: {
    name: 'Vitest',
    icon: VitestIcon
  },
  BOOTSTRAP: {
    name: 'Bootstrap',
    icon: BootstrapIcon
  },
  SUPABASE: {
    name: 'Supabase',
    icon: SupabaseIcon
  },
  REDUX: {
    name: 'Redux',
    icon: ReduxIcon
  },
  PNPM: {
    name: 'PNPM',
    icon: PNPMIcon
  },
  VERCEL: {
    name: 'Vercel',
    icon: VercelIcon
  },
  BASEHUB: {
    name: 'BaseHub',
    icon: BasehubIcon
  },
  GRAPHQL: {
    name: 'GraphQL',
    icon: GraphQLIcon
  }
}

export const PROJECTS = [
  {
    title: 'Iphone Website Clone',
    tags: [
      TAGS.REACT,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT,
      TAGS.VERCEL
    ],
    description:
      'Apple Website Clone made with React, Tailwind, and Vercel.',
    link: {
      github: 'https://github.com/danyalmoazzam/iphone-web-clone',
      preview: 'https://iphoned.vercel.app'
    },
    image: '/images/iphone-web.png'
  },
  {
    title: 'Ochi Design',
    tags: [
      TAGS.JAVASCRIPT,
      TAGS.REACT,
      TAGS.TAILWIND,
      TAGS.VITE
    ],
    description:
    'Ochi Design Website Clone made with React.js, Tailwind, GSAP.',
    link: {
      github: 'https://github.com/danyalmoazzam/OchiDesignby-DM',
      preview: 'https://dochidesign.vercel.app'
    },
    image: '/images/ochi.png'
  },
  {
    title: 'World Map - Three.js',
    tags: [
      TAGS.TYPESCRIPT,
      TAGS.CSS,
      TAGS.HTML
    ],
    description: 'World Map made with Three.js.',
    link: {
      github: 'https://github.com/danyalmoazzam/world-map-three-js',
      preview: 'https://dworldmap.vercel.app'
    },
    image: '/images/world-map.png'
  },
  {
    title: 'Background Changer [ReactHooks]',
    tags: [TAGS.JAVASCRIPT, TAGS.TYPESCRIPT, TAGS.TAILWIND],
    description:
      'A simple background changer made with React and Tailwind.',
    link: {
      github: 'https://github.com/danyalmoazzam/bgChanger',
      preview: 'https://dbgchanger.vercel.app'
    },
    image: '/images/bgchanger.png'
  },
  {
    title: 'Calculator CLI App',
    tags: [
      TAGS.TYPESCRIPT,
      TAGS.NODE
    ],
    description: 'A Simple CLI Calculator App made with NodeJS and Typescript.',
    link: {
      github: 'https://github.com/danyalmoazzam/Simple-Calculater-CLI'
    },
    image: '/images/cli.png'
  },
  {
    title: 'Crud App',
    tags: [
      TAGS.CSS,
      TAGS.JAVASCRIPT,
      TAGS.REACT,
      TAGS.REDUX,
      TAGS.TYPESCRIPT,
      TAGS.VITE
    ],
    description: 'A Simple CRUD App made with React + Redux and Vite.',
    link: {
      github: 'https://github.com/danyalmoazzam/crud-react-with-redux/',
      preview: 'https://dcrudred.vercel.app/'
    },
    image: '/images/crud-ss.png'
  },
  {
    title: 'Weather App [React]',
    tags: [
      TAGS.REACT,
      TAGS.JAVASCRIPT,
      TAGS.TAILWIND,
      TAGS.VITE
    ],
    description:
      'Weather App made in React using Tailwind for styling.😉',
    link: {
      github: 'https://github.com/danyalmoazzam/Weather-App-React',
      preview: 'https://dweather.vercel.app'
    },
    image: '/images/weather-app.png'
  },
  {
    title: 'Spotify UI',
    tags: [
      TAGS.ASTRO,
      TAGS.JAVASCRIPT,
      TAGS.REACT,
      TAGS.SVELTE,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT
    ],
    description: 'An open-source Spotify clone built with Svelte and Astro.',
    link: {
      github: 'https://github.com/danyalmoazzam/spotify-ui',
      preview: 'https://spotified-ruby.vercel.app'
    },
    image: '/images/spotify-clone.png'
  },
  {
    title: 'NFT Store Dashboard',
    tags: [
      TAGS.HTML,
      TAGS.CSS,
      TAGS.JAVASCRIPT
    ],
    description:
      'NFT Store Dashboard made with HTML, CSS, and Javascript.',
    link: {
      github: 'https://github.com/danyalmoazzam/NFT-Store-Dashboard',
      preview: 'https://nft-store-lyart.vercel.app/'
    },
    video: '/images/nft.png'
  },
  {
    title: 'Login Form',
    tags: [
      TAGS.CSS,
      TAGS.HTML,
      TAGS.JAVASCRIPT
    ],
    description: 'An Animated Login Site made with HTML, CSS, and Javascript.',
    link: {
      github: 'https://github.com/danyalmoazzam/3D-Animated-Login-Site',
      preview: 'https://dlog-puce.vercel.app'
    },
    image: '/images/login.png'
  }
]
