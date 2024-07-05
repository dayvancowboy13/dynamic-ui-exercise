// import DropdownMenu from './DropdownMenu.js';

/*
 * const btn1 = new DropdownMenu('btn1',
 *     'menu1');
 */

/*
 * const btn2 = new DropdownMenu('btn2',
 *     'main-menu');
 */

import ImageCarousel from './ImageCarousel.js';
import './style.css';

function importAll(r) {

    return r.keys().map(r);

}

const images = importAll(require.context(
    './images/',
    false,
    /\.(png|jpe?g|svg)$/
));
const ic1 = new ImageCarousel(
    'frame',
    'image-container',
    images,
    'slider-container'
);