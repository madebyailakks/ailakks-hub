import style from "./navbar.module.css";
import RouteLink from "../button/link/link";

export default function Navbar() {
    return (
        <div className={style.header}>
            <h1>Ailakks Hub</h1>
            <div className="inline_grid">
                <RouteLink to="/" text="Inicio" />
                <RouteLink to="/content-creators" text="Creadores de contenido" />
                <RouteLink to="/projects" text="Proyectos" />
                <RouteLink to="/work" text="Proyectos personales" />
                <RouteLink to="/playlist" text="Playlist" />
                <RouteLink to="/comissions" text="Comisiones" />
                <RouteLink to="/setup" text="Setup" />
                <RouteLink to="/blog" text="Blog" />
            </div>
        </div>
    )
}