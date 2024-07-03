export default class DropdownMenu {

    constructor(buttonID, dropdownID) {

        this.buttonID = buttonID;
        this.dropdownID = dropdownID;
        this.btn = document.getElementById(this.buttonID);
        this.menu = document.getElementById(this.dropdownID);

        let bCoords = this.btn.getBoundingClientRect();
        this.menu.style.transform = `translateX(${bCoords.x - 5}px)`;
        console.log(bCoords.x);

        this.linkButton();

        /*
         * make dropdown appear below the button
         * find bottom left of the source button
         */


    }

    printPosition() {

        const b1 = document.getElementById(this.buttonID);

        console.log(JSON.stringify(b1.getBoundingClientRect().toJSON()));

    }

    linkButton() {

        console.log('linking button');
        const btn = document.getElementById(this.buttonID);
        const menu = document.getElementById(this.dropdownID);
        // menu.style.display = 'none';

        menu.style.visibility = 'hidden';

        // menu.style.transform = 'translateX(500px)';

        btn.onclick = () => {

            // this.hideElement(menu);

            this.changeVisibility(menu);

        };
        console.log(menu.textContent);

    }

    hideElement(ddID) {

        if (ddID.style.display !== 'none') {

            console.log('hide');

            ddID.style.display = 'none';

        } else {

            console.log('show');

            ddID.style.display = 'block';

        }

    }

    changeVisibility(ddID) {

        if (ddID.style.visibility !== 'hidden') {

            console.log('hide');

            ddID.style.visibility = 'hidden';

        } else {

            console.log('show');

            ddID.style.visibility = 'visible';

        }

    }

    static {

        console.log(this.buttonID);
        console.log('fuck shit');

    }

    static initialize() {

        console.log('starting NavHandler');
        const button = document.querySelector('.drop-down-btn');

        button.onclick = () => {

            const div = document.querySelector('#menu');
            div.attributes.st = '';

        };


        const btns = document.querySelectorAll('#main-menu');

        console.log(btns);
        const btn2 = document.getElementById('btn2');
        const btn2Div = document.getElementById('main-menu');
        btn2.onclick = () => {

            if (btn2Div.style.visibility !== 'hidden') {

                console.log('hide');

                btn2Div.style.visibility = 'hidden';

            } else {

                console.log('show');

                btn2Div.style.visibility = 'visible';

            }

        };

        /*
         * HOW TO HIDE/SHOW DIV CONTENT:
         * style.visibility option
         * class with separate visibility
         */

    }

}