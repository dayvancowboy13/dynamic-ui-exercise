export default class ImageCarousel {

    constructor(
        frameID, containerID, images
    ) {

        this.frame = document.getElementById(frameID);
        this.currentImage = 1;
        this.imagesInCarousel = images.length;
        this.imgContainer = document.getElementById(containerID);
        images.forEach((element) => {

            this.imgContainer.append(this.createImageElement(element));

        });
        this.imgContainer.firstElementChild.classList = '';

        this.addButtonListeners();


        // imgContainer.append(this.createImageElement());


    }

    createImageElement(imgSrc) {

        // console.log(imgSrc);

        let imgElem = new Image();
        imgElem.src = imgSrc;
        imgElem.classList = 'hidden';
        // console.log(imgElem);

        return imgElem;

    }

    addButtonListeners() {

        const prevBtn = document.querySelector('#previous');
        const nextBtn = document.querySelector('#next');

        prevBtn.addEventListener('click',
            () => this.previousImage());
        nextBtn.addEventListener('click',
            () => this.nextImage());

    }

    previousImage() {

        console.log('prev');
        // console.log(`Current image is index ${this.currentImage}`);
        this.hideAllImages();

        if (this.isFirstImage()) {

            console.log(`First image, index is ${this.currentImage}`);
            console.log(`Images in carousel is ${this.imagesInCarousel}`);
            this.currentImage = this.imagesInCarousel;
            this.imgContainer.children.item(this.currentImage - 1).classList = '';


        } else {

            console.log(`Not first image, index is ${this.currentImage}`);
            this.currentImage--;
            this.imgContainer.children.item(this.currentImage - 1).classList = '';

        }

    }

    nextImage() {

        console.log('next');
        this.hideAllImages();

        if (this.isLastImage()) {

            this.imgContainer.children.item(0).classList = '';
            this.currentImage = 1;

        } else {

            this.imgContainer.children.item(this.currentImage).classList = '';
            this.currentImage++;

        }
        console.log(this.currentImage);

    }

    isLastImage() {

        if (this.currentImage === this.imagesInCarousel) {

            return true;

        } else return false;

    }

    isFirstImage() {

        if (this.currentImage === 1) {

            return true;

        } else return false;

    }

    populateContainer() {

    }

    hideAllImages() {

        for (const child of this.imgContainer.children) {

            child.classList = 'hidden';

        }

    }

}