import style from "./projects-list.module.css";

const projectsList = [
    {
        "displayName": "Regorland Network",
        "image": "regorland.png"
    },
    {
        "displayName": "Hycraft Network",
        "image": "hycraft.png"
    },
    {
        "displayName": "MadKaos",
        "image": "madkaos.png"
    },
    {
        "displayName": "HormiGeo",
        "image": "hormigeo.png"
    },
    {
        "displayName": "Spreen World",
        "image": "spreen-world.png"
    },
    {
        "displayName": "NoobCraft Network",
        "image": "noobcraft.png"
    },
    {
        "displayName": "Minecraft Battle Royale",
        "image": "battle-royale.png"
    },
    {
        "displayName": "Hybox Studios",
        "image": "hybox.png"
    },
    {
        "displayName": "KirosCraft",
        "image": "kiroscraft.png"
    },
    {
        "displayName": "Canary Games",
        "image": "canary-games.png"
    },
    {
        "displayName": "Planeta Diamante 23",
        "image": "planeta-diamante.png",
        "rich": true,
        "description": "Evento realizado por Regortread en colaboración con Samsung España. " +
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
                                <h3 href={value.source}>{value.displayName}</h3>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {projectsList.map((value, key) => {
                    if (value.rich) {
                        return (
                            <div className={style.rich_element} key={key}>
                                <div className={style.grid_wrap}>
                                    <img className={style.avatar}
                                         src={require('../../../media/images/project/' + value.image)}/>
                                    <h3 href={value.source}>{value.displayName}</h3>
                                    <p>{value.description}</p>
                                </div>
                            </div>
                        )
                    }
                }
            )}
        </div>
    )
}