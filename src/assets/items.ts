import website from "../assets/website.png";
import instagram from "../assets/instagram.png";
import appstore from "../assets/playstore.png";
import youtube from "../assets/youtube.jpeg";
import dribbble from "../assets/dribbble.png";
import github from "../assets/github.png";
import telegram from "../assets/telegram.png";
import twitter from "../assets/twitter.png";

interface ItemsObject {
    title: string;
    subtitle: string;
    image: string;
    link: string;
}

interface Items extends Array<ItemsObject> {}

const items: Items = [
    {
        title: "Website",
        subtitle: "Look at my work!",
        image: website,
        link: "https://sagniksahoo.me", //your personal website or portfolio  link
    },
    {
        title: "GitHub",
        subtitle: "@devgossips | 🏠 of my open-source projects",
        image: github,
        link: "https://github.com/devgossips", //Github Profile link
    },
    {
        title: "Instagram",
        subtitle: "@heysagnik | Hub of my awesome 😎 pics",
        image: instagram,
        link: "https://instagram.com/heysagnik", //instagram profile link
    },
    {
        title: "Twitter",
        subtitle: "@heysagnik | Don't forget to follow me 😉",
        image: twitter,
        link: "https://twitter.com/heysagnik", // twitter profile link
    },
    {
        title: "Apps",
        subtitle: "Hub of my awesome 🔥 Apps",
        image: appstore,
        link: "#", //
    },
    {
        title: "YouTube",
        subtitle: "@Sagnik Sahoo | Official channel of mine",
        image: youtube,
        link: "https://www.youtube.com/channel/UCOUa9hvd4sJWQWQRIQctbSg", //youtube channel link
    },

    {
        title: "Dribbble",
        subtitle: "@virtuonic | Hub to the Shots of my 😎 apps ",
        image: dribbble,
        link: "https://dribbble.com/virtuonic", // Dribbble profile link
    },
    {
        title: "Telegram",
        subtitle: "@virtuonic | Chat with me instantly, Don't hesitate! ",
        image: telegram,
        link: "https://telegram.me/heysagnik", //Telegram Pofile
    },
];

export default items;
