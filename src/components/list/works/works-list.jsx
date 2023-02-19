import style from "./work-list.module.css";

const worksList = [
    {
        "name": "Widdlo",
        "image": "widdlo.png",
        "description": "",
        "github": ""
    },
    {
        "name": "Aguacate",
        "image": "aguacate.png",
        "description": "",
        "github": ""
    },
    {
        "name": "Hylaxe Studios",
        "image": "hylaxe-studios.png",
        "description": "",
        "github": ""
    },
    {
        "name": "Waterlands",
        "image": "waterlands.png",
        "description": "",
        "github": ""
    },
    {
        "name": "Wodmy",
        "image": "wodmy.png",
        "description": "",
        "github": ""
    },
    {
        "name": "Lookup",
        "image": "lookup.png",
        "description": "",
        "github": ""
    }
]

export default function WorksList() {
    return (
        <div className={style.wrapper}>
            {worksList.map((value, key) =>
                <div className={style.element} key={key}>
                    <div className={style.grid_wrap}>
                        <div className={style.element}>
                            <img className={style.avatar} src={require('../../../media/images/work/' + value.image)} />
                            <p>{value.name}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}