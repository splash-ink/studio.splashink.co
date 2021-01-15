import { PartnerModel } from './onboard/partner/partner.model';
import { GalleryModel, ImageModel } from '@studio/gallery';
import { AccordionModel, PriceModel } from '@studio/pricing';

export const PICTURES: ImageModel [] = [
    {
        alt: 'cat drinking water',
        downloadUrl: 'https://images.unsplash.com/photo-1558860360-02e231e9d947?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    }
];

export const PRICINGS: PriceModel [] = [
    {
        highlighted: false,
        name: 'Individual',
        price: 2500,
        coin: null,
        benefits: [
            '30% off discount astrwo',
            'Lorem ipsun shetug kunai dolet imir'
        ],
        coupon: null
    },
    {
        highlighted: false,
        name: 'Casal',
        price: 3000,
        coin: null,
        benefits: [
            '30% off discount astrwo',
            'Lorem ipsun shetug kunai dolet imir'
        ],
        coupon: null
    },
    {
        highlighted: true,
        name: 'Grupo',
        price: 3500,
        coin: null,
        benefits: [
            '30% off discount astrwo',
            'Lorem ipsun shetug kunai dolet imir'
        ],
        coupon: null
    },
    {
        highlighted: false,
        name: 'Estrela',
        price: 5000,
        coin: null,
        benefits: [
            'Captura até 3000 pixels (HD)',
            'Fotografia em fundo colorido',
            'Remoção de Imperfeições',
            'Correção de Cores',
            'Estilização de Fotografia'
        ],
        coupon: null
    }
];

export const BACKERS: PartnerModel [] = [
    {
        alt: 'FF Selection',
        logo_url: 'assets/images/our-partners/ff-logo.png',
        thumbnail_url: 'assets/images/our-partners/1.png',
        description: 'Envato Ipsum is simply dummy text of the printing and typesetting industry.\
         Lorem Ipsum has been the industry\'s standard dummy text ever since.'
    },
    {
        alt: 'Organizacões Chana',
        logo_url: 'assets/images/our-partners/chana-logo.png',
        thumbnail_url: 'assets/images/our-partners/2.png',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
         Lorem Ipsum has been the industry\'s standard dummy text ever since.'
    },
    {
        alt: 'Docegulla',
        logo_url: 'assets/images/our-partners/docegulla-logo.png',
        thumbnail_url: 'assets/images/our-partners/3.png',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
         Lorem Ipsum has been the industry\'s standard dummy text ever since.'
    },
    {
        alt: 'Volvo - Auto Sueco',
        logo_url: 'assets/images/our-partners/volvo-logo.png',
        thumbnail_url: 'assets/images/our-partners/4.png',
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
