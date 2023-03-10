import style from "./work-list.module.css";
import {Link} from "react-router-dom";

const worksList = [
    {
        "name": "Widdlo",
        "image": "widdlo.png",
        "description": "Plataforma de vídeos y directos open source",
        "github": "https://github.com/widdlo-dev"
    },
    {
        "name": "Aguacate",
        "image": "aguacate.png",
        "description": "Core general con todo lo que necesita una network de Minecraft",
        "github": "https://github.com/Aguacate-Development"
    },
    {
        "name": "Hylaxe Studios",
        "image": "hylaxe-studios.png",
        "description": "Equipo de creación de eventos de Minecraft y desarrollo web",
        "github": "https://github.com/hylaxe-studios"
    },
    {
        "name": "Waterlands",
        "image": "waterlands.png",
        "description": "Versión de legado de Aguacate",
        "github": "https://github.com/Waterlands"
    },
    {
        "name": "Wodmy",
        "image": "wodmy.png",
        "description": "Agencia de programación",
        "github": "https://github.com/wodmy-development",
        "display_link": "wodmy.com",
        "link": "https://wodmy.com"
    },
    {
        "name": "Lookup",
        "image": "lookup.png",
        "description": "Buscador y red social inteligente",
        "github": "https://github.com/lookup-app"
    },
    {
        "name": "Wibblo",
        "image": "wibblo.png",
        "description": "Proveedor de servicios en la nube",
        "github": "https://github.com/wibblo"
    },
    {
        "name": "Writty",
        "image": "writty.png",
        "description": "Plataforma de blogs open source",
        "github": "https://github.com/writty-dev"
    }
]

export default function WorksList() {
    return (
        <div className={style.wrapper}>
            {worksList.map((value, key) =>
                <Link to={value.github}>
                    <div className={style.element} key={key}>
                        <div className={style.grid_wrap}>
                            <div className={style.element}>
                                <img className={style.avatar} src={require('../../../media/images/work/' + value.image)} />
                                <div>
                                    <h3>{value.name}</h3>
                                    <p>{value.description}.</p>
                                    {value.link ? <div className={style.link_container}>
                                        <i className="fa-thin fa-link" />
                                        <a href={value.link}>{value.display_link}</a>
                                    </div> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    )
}