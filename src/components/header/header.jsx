import style from "./header.module.css";
import Link from "../button/link/link";

export default function Header() {
    return (
        <div className={style.header}>
            <a>Ailakks Hub</a>
            <div className={style.routes}>
                <Link href="/" text="Inicio" />
                <Link href="/content-creators" text="Creadores de contenido" />
                <Link href="/projectsList" text="Proyectos" />
                <Link href="/work" text="Proyectos" />
                <Link href="/comissions" text="Comisiones" />
            </div>
        </div>
    )
}