import { GalleryModel, ImageModel } from './gallery/gallery.model';

export const TAGS: string [] = ['web', 'advertising', 'branding', 'design', 'photography'];

export const GALLERIES: GalleryModel [] = [
    {
        name: 'Get to know the world',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        thumbnail: 'https://www.themezaa.com/html/pofo/images/blog-page-03-img5.jpg',
        tags: ['marca', 'design']
    },
    {
        name: 'The most beautiful sky',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        thumbnail: 'https://www.themezaa.com/html/pofo/images/blog-page-03-img6.jpg',
        tags: ['ilustracao']
    },
    {
        name: 'I can\'t change the rule',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        thumbnail: 'https://www.themezaa.com/html/pofo/images/blog-page-03-img7.jpg',
        tags: ['design', 'produto']
    },
    {
        name: 'Happiness is something',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        thumbnail: 'https://www.themezaa.com/html/pofo/images/blog-page-03-img8.jpg',
        tags: ['fotografia']
    }
];
