export default class DropdownMenu {

    constructor(buttonID, dropdownID) {

        this.buttonID = buttonID;
        this.dropdownID = dropdownID;
        this.btn = document.getElementById(this.buttonID);
        this.menu = document.getElementById(this.dropdownID);
        this.menu.style.position = 'absolute';

        let bCoords = this.btn.getBoundingClientRect();
        this.menu.style.left = bCoords.x + 'px';
        this.menu.style.top = bCoords.y + bCoords.height + 'px';

        this.linkButton();

    }

    printPosition() {

        const b1 = document.getElementById(this.buttonID);

        console.log(JSON.stringify(b1.getBoundingClientRect().toJSON()));

    }

    linkButton() {

        console.log('linking button');
        const btn = document.getElementById(this.buttonID);
        const menu = document.getElementById(this.dropdownID);

        menu.style.visibility = 'hidden';

        // btn.onclick = () => {

        //     this.changeVisibility(menu);

        // };

        btn.addEventListener('click',
            () => this.changeVisibility(menu));

    }

    changeVisibility(dropDown) {

        if (dropDown.style.visibility !== 'hidden') {

            console.log('hide');

            dropDown.style.visibility = 'hidden';

        } else {

            console.log('show');

            dropDown.style.visibility = 'visible';

        }

    }

    static {


    }

}