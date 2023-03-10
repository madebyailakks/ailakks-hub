import style from "./home.module.css";
import {Link} from "react-router-dom";
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";
import {useCallback} from "react";

const avatar = require("../../media/images/main/avatar.png");

const data = [
    {
        "id": "birthday",
        "icon": "fa-regular fa-balloon",
        "text": "Cumpleaños",
        "value": "25 de febrero",
        "extra": ""
    },
    {
        "id": "location",
        "icon": "fa-solid fa-location-dot",
        "text": "Ubicación",
        "value": "España"
    }
]

const social = [
    {
        name: "GitHub",
        link: "https://github.com/Ailakks",
        icon: "fa-brands fa-github"
    },
    {
        name: "Twitter",
        link: "https://twitter.com/Ailakks",
        icon: "fa-brands fa-twitter"
    },
    {
        name: "Discord",
        link: "https://discord.com/invite/rvTPye9ShK",
        icon: "fa-brands fa-discord"
    },
    {
        name: "Twitch",
        link: "https://www.twitch.tv/ailakksK",
        icon: "fa-brands fa-twitch"
    },
    /*{
        name: "SpigotMC",
        link: "https://www.spigotmc.org/members/ailakks.1433377/",
        icon: "fa-solid fa-faucet"
    },
    {
        name: "Buy me a coffee",
        link: "https://www.buymeacoffee.com/ailakks",
        icon: "fa-regular fa-cup-togo"
    },*/
    {
        name: "Email",
        link: "mailto:hola@ailakks.com",
        icon: "fa-solid fa-envelope"
    }
]

export default function Home() {
    const spawnConfetti = useCallback(() => {
        confetti({
            particleCount: 150,
            spread: 120
        });
    });

    return (
        <div className="container">
            <div className={style.container}>
                <div className={style.wrapper}>
                    <img className="avatar" src={avatar}/>
                    <div className={style.content}>
                        <h1 className="gradient">Hola, soy Ailakks.</h1>
                        <p>Hola, me conocen como Ailakks, tengo 17 años, soy de España, y estoy me encanta la
                            programación, IAs y ciencia. He trabajado para grandes creadores de contenido y estoy
                            constantemente trabajando en proyectos nuevos y emocionantes.</p>

                        <div className={style.elements_wrapper}>
                            {data.map((value, key) =>
                                <div id={style[value.id]} className={style.element} key={key}>
                                    <div id="prevent-select" className={style.element}>
                                        <i className={value.icon}/>
                                        <p>{value.text}: {value.value} {value.extra}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <h2>Enlaces</h2>
                        <div className={style.elements_wrapper}>
                            {social.map((value, key) =>
                                <div className={style.element} key={key}>
                                    <Link style={{textDecoration: 'none'}} to={value.link}>
                                        <div id="prevent-select" className={style.element}>
                                            <i className={value.icon}/>
                                            <p>{value.name}</p>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
