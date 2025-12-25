export interface Experience{
    id: string;
    title: string;
    company: string
    link: string;
    timeline: string;
    imgsrc: string;
}

export interface Project{
    id: string;
    title: string;
    category: string[];
    description: string;
    imgsrc: string;
}

export interface Skills{
    name: string;
    icon: string;
}