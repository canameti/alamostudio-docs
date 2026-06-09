export default defineAppConfig({
  header: {
    title: 'Alamo Studio',
    logo: {
      light: '/logo/logo-light.png',
      dark: '/logo/logo-dark.png',
      alt: 'Alamo Studio Logo',
      display: 'logo',
      class: 'h-9 w-auto shrink-0',
      favicon: '/favicon.svg',
    },
  },
  socials: {
    x: 'https://x.com/alamostudio',
    discord: 'https://discord.gg/alamostudio',
  },
  github: {
    url: '',
    branch: '',
    owner: '',
    name: '',
  },
  assistant: {
    faqQuestions: {
      en: [
        { category: 'Getting Started', items: [
          'How do I install an Alamo Studio script?',
          'Which frameworks are supported?',
          'Where do I get support?',
        ] },
        { category: 'Alamo Market', items: [
          'How do I install Alamo Market?',
          'What dependencies does Alamo Market need?',
          'How do I configure Alamo Market?',
        ] },
        { category: 'Troubleshooting', items: [
          'The script does not start — what should I check?',
          'The UI does not open in-game',
          'How do I update a script?',
        ] },
      ],
    },
  },
  toc: {
    bottom: {
      links: [
        {
          icon: 'i-simple-icons-discord',
          label: 'Discord',
          to: 'https://discord.gg/alamostudio',
          target: '_blank',
        },
        {
          icon: 'i-lucide-shopping-bag',
          label: 'Tebex Store',
          to: 'https://alamostudio.tebex.io',
          target: '_blank',
        },
      ],
    },
  },
  ui: {
    colors: {
      primary: 'accent',
      neutral: 'zinc',
    },
    pageHero: {
      slots: {
        title: 'font-semibold sm:text-6xl',
        container: '!pb-0',
      },
    },
    pageCard: {
      slots: {
        container: 'lg:flex min-w-0',
        wrapper: 'flex-none',
      },
    },
  },
})
