import projetCV from "../../assets/projetCV.png";
import projetASTRO from "../../assets/projetASTRO.png";
import projetQRCODE from "../../assets/projetQRCODE.png";
// import coming from "../../assets/coming.png";






export const projectsData = [
  {
    id: 1,
    image: projetASTRO,
    title: "Exemple de portfolio fait avec Astro",
    category: "site web",
    subtitle: 'Stack utilisée :',
    repo: "https://github.com/drondiodev/portfolio",
    technos: [
            {
                stack: '#Astro',
            },
            {
                stack: '#React'
            },
        ]
  },
  {
    id: 2,
    image: projetCV,
    title: "Mon CV en HTML & SCSS",
    subtitle: 'Stack utilisée :',
    category: "site web",
    repo: "https://github.com/drondiodev/drondiodev.github.io",
    technos: [
            {
                stack: '#Html',
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
    id: 3,
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