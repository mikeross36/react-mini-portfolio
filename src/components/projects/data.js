import nextId from "react-id-generator"
import coffeebar from "../../images/coffeebar.png"
import drmartens from "../../images/drmartens.png"
import drones from "../../images/drones.png"
import fitness from "../../images/fitness.png"
import eye from "../../images/eye-icon.svg"
import github from "../../images/github-icon.svg"
import ganja from "../../images/ganjawebshop.png"


export const projects = [
    {
        id: nextId(),
        image: ganja,
        btns: [
            { id: nextId(), url: "https://ganjawebshop.cyclic.app", icon: eye },
            {id: nextId(), url:"https://github.com/mikeross36", icon: github}
        ]
    },
    {
        id: nextId(),
        image: drmartens,
        btns: [
            { id: nextId(), url: "https://drmartens-shop.netlify.app/", icon: eye },
            {id: nextId(), url:"https://github.com/mikeross36", icon: github}
        ]
    },
    {
        id: nextId(),
        image: drones,
        btns: [
            { id: nextId(), url: "https://drones-crude-rest-api.cyclic.app/#home", icon: eye },
            {id: nextId(), url:"https://github.com/mikeross36", icon: github}
        ]
    },
    {
        id: nextId(),
        image: fitness,
        btns: [
            { id: nextId(), url: "https://fitness-truth-website.netlify.app/", icon: eye },
            {id: nextId(), url: "https://github.com/mikeross36", icon: github}
        ]
    },
]