export default class ImageCarousel {

    constructor(
        frameID, containerID, images, sliderID
    ) {

        this.frame = document.getElementById(frameID);
        this.slider = document.getElementById(sliderID);
        this.currentImage = 1;
        this.imagesInCarousel = images.length;
        this.imgContainer = document.getElementById(containerID);
        this.timeDelay = 5000;

        images.forEach((element) => {

            this.imgContainer.append(this.createImageElement(element));

        });

        this.imgContainer.firstElementChild.classList = '';

        this.addButtonListeners();
        this.setupSlider();
        this.beginTimer(this.timeDelay);

    }

    resizeFrame() {

        console.log('calling resize frame function');

    }

    beginTimer(delay) {

        this.timerID = setTimeout(() => {

            console.log(`end of timer ${this.timerID}`);
            this.nextImage();
            ImageCarousel.timerID = this.beginTimer(this.timeDelay);

        },
            delay);

    }

    setupSlider() {

        for (let i = 1; i <= this.imagesInCarousel; i++) {

            this.slider.append(this.createSliderButton(i));

        }
        // set first button to selected
        if (this.slider.childElementCount !== 0) {

            this.slider.firstElementChild.classList = 'selected';

        }

    }


    createSliderButton(index) {

        const btn = document.createElement('button');
        btn.id = `slider-button ${index}`;
        btn.classList = 'unselected';
        btn.addEventListener('click',
            () => {

                clearTimeout(this.timerID);
                this.sliderButtonClick(btn);
                this.beginTimer(this.timeDelay);

            });

        return btn;

    }

    sliderButtonClick(originButton) {

        this.resetSliderButtons();
        originButton.classList = 'selected';
        this.currentImage = parseInt(originButton.id.at(-1));
        this.hideAllImages();
        this.imgContainer.children.item(this.currentImage - 1).classList = '';

    }

    resetSliderButtons() {

        for (const child of this.slider.children) {

            child.classList = 'unselected';

        }

    }

    setSliderButtonSelected() {

        this.resetSliderButtons();
        this.slider.children.item(this.currentImage - 1).classList = 'selected';

    }

    createImageElement(imgSrc) {

        let imgElem = new Image();
        imgElem.src = imgSrc;
        imgElem.classList = 'hidden';

        return imgElem;

    }

    addButtonListeners() {

        const prevBtn = document.querySelector('#previous');
        const nextBtn = document.querySelector('#next');
        const timerBtn = document.querySelector('#timer-toggle');

        prevBtn.addEventListener('click',
            () => {

                clearTimeout(this.timerID);
                this.previousImage();
                if (this.isAutoplayOn()) this.beginTimer(this.timeDelay);

            });
        nextBtn.addEventListener('click',
            () => {

                clearTimeout(this.timerID);
                this.nextImage();
                if (this.isAutoplayOn()) this.beginTimer(this.timeDelay);


            });
        timerBtn.addEventListener('click',
            () => {

                this.toggleTimer(timerBtn.className);

            });

    }

    isAutoplayOn() {

        if (document.querySelector('#timer-toggle').className === 'timer-on') {

            return true;

        } else return false;

    }

    toggleTimer(toggleStatus) {

        if (toggleStatus === 'timer-on') {

            console.log('turning off timer');
            document.querySelector('#timer-toggle').classList = 'timer-off';
            document.querySelector('#timer-toggle').textContent = 'Autoplay Off';
            clearTimeout(this.timerID);

        } else {

            console.log('turning on timer');
            document.querySelector('#timer-toggle').classList = 'timer-on';
            document.querySelector('#timer-toggle').textContent = 'Autoplay On';
            this.beginTimer(this.timeDelay);

        }

    }

    previousImage() {

        this.hideAllImages();

        if (this.isFirstImage()) {

            this.currentImage = this.imagesInCarousel;
            this.imgContainer.children.item(this.currentImage - 1).classList = '';


        } else {

            this.currentImage--;
            this.imgContainer.children.item(this.currentImage - 1).classList = '';

        }

        this.setSliderButtonSelected();

    }

    nextImage() {

        this.hideAllImages();

        if (this.isLastImage()) {

            this.imgContainer.children.item(0).classList = '';
            this.currentImage = 1;

        } else {

            this.imgContainer.children.item(this.currentImage).classList = '';
            this.currentImage++;

        }
        this.setSliderButtonSelected();

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

    hideAllImages() {

        for (const child of this.imgContainer.children) {

            child.classList = 'hidden';

        }

    }

}