import style from "./work-list.module.css";
import {Link} from "react-router-dom";

const worksList = [
    {
        "name": "Widdlo",
        "image": "widdlo.png",
        "description": "Plataforma de vídeos y directos open source",
        "github": "https://github.com/Widdlo-Development"
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
        "github": "https://github.com/wodmy-development"
    },
    {
        "name": "Lookup",
        "image": "lookup.png",
        "description": "Buscador y red social inteligente",
        "github": "https://github.com/lookup-app"
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
                                <p>{value.name}</p>
                                <p>{value.description}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    )
}