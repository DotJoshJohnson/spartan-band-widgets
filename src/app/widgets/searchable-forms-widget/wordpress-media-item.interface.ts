export interface WordpressMediaItem {
    id: number;
    date: Date;
    guid: { rendered: string };
    modified: Date;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: { rendered: string };
    author: number;
    description: { rendered: string };
    caption: { rendered: string };
    media_type: string;
    mime_type: string;
    post?: number;
    source_url: string;
}
