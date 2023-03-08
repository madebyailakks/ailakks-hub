import style from "./projects-list.module.css";

const projectsList = [
    {
        "displayName": "Regorland Network",
        "image": "regorland.png",
        "description": "Network de Minecraft de Regortread"
    },
    {
        "displayName": "Hycraft Network",
        "image": "hycraft.png",
        "description": "Network de Minecraft de las más destacadas hispanohablantes"
    },
    {
        "displayName": "MadKaos",
        "image": "madkaos.png",
        "description": "Network de Minecraft de Rubius"
    },
    {
        "displayName": "HormiGeo",
        "image": "hormigeo.png",
        "description": "Equipo de Minecraft organizado por AldoGeo"
    },
    {
        "displayName": "Spreen World",
        "image": "spreen-world.png",
        "description": "Network de Minecraft de Spreen"
    },
    {
        "displayName": "NoobCraft Network",
        "image": "noobcraft.png",
        "description": "Network de Minecraft de Vegetta777, Arsilex y Lexosi"
    },
    {
        "displayName": "Minecraft Battle Royale",
        "image": "battle-royale.png",
        "description": "Equipo de Minecraft organizado por Soarinng"
    },
    {
        "displayName": "Hybox Studios",
        "image": "hybox.png",
        "description": "Equipo de creación de contenido en Minecraft"
    },
    {
        "displayName": "KirosCraft",
        "image": "kiroscraft.png",
        "description": "Network de Minecraft de aXoZer"
    },
    {
        "displayName": "Canary Games",
        "image": "canary-games.png",
        "description": "Network de Minecraft"
    },
    {
        "displayName": "Planeta Diamante 23",
        "image": "planeta-diamante.png",
        "description": "Evento de Minecraft patrociando por Samsung España",
        "rich": true,
        "rich_description": "Evento realizado por Regortread en colaboración con Samsung España. " +
            "En este servidor público, los jugadores junto con algunos creadores de contenido " +
            "del Team Galaxy, como Folagor, tenían la misión de recoger Shiterita, la basura del planeta, " +
            "en referencia a la sostenibilidad del nuevo Galaxy S23. Según iba consiguiendo " +
            "Shiterita, podían encontrar objetos y conseguir diferentes premios. En total, " +
            "se regalaron 200 códigos de descuento de 150€, x4 móviles S23, y x1 S23 Ultra.",
    }
]

export default function ProjectsList() {
    return (
        <div>
            <div className={style.wrapper}>
                {projectsList.map((value, key) =>
                    <div className={style.element} key={key}>
                        <div className={style.grid_wrap}>
                            <div className={style.element}>
                                <img className={style.avatar}
                                     src={require('../../../media/images/project/' + value.image)}/>
                                <div>
                                    <h3>{value.displayName}</h3>
                                    <p>{value.description}.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}