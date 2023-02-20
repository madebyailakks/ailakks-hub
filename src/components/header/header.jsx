import style from "./header.module.css";
import Link from "../button/link/link";
import RouteLink from "../button/link/link";

export default function Header() {
    return (
        <div className={style.header}>
            <a>Ailakks Hub</a>
            <div className={style.routes}>
                <div className={style.wrapper}>
                    <RouteLink to="/" text="Inicio" />
                    <RouteLink to="/content-creators" text="Creadores de contenido" />
                    <RouteLink to="/projects" text="Proyectos" />
                    <RouteLink to="/work" text="Proyectos personales" />
                    <RouteLink to="/music" text="Música" />
                    <RouteLink to="/comissions" text="Comisiones" />
                    <RouteLink to="/blog" text="Blog" />
                </div>
            </div>
        </div>
    )
}