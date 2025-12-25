export interface Blog{
    slug: string;
    content: string;
    title: string;
    date: string;
    author: string;
    description?: string;
    excerpt?: string;
    headings?: Heading[];
    [key: string]: any;
}
 
export interface Heading{
    level: number;
    text: string;
    id: string;
}

export interface MarkdownResult {
    html: string;
    headings: Heading[];
}

export interface NavigationPost {
    slug: string;
    title: string;
}