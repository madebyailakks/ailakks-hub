import style from "./header.module.css";

export default function Header() {
    return (
        <div className={style.header}>
            <h1>Ailakks Hub</h1>
            <div className={style.routes}>
                <a href="/">Inicio</a>
                <a href="/work">Proyectos</a>
            </div>
        </div>
    )
}