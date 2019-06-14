import { GalleryModel, ImageModel } from '@gallery/gallery.model';
import { PartnerModel } from './onboard/partner-widget/partner.model';

export const BACKERS: PartnerModel [] = [
    {
        alt: 'Envato',
        logo_url: 'https://www.themezaa.com/html/pofo/images/logo-18.png',
        thumbnail_url: 'https://www.themezaa.com/html/pofo/images/clients-img1.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
         Lorem Ipsum has been the industry\'s standard dummy text ever since.'
    },
    {
        alt: 'Magento',
        logo_url: 'https://www.themezaa.com/html/pofo/images/logo-19.png',
        thumbnail_url: 'https://www.themezaa.com/html/pofo/images/clients-img2.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
         Lorem Ipsum has been the industry\'s standard dummy text ever since.'
    },
    {
        alt: 'Google',
        logo_url: 'https://www.themezaa.com/html/pofo/images/logo-20.png',
        thumbnail_url: 'https://www.themezaa.com/html/pofo/images/clients-img3.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
         Lorem Ipsum has been the industry\'s standard dummy text ever since.'
    },
    {
        alt: 'Spotify',
        logo_url: 'https://www.themezaa.com/html/pofo/images/logo-21.png',
        thumbnail_url: 'https://www.themezaa.com/html/pofo/images/clients-img4.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
         Lorem Ipsum has been the industry\'s standard dummy text ever since.'
    }
];

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
