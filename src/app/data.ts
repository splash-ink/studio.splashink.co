import { PartnerModel } from './onboard/partner/partner.model';
import { GalleryModel, ImageModel } from '@studio/gallery';
import { PriceModel } from '@pricing/price.model';
import { AccordionModel } from '@pricing/accordion/accordion.model';

export const PICTURES: ImageModel [] = [
    {
        alt: 'cat drinking water',
        downloadUrl: 'https://images.unsplash.com/photo-1558860360-02e231e9d947?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    }
];

export const PRICINGS: PriceModel [] = [
    {
        highlighted: false,
        name: 'Clássico',
        price: 50,
        coin: null,
        benefits: [
            '30% off discount astrwo',
            'Lorem ipsun shetug kunai dolet imir'
        ],
        coupon: null
    },
    {
        highlighted: false,
        name: 'Profissional',
        price: 50,
        coin: null,
        benefits: [
            '30% off discount astrwo',
            'Lorem ipsun shetug kunai dolet imir'
        ],
        coupon: null
    },
    {
        highlighted: true,
        name: 'Premium',
        price: 50,
        coin: null,
        benefits: [
            '30% off discount astrwo',
            'Lorem ipsun shetug kunai dolet imir'
        ],
        coupon: null
    },
    {
        highlighted: false,
        name: 'Golden Boy ⭐',
        price: 50,
        coin: null,
        benefits: [
            '30% off discount astrwo',
            'Lorem ipsun shetug kunai dolet imir'
        ],
        coupon: null
    }
];

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
        id: 'some1',
        name: 'Get to know the world',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        thumbnail: 'https://www.themezaa.com/html/pofo/images/blog-page-03-img5.jpg',
        tags: ['marca', 'design'],
        photos: [
            {
                alt: 'coyote de @alexandrina',
                downloadUrl: 'https://firebasestorage.googleapis.com/v0/b/dispar…=media&token=de493ffd-99d9-4383-ab15-298aaecf7bd7'
            }
        ]
    },
    {
        id: 'some2',
        name: 'The most beautiful sky',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        thumbnail: 'https://www.themezaa.com/html/pofo/images/blog-page-03-img6.jpg',
        tags: ['ilustracao'],
        photos: [
            {
                alt: 'coyote de @alexandrina',
                downloadUrl: 'https://firebasestorage.googleapis.com/v0/b/dispar…=media&token=de493ffd-99d9-4383-ab15-298aaecf7bd7'
            }
        ]
    },
    {
        id: 'some3',
        name: 'I can\'t change the rule',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        thumbnail: 'https://www.themezaa.com/html/pofo/images/blog-page-03-img7.jpg',
        tags: ['design', 'produto'],
        photos: [
            {
                alt: 'coyote de @alexandrina',
                downloadUrl: 'https://firebasestorage.googleapis.com/v0/b/dispar…=media&token=de493ffd-99d9-4383-ab15-298aaecf7bd7'
            }
        ]
    },
    {
        id: 'some4',
        name: 'Happiness is something',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        thumbnail: 'https://www.themezaa.com/html/pofo/images/blog-page-03-img8.jpg',
        tags: ['fotografia'],
        photos: [
            {
                alt: 'coyote de @alexandrina',
                downloadUrl: 'https://firebasestorage.googleapis.com/v0/b/dispar…=media&token=de493ffd-99d9-4383-ab15-298aaecf7bd7'
            }
        ]
    }
];

export const QnA: AccordionModel [] = [
    {
        key: 1,
        question: 'Sou permitido modificar o artigo que adqueri?',
        asks: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        state: true
    },
    {
        key: 2,
        question: 'Sou permitido modificar o artigo que adqueri?',
        asks: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        state: false
    },
    {
        key: 3,
        question: 'Sou permitido modificar o artigo que adqueri?',
        asks: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        state: false
    },
    {
        key: 4,
        question: 'Sou permitido modificar o artigo que adqueri?',
        asks: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        state: false
    }
];
