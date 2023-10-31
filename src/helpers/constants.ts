export const BASE_URL =
    process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8080';

export const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,63})+$/;

export type ProjectLinkType = {
    href: string;
    text: string;
};

export type ProjectBackgroundType = {
    src: string;
    position: string;
};

export type ProjectType = {
    id: number;
    background: ProjectBackgroundType;
    title: string;
    startYear: string;
    endYear: string;
    description: string;
    technology: string[];
    links: ProjectLinkType[];
    complete: boolean;
    active: boolean;
};
