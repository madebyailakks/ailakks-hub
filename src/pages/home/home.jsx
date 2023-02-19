import style from "./home.module.css";

const avatar = require("../../media/images/main/avatar.png");

const data = [
    {
        "icon": "fa-regular fa-balloon",
        "text": "Cumpleaños",
        "value": "Febrero, 25"
    }
]

export default function Home() {
    return (
        <div className={style.header}>
            <img className="avatar" src={avatar} />
            <h1>Hola, soy Ailakks</h1>
            <p>Tengo 16 años, soy de España, y continúo aprendo a diario diferentes lenguajes de programación y tecnologías. He trabajado para grandes creadores de contenido y estoy continuamente trabajando en proyectos nuevos.</p>

            {data.map((value, key) =>
                <div className={style.element} key={key}>
                    <div className={style.element}>
                        <i className={value.icon} />
                        <p>{value.text}</p>
                        <p>{value.value}</p>
                    </div>
                </div>
            )}
        </div>
    )
}