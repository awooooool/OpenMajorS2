import paperfive from "./paperfive.jpg";
import registration from "./registration.jpg";
import info from "./ingfo.jpg";

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
        title: "Paperfive Store",
        subtitle: "Lorem ipsum dolor sit amet",
        image: paperfive,
        link: "https://www.instagram.com/storepaperfive/",
    },
    {
        title: "Slot 2",
        subtitle: "Lorem ipsum dolor sit amet",
        image: "https://placehold.co/300x100",
        link: "https://happytrigger.net",
    },
    {
        title: "Slot 3",
        subtitle: "Lorem ipsum dolor sit amet",
        image: "https://placehold.co/300x100",
        link: "https://happytrigger.net",
    },
];

export { items, ads };
