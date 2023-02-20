import style from "./home.module.css";

const avatar = require("../../media/images/main/avatar.png");

const data = [
    {
        "icon": "fa-regular fa-balloon",
        "text": "Cumpleaños",
        "value": "25 de febrero"
    },
    {
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
    return (
        <div className={style.wrapper}>
            <img className="avatar" src={avatar} />
            <div className={style.content}>
                <h1>Hola, soy Ailakks</h1>
                <p>Tengo 16 años, soy de España, y continúo aprendo a diario diferentes lenguajes de programación y tecnologías. He trabajado para grandes creadores de contenido y estoy continuamente trabajando en proyectos nuevos.</p>

                <div className={style.elements_wrapper}>
                    {data.map((value, key) =>
                        <div className={style.element} key={key}>
                            <div className={style.element}>
                                <i className={value.icon} />
                                <p>{value.text}: {value.value}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}