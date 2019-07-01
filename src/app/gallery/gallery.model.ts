export interface GalleryModel {
    id?: string;
    name: string;
    description: string;
    thumbnail: string;
    tags: string [];
    photos?: ImageModel [];
}

export interface ImageModel {
    alt: string;
    downloadUrl: string;
}
