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
        image: "https://placehold.co/300x100",
        link: "https://forms.gle/dd4Qyr67tbfZ9CcdA", //your personal website or portfolio  link
    },
    {
        title: "Handbook",
        subtitle: "Rules dan kawan kawan",
        image: "https://placehold.co/300x100",
        link: "https://docs.google.com/document/d/1Xe9Z-_gqfga1lreRT8DjmF5GamBBzhiS54uBUjPP9Lo/edit?usp=sharing", //Github Profile link
    },
];

const ads: Items = [
    {
        title: "Slot 1",
        subtitle: "Lorem ipsum dolor sit amet",
        image: "https://placehold.co/300x100",
        link: "https://happytrigger.net",
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
