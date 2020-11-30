import product1 from "../../../asserts/images/butter.jpeg";
import product3 from "../../../asserts/images/karmel.jpeg";
import product2 from "../../../asserts/images/cocaoProduct.jpeg";
import product4 from '../../../asserts/images/classicProduct.jpeg';
export const cookies = [
    {
        id:"1",
        bgStyle: {
            backgroundImage: `linear-gradient(to bottom,rgba(255,255,255,0.1),rgba(0,0,0,0.6)),url(${product3})`,
            backgroundSize: "cover",
        },
        name: "קרמל מלוח",
        price:8,
        types:[],
        fills:[]
    },
    {
        id:"2",
        bgStyle: {
            backgroundImage: `linear-gradient(to bottom,rgba(255,255,255,0.1),rgba(0,0,0,0.6)),url(${product1})`,
            backgroundSize: "cover",
            backgroundPosition:'center'
        },
        name: "חמאת בוטנים",
        types: [
            {
                id:1,
                title:"רגילה"
            },
            {
                id:2,
                title:"קקאו"
            }
        ],
        price:8,
        fills:[]
    },
    {
        id:"3",
        bgStyle: {
            backgroundImage: `linear-gradient(to bottom,rgba(255,255,255,0.1),rgba(0,0,0,0.6)),url(${product2})`,
            backgroundSize: "cover",
        },
        name: "צ'יפס קקאו",
        types:[],
        price:8,
        fills:[
            {
                id:"1",
                title:"בלי מילוי",
                checked:true
            },
            {
                id:"2",
                title:"מריר",
                checked: false
            },
            {
                id:"3",
                title:"חלב",
                checked: false
            },
            {
                id:"4",
                title:"לבן",
                checked: false
            },
        ]
    },
    {
        id:"4",
        bgStyle: {
            backgroundImage: `linear-gradient(to bottom,rgba(255,255,255,0.1),rgba(0,0,0,0.6)),url(${product4})`,
            backgroundSize: "cover",
        },
        name: "צ'יפס קלאסי",
        types:[],
        price:8,
        fills:[
            {
                id:"1",
                title:"בלי מילוי",
                checked: true
            },
            {
                id:"2",
                title:"מריר",
                checked: false
            },
            {
                id:"3",
                title:"חלב",
                checked: false
            },
            {
                id:"4",
                title:"לבן",
                checked: false
            },
        ]
    }
]
