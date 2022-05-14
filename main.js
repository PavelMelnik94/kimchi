import './normalize.css'
import './reset.css'
import './style.scss'
import {WiredCard} from 'wired-elements'
import { menu1, menu2, menu3 } from './data'



window.addEventListener('load', () => {


    // const app = document.getElementById('app');
    // const body = document.getElementById('body');
    // const html = document.getElementById('html');
    // const intViewportHeight = window.innerHeight
    // const intViewportWidth = window.innerWidth

    // console.log(intViewportWidth, 'intViewportWidth')
    // app.style.height = `${intViewportHeight}px`;
    // app.style.minWidth = `${intViewportWidth}px`;
    // body.style.height = `${intViewportHeight}px`;
    // body.style.minWidth = `${intViewportWidth}px`;
    // html.style.height = `${intViewportHeight}px`;
    // html.style.minWidth = `${intViewportWidth}px`;


    const storage = window.localStorage

//карта открытие\закрытие
    const openOrderBtn = document.getElementById('order-open');
    const closeOrderBtn = document.querySelector('.order-map__close')
    const orderMap = document.querySelector('.order-map');

    openOrderBtn.addEventListener('click', () => {
        menuList.style.visibility  = 'hidden';
        contactsList.style.visibility  = 'hidden';

        orderMap.style.visibility  = 'visible';

    });

    closeOrderBtn.addEventListener('click', () => {
        orderMap.style.visibility  = 'hidden';
    });

//========//

//контакты открытие\закрытие
    const openContactsBtn = document.getElementById('contacts-open');
    const closeContactsBtn = document.querySelector('.contacts-list__close');
    const contactsList = document.querySelector('.contacts-list');

    openContactsBtn.addEventListener('click', () => {
        menuList.style.visibility  = 'hidden';
        orderMap.style.visibility  = 'hidden';

        contactsList.style.visibility  = 'visible';

    });

    closeContactsBtn.addEventListener('click', () => {
        contactsList.style.visibility  = 'hidden';
    });

//==========//


//меню  открытие\закрытие
    const openMenuBtn = document.getElementById('menu-open');
    const closeMenuBtn = document.querySelector('.menu-list__close');
    const menuList = document.querySelector('.menu-list');

    openMenuBtn.addEventListener('click', () => {
        contactsList.style.visibility  = 'hidden';
        orderMap.style.visibility  = 'hidden';

        menuList.style.visibility  = 'visible';
        // menuList.setAttribute('open', true);


        //содержимое меню
        const menuHolder = document.querySelector('.menu-list__content');

        // menu1.map(el => console.log(el))

        const menuCategoryTemplate = (title, menuItem) => {
            return (
                `<div class="menu-list__content-group">
                <div class="menu-list__content-group--title">${title}</div>
                <div class="menu-list__content-group__section">
                    ${menuItem}
                </div>
            </div>`
            )
        }

        const item = (label, price,) => {
            return `
        <div class="menu-list__content-group__section-item">
<span class="menu-list__content-group__section-item--label"> ${label}</span>
 <span class="menu-list__content-group__section-item--price"> ${price}</span>
        </div>`
        }



        const menuArr = [];


        const itemFromDescr = (label, price, description, additional) => {
            return `
        <div class="menu-list__content-group__section-item flex-column">
<div class="flex-between"><span class="menu-list__content-group__section-item--label"> ${label}</span>
 <span class="menu-list__content-group__section-item--price"> ${price}</span></div>
 <div class="menu-list__content-group__section-item--description">${description}</div>
 <div class="menu-list__content-group__section-item--additional ">
 ${additional}

</div>
        </div>`
        }

        menu2.map(menuItem => {
            const {options} = menuItem;

            const additional = options
                .map(({title, price,description, additional })=> {

                    const obj = additional?.map(({title, price}) => {
                        // console.log(addOpt)
                        return `<div class="menu-list__content-group__section-item--additional-item flex-between ">
<span>${title} </span>  <span>${price}</span>
</div>`
                    });

                    return itemFromDescr(title, price, description, obj?.join(" ") )
                })
            // console.log(additional)
            menuArr.push(menuCategoryTemplate(menuItem.title, additional.join(" ")))


            return null;
        });



        menu1.map(menuItem => {
            const {options} = menuItem;

            const additional = options.map(option => item(option.title, option.price))
            menuArr.push(menuCategoryTemplate(menuItem.title, additional.join(" ")))


            return null;
        });


        menu3.map(menuItem => {
            const {options} = menuItem;

            const additional = options.map(option => item(option.title, option.price))
            menuArr.push(menuCategoryTemplate(menuItem.title, additional.join(" ")))


            return null;
        });




        // const renderAdditional = (additionalOpt) => {
        //     const arr = additionalOpt.map(el => el);
        //     return `
        //
        //     `
        // }


        // console.log(el.additional)


        // console.log(menuArr)

        const arrModify = menuArr.join(" ")
        menuHolder.innerHTML = arrModify

//=========//

    })

    closeMenuBtn.addEventListener('click', () => {
        menuList.style.visibility  = 'hidden';
    })
//=================//


// модалка по языку
    const landModal = document.querySelector('.lang-modal');
    const landRusBtn = document.querySelector('.lang-rus');
    const landAMBtn = document.querySelector('.lang-am');

    const setLanguage = (value) => { storage.setItem('lang', `${value}`) }
    window.addEventListener('load', () => {
        const isLang = storage.getItem('lang')
        if (!isLang) landModal.setAttribute('open', true)
    })

    landRusBtn.addEventListener('click', () => {
        setLanguage('rus')
        landModal.removeAttribute('open')
    })

    landAMBtn.addEventListener('click', () => {
        setLanguage('am')
        landModal.removeAttribute('open')
    })

//===================//
})





