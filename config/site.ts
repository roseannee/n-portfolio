export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "n-portfolio",
  description: "n-portfolio",
  mainNav: [
    {
      title: "Home",
      href: "/",
      isHidden: true,
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  pages: {
    about: "About Me",
    projects: "My Projects",
    contact: "Contact Me",
  },
  links: {
    artstation: "https://www.artstation.com/wiramondi",
    github: "https://github.com/roseannee",
  },
}
