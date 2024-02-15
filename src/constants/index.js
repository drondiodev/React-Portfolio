import Image1 from "../assets/nextjs2.webp";
import Image2 from "../assets/squeezeEvents.webp";
import Image3 from "../assets/projetASTRO.webp";
import Image4 from "../assets/projetCV.webp";
import Image5 from "../assets/projetQRCODE.webp";
import Image6 from "../assets/githubScraper.webp";

export const navLinks = [
  {
    id: 1,
    href: "#home",
    arialabel: "Accueil",
    icon: "uil uil-estate nav__icon",
    label: "Accueil",
  },
  {
    id: 2,
    href: "#skills",
    arialabel: "Skills",
    icon: "uil uil-constructor nav__icon",
    label: "Skills",
  },
  {
    id: 3,
    href: "#portfolio",
    arialabel: "Portfolio",
    icon: "uil uil-scenery nav__icon",
    label: "Portfolio",
  },
  {
    id: 4,
    href: "#contact",
    arialabel: "Contact",
    icon: "uil uil-message nav__icon",
    label: "Contact",
  },
];

export const projectsNav = [
  {
    name: "tout",
  },
  {
    name: "application web",
  },
  {
    name: "site web",
  },
];

export const Data = [
  {
    id: 1,
    image: Image1,
    title: "Full Stack Next.JS 13 | Projet de plateforme E-commerce",
    alt: "Image du Projet de plateforme E-commerce",
    category: "application web",
    description:
      "Création from scratch, d'un site E-commerce, en utilisant Next.JS 13, TailwindCSS, TypeScript, Supabase, Stripe, Clerck et Shadcn-UI.",
    repo: "https://github.com/drondiodev/",
  },
  {
    id: 2,
    image: Image6,
    title: "My Github Repo Scraper",
    category: "application web",
    alt: "Image du Projet Github Scraper",
    description: "Projet de création d'un site pour scrapper des repos Github.",
    repo: "https://github.com/drondiodev/GithubScraper",
  },
  {
    id: 3,
    image: Image2,
    title: "Full Stack Next.JS 13 | Squeeze Events",
    alt: "Image du Projet Squeeze Events",
    category: "application web",
    description:
      "Projet en binôme, de création d'une plateforme de génération d'E-billets pour événements tech - En cours de construction.",
    repo: "https://github.com/drondiodev/event-app",
  },
  {
    id: 4,
    image: Image3,
    title: "Exemple de portfolio fait avec Astro",
    category: "site web",
    alt: "Image de mon ancien portfolio fait avec Astro",
    description: "Première itération de mon portfolio, réalisé avec Astro.",
    repo: "https://github.com/drondiodev/portfolio",
  },
  {
    id: 5,
    image: Image4,
    title: "Mon CV en HTML & SCSS",
    category: "site web",
    alt: "Image de précédent CV en HTML & SCSS",
    description: "Mon premier vrai projet en HTML et SCSS.",
    repo: "https://github.com/drondiodev/drondiodev.github.io",
  },
  {
    id: 6,
    image: Image5,
    title: "Qr-code-component",
    category: "site web",
    alt: "Image du projet Qr-code-component",
    description:
      "Challenge Frontend Mentor - Projet QR Code component en HTML et CSS.",
    repo: "https://github.com/drondiodev/QR-code-component",
  },
];

export const portfoliosdata = [
  {
    id: 0,
    featured_image: Image1,
    images: [Image1, Image1],
    title: "Full Stack Next.JS 13 | Projet de plateforme E-commerce",
    alt: "Image du Projet de plateforme E-commerce",
    body: {
      date: "2023",
      text: "Création from scratch, d'un site E-commerce, en utilisant Next.JS 13, TailwindCSS, TypeScript, Supabase, Stripe, Clerck et Shadcn-UI.",
      technologies: [
        "Next.JS 13",
        "TailwindCSS",
        "TypeScript",
        "Supabase",
        "Stripe",
        "Clerck",
        "Shadcn-UI",
      ],
      link: "https://github.com/drondiodev/",
    },
  },
  {
    id: 1,
    featured_image: Image6,
    images: [Image6, Image6],
    title: "My Github Repo Scraper",
    alt: "Image du Projet Github Scraper",
    body: {
      date: "2023",
      text: "Projet de création d'un site pour scrapper des repos Github.",
      technologies: [
        "Next.JS 13",
        "TailwindCSS",
        "TypeScript",
        "Supabase",
        "Stripe",
        "Clerck",
        "Shadcn-UI",
      ],
      link: "https://github.com/drondiodev/GithubScraper",
    },
  },
  {
    id: 2,
    featured_image: Image2,
    images: [Image2, Image2],
    title: "Full Stack Next.JS 13 | Squeeze Events",
    alt: "Image du Projet Squeeze Events",
    body: {
      date: "2023",
      text: "Projet en binôme, de création d'une plateforme de génération d'E-billets pour événements tech - En cours de construction.",
      technologies: [
        "Next.JS 13",
        "TailwindCSS",
        "TypeScript",
        "Supabase",
        "Stripe",
        "Clerck",
        "Shadcn-UI",
      ],
      repo: "https://github.com/drondiodev/event-app",
    },
  },
  {
    id: 3,
    featured_image: Image3,
    images: [Image3, Image3],
    title: "Exemple de portfolio fait avec Astro",
    alt: "Image de mon ancien portfolio fait avec Astro",
    body: {
      date: "2023",
      text: "Première itération de mon portfolio, réalisé avec Astro.",
      technologies: [
        "Next.JS 13",
        "TailwindCSS",
        "TypeScript",
        "Supabase",
        "Stripe",
        "Clerck",
        "Shadcn-UI",
      ],
      link: "https://github.com/drondiodev/portfolio",
    },
  },
  {
    id: 4,
    featured_image: Image4,
    images: [Image4, Image4],
    title: "Mon CV en HTML & SCSS",
    alt: "Image de précédent CV en HTML & SCSS",
    body: {
      date: "2023",
      text: "Mon premier vrai projet en HTML et SCSS.",
      technologies: [
        "Next.JS 13",
        "TailwindCSS",
        "TypeScript",
        "Supabase",
        "Stripe",
        "Clerck",
        "Shadcn-UI",
      ],
      link: "https://github.com/drondiodev/drondiodev.github.io",
    },
  },
  {
    id: 5,
    featured_image: Image5,
    images: [Image5, Image5],
    title: "Qr-code-component",
    alt: "Image du projet Qr-code-component",
    body: {
      date: "2023",
      text: "Challenge Frontend Mentor - Projet QR Code component en HTML et CSS.",
      technologies: [
        "Next.JS 13",
        "TailwindCSS",
        "TypeScript",
        "Supabase",
        "Stripe",
        "Clerck",
        "Shadcn-UI",
      ],
      link: "https://github.com/drondiodev/QR-code-component",
    },
  },
];
