import projetCV from "../../assets/projetCV.png";
import projetASTRO from "../../assets/projetASTRO.png";
import projetQRCODE from "../../assets/projetQRCODE.png";
import coming from "../../assets/coming.png";






export const projectsData = [
  {
    id: 1,
    image: coming,
    title: "<Projet tutoré/> Next Level, Full Stack Next.JS 13 APP",
    category: "site web",
    subtitle: 'Stack utilisée :',
    repo: "",
    technos: [
            {
                stack: '#Next.JS'
            },
            {
                stack: '#TypeScript'
            },
            {
                stack: '#Tailwind CSS'
            },
            {
                stack: '#Prisma'
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