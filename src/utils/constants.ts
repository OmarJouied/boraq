import NavbarLinkProps from "@/types/NavbarLinkProps";

export const navLinks: NavbarLinkProps[] = [
    {
        text: 'home',
        link: '/',
        iconLink: '/images/home.svg'
    },
    {
        text: 'channels',
        link: '/channels',
        iconLink: '/images/channels.svg'
    },
    {
        text: 'urgent',
        link: '/urgent',
        iconLink: '/images/urgent.svg'
    },
    {
        text: 'liked',
        link: '/liked',
        iconLink: '/images/liked.svg'
    },
    {
        text: 'saved',
        link: '/saved',
        iconLink: '/images/saved.svg'
    },
];

export const mobileSize = 896;

export const postTypes = [
    "all",
    "posts",
    "videos",
    "images",
];
