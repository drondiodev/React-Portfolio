import projetCV from "../../assets/projetCV.png";
import projetASTRO from "../../assets/projetASTRO.png";
import projetQRCODE from "../../assets/projetQRCODE.png";
import nextjs from "../../assets/nextjs.png";

export const projectsData = [
  {
    id: 1,
    image: nextjs,
    title: "Full Stack Next.JS 13 | E-commerce Platform",
    category: "application web",
    subtitle: 'Stack utilisée :',
    repo: "",
    technos: [
            {
                stack: '#Next.JS 13'
            },
            {
                stack: '#TS'
            },
            {
                stack: '#TailwindCSS'
            },
            {
                stack: '#Clerk'
            },
            {
                stack: '#Stripe'
      },
            {
                stack: '#Shadcn-ui'
            },
        ]
  },
  {
    id: 2,
    image: projetASTRO,
    title: "Exemple de portfolio fait avec Astro",
    category: "site web",
    subtitle: 'Stack utilisée :',
    repo: "https://github.com/drondiodev/portfolio",
    technos: [
            {
                stack: '#Astro'
            },
            {
                stack: '#React'
            },
        ]
  },
  {
    id: 3,
    image: projetCV,
    title: "Mon CV en HTML & SCSS",
    subtitle: 'Stack utilisée :',
    category: "site web",
    repo: "https://github.com/drondiodev/drondiodev.github.io",
    technos: [
            {
                stack: '#Html'
            },
            {
                stack: '#Scss'
            },
            {
                stack: '#Parcel'
            },
        ]
  },
  {
    id: 4,
    image: projetQRCODE,
    title: "Qr-code-component",
    subtitle: 'Stack utilisée :',
    category: "site web",
    repo: "https://github.com/drondiodev/QR-code-component",
    technos: [
            {
                stack: '#Html',
            },
            {
                stack: '#Css'
            },
        ]
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