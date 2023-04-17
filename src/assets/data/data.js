 
// import image footer social icon
import imgFacebook from '../img/footer-facebook.png';
import imgTwitter from '../img/footer-twitter.png';
import imgYouTube from '../img/footer-youtube.png';
import imgPint from '../img/footer-pinterest.png';
import imgPosition from '../img/footer-periscope.png';

// import image main product
import imgDigitalComic from '../img/buy-comics-digital-comics.png';
import imgDcMerchandise from '../img/buy-comics-merchandise.png';
import imgSubscription from '../img/buy-comics-subscriptions.png';
import imgComicLocator from '../img/buy-comics-shop-locator.png';
import imgPowerVisa from '../img/buy-dc-power-visa.svg';


const navLink = [
    'Characters',
    'Comics',
    'Movies',
    'Tv',
    'Games',
    'Collectibles',
    'Videos',
    'Fans',
    'News',
    'Shop',
]
const footerLink = [
    {
        title: 'Dc comics',
        link: ['Characters', 'Comics','Movies','TV','Games','Videos','News',]
    },
    {
        title: 'Dc',
        link: ['Terms Of Use', 'Privacy policy(New)','Ad choices','advertising','Jobs','Subscriptions','talent worskshops','CPSC Certificates', 'ratings', 'shop help', 'contact us']
    },
    {
        title: 'Sites',
        link: ['DC', 'MAD Magazine','DC Kids','DC Universe','DC Power Visa',]
    },
    {
        title: 'Shop',
        link: ['Shop DC', 'Shop DC Collectibles',]
    },
];
const footerSocial = [
    {
        title: 'Follow Us',
    },
    {
        imgSocial: imgFacebook,
    },
    {
        imgSocial: imgTwitter,
    },
    {
        imgSocial: imgYouTube,
    },
    {
        imgSocial: imgPint,
    },
    {
        imgSocial: imgPosition,
    },
];
const listProduct = [
    {
        product: 'Digital comics',
        img: imgDigitalComic,
    },
    {
        product: 'dc merchandise',
        img: imgDcMerchandise,
    },
    {
        product: 'subscription',
        img: imgSubscription,
    },
    {
        product: 'comic shop locator',
        img: imgComicLocator,
    },
    {
        product: 'dc power visa',
        img: imgPowerVisa, 
    },
];


export { navLink, footerLink, footerSocial, listProduct};