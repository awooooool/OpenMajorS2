import registration from "./registration.jpg";
import info from "./ingfo.jpg";
import paperfive from './paperfive.jpg';
import ganba from './ganba.jpg'

interface ItemsObject {
    title: string;
    subtitle: string;
    image: string;
    link: string;
}

interface Items extends Array<ItemsObject> {}

const items: Items = [
    {
        title: "Registrasi",
        subtitle: "Form pendaftaran",
        image: registration,
        link: "https://forms.gle/dd4Qyr67tbfZ9CcdA", // Registration form
    },
    {
        title: "Handbook",
        subtitle: "Rules dan kawan kawan",
        image: info,
        link: "https://docs.google.com/document/d/1Xe9Z-_gqfga1lreRT8DjmF5GamBBzhiS54uBUjPP9Lo/edit?usp=sharing", // Rulebook link
    },
    
];

const ads: Items = [
    {
        title: "Ganba Coffee",
        subtitle: "Indonesian Coffee ☕ Healthy Drink",
        image: ganba,
        link: "https://linktr.ee/ganbacoffee", // Registration form
    },  

    {
        title: "Paperfive Store",
        subtitle: "Paperfive Store",
        image: paperfive,
        link: "https://linktr.ee/storepaperfive", // Rulebook link
    },
];

export { items, ads };
