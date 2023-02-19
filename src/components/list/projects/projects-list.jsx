import style from "./projects-list.module.css";

const projectsList = [
    {
        "displayName": "Regorland",
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
]

export default function ProjectsList() {
    return (
        <div className={style.wrapper}>
            {projectsList.map((value, key) =>
                <div className={style.element} key={key}>
                    <div className={style.grid_wrap}>
                        <div className={style.element}>
                            <img className={style.avatar} src={require('../../../media/images/project/' + value.image)} />
                            <h3 href={value.source}>{value.displayName}</h3>
                            <p>{value.count}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}