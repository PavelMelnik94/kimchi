export const menu2 = [
    {
        title: 'SIDES',
        options: [
            {id: 1, title: 'хумус', price: '500' },
            {id: 2, title: 'кимчи', price: '500' },
            {id: 3, title: 'рис', price: '500' },
            {id: 4, title: 'салат из кинзы', price: '500' },
            {id: 5, title: 'израильский салат', price: '500' },
            {id: 6, title: 'битые огурцы', price: '500' },
            {id: 7, title: 'кимчи редис', price: '500' },
            {id: 8, title: 'маринованное яйцо', price: '500' },
            {id: 9, title: 'соленые огурцы', price: '200' },
            {id: 10, title: 'соленые овощи', price: '200' },
            {id: 11, title: 'лаффа', price: '100' },
        ]
    },
    {
        title: 'SAUCES',
        options: [
            {id: 1, title: 'схуг', price: '200' },
            {id: 2, title: 'тхина', price: '200' },
            {id: 3, title: 'соус с кунжутом и зеленым луком', price: '200' },
        ]
    },
    {
        title: 'DRINKS',
        options: [
            {id: 1, title: 'пиво (ararat, gyumri)', price: '800' },
            {id: 2, title: 'пиво (dargett)', price: '1100' },
            {id: 3, title: 'фруктовая водка', price: '800' },
            {id: 4, title: 'сода', price: '600' },
            {id: 5, title: 'тан', price: '600' },
            {id: 6, title: 'сок', price: '600' },
            {id: 7, title: 'кофе', price: '600' },
            {id: 8, title: 'чай', price: '600' },
            {id: 9, title: 'вода', price: '500' },
        ]
    },
];


export const menu1 = [
    {
        title: 'COMBOS',
        options: [
            {
                id: 1,
                title: 'израильское комбо',
                price: '1200',
                description: 'хумус,  солёные овощи, израильский салат, соусы схуг и тхина, зелень и специи',
                additional: [
                    {id: 1, title: 'баклажан', price: '+500'},
                    {id: 2, title: 'курица', price: '+800'},
                    {id: 3, title: 'говядина (басар бакар)', price: '+1300'},
                ]
            },

            {
                id: 2,
                title: 'корейское комбо',
                price: '1200',
                description: 'рис, кимчи, кимчи редис, битые огурцы, маринованное яйца и соус с кунжутом и зеленым луком',
                additional: [
                    {id: 1, title: 'баклажан', price: '+600'},
                    {id: 2, title: 'курица', price: '+800'},
                    {id: 3, title: 'говядина (бульгоги)', price: '+1300'},
                ]
            },

        ]
    },
]


export const menu3 = [
    {title: 'MAIN', options: [
            {id: 1, title: 'баклажан по-корейски', description: 'Баклажан темпура с соусом соя-лук-кунжут', price: '1300'},
            {id: 2, title: 'баклажан по-израильски', description: 'Печеный баклажан с тхиной, специальными специями, зеленью и гранатом', price: '1300'},
            {id: 3, title: 'бульгоги', description: 'Жареное мясо, маренованное в груше, имбире, чесноке и корейских специях с рисом и кимчи', price: '2500'},
            {id: 4, title: 'басар бакар', description: 'Говядина с соусом из мацуна и тхины, вместе со схугом, израильскими специями, зеленью и гранатом', price: '2500'},
        ],},
    {title: 'DESSERT', options: [
            {
                id: 1,
                title: 'малаби',
                description: 'Баклажан темпура с соусом соя-лук-кунжут',
                price: '600'},
            {
                id: 1,
                title: 'пуноппан',
                description: 'Печеный баклажан с тхиной, специальными специями, зеленью и гранатом',
                price: '600'},
        ]
    },
]
