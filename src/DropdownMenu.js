export default class DropdownMenu {

    static {

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
