import './normalize.css'
import './reset.css'
import './style.scss'
import {WiredCard} from 'wired-elements'
import { menu1, menu2, menu3 } from './data'



window.addEventListener('load', () => {

//карта открытие\закрытие
    const openOrderBtn = document.getElementById('order-open');
    const closeOrderBtn = document.querySelector('.order-map__close')
    const orderMap = document.querySelector('.order-map');

//контакты открытие\закрытие
    const openContactsBtn = document.getElementById('contacts-open');
    const closeContactsBtn = document.querySelector('.contacts-list__close');
    const contactsList = document.querySelector('.contacts-list');

//меню  открытие\закрытие
    const openMenuBtn = document.getElementById('menu-open');
    const closeMenuBtn = document.querySelector('.menu-list__close');
    const menuList = document.querySelector('.menu-list');


    //костыли на пересчет вьюпорта
    const app = document.getElementById('app');
    const body = document.getElementById('body');
    const html = document.getElementById('html');
    const intViewportHeight = window.innerHeight
    const intViewportWidth = window.innerWidth

    app.style.height = `${intViewportHeight}px`;
    app.style.minWidth = `${intViewportWidth}px`;
    body.style.height = `${intViewportHeight}px`;
    body.style.minWidth = `${intViewportWidth}px`;
    html.style.height = `${intViewportHeight}px`;
    html.style.minWidth = `${intViewportWidth}px`;
    //====//

    const storage = window.localStorage


    const elems = [orderMap, contactsList, menuList];
    const hideElement = (el) => el.style.visibility  = 'hidden';

    const showElement = (showElement) => {
        elems.map(el => {
            if (el === showElement) el.style.visibility  = 'visible';
            else el.style.visibility  = 'hidden';
        })
    }


    //карта показ\скрытие
    openOrderBtn.addEventListener('click', () => showElement(orderMap));
    closeOrderBtn.addEventListener('click', () => hideElement(orderMap));


    //контакты показ\скрытие
    openContactsBtn.addEventListener('click', () => showElement(contactsList));
    closeContactsBtn.addEventListener('click', () => hideElement(contactsList));




    //меню открытие модалки и рендер списка
    openMenuBtn.addEventListener('click', () => {
        showElement(menuList)
        menuRender()
    })
    closeMenuBtn.addEventListener('click', () => hideElement(menuList));


    //рендер меню из конструктора
    function menuRender() {

        const menuHolder = document.querySelector('.menu-list__content');
        const menuArr = [];

        //вывод лейблов
        const menuCategoryTemplate = (title, menuItem) => {
            return (
                `<div class="menu-list__content-group">
                    <div class="menu-list__content-group--title">${title}</div>
                    <div class="menu-list__content-group__section">${menuItem}</div>
                </div>`
            )
        }

        //вывод одиночной строки
        const item = (label, price,) => {
            return `
                   <div class="menu-list__content-group__section-item">
                        <span class="menu-list__content-group__section-item--label"> ${label}</span>
                         <span class="menu-list__content-group__section-item--price"> ${price}</span>
                   </div>`
        }

        const additionalItem = (price, title) => {
            return `
                    <div class="menu-list__content-group__section-item--additional-item flex-between ">
                            <span>${title} </span>  <span>${price}</span>
                    </div>`
        }

        //вывод одиночной строки с описанием и меню-добавками
        const itemFromDescr = (label, price, description, additional) => {
            return `
                   <div class="menu-list__content-group__section-item flex-column">
                            <div class="flex-between">
                                <span class="menu-list__content-group__section-item--label"> ${label}</span>
                                 <span class="menu-list__content-group__section-item--price"> ${price}</span>
                             </div>
                         <div class="menu-list__content-group__section-item--description">${description}</div>
                         <div class="menu-list__content-group__section-item--additional ">${additional}</div>
                   </div>`
        }

        //рендер части с комбо
        menu1.map(menuItem => {
            const {options} = menuItem;

            const additional = options
                .map(({title, price,description, additional })=> {

                    const obj = additional?.map(({title, price}) => {
                       return  additionalItem(price, title)
                    });

                    return itemFromDescr(title, price, description, obj?.join(" ") )
                })

            menuArr.push(menuCategoryTemplate(menuItem.title, additional.join(" ")))

            return null;
        });


        //рендер меню с sides
        menu2.map(menuItem => {
            const {options} = menuItem;

            const additional = options.map(option => item(option.title, option.price))
            menuArr.push(menuCategoryTemplate(menuItem.title, additional.join(" ")))

            return null;
        });


        //рендер меню с drinks
        menu3.map(menuItem => {
            const {options} = menuItem;

            const additional = options.map(option => item(option.title, option.price))
            menuArr.push(menuCategoryTemplate(menuItem.title, additional.join(" ")))

            return null;
        });


        menuHolder.innerHTML = menuArr.join(" ")
    }

// модалка по языку
    // deprecated!!!!!!
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





