import style from "./header.module.css";
import Link from "../button/link/link";

export default function Header() {
    return (
        <div className={style.header}>
            <a>Ailakks Hub</a>
            <div className={style.routes}>
                <Link href="/" text="Inicio" />
                <Link href="/work" text="Creadores de contenido" />
                <Link href="/work" text="Colaboraciones" />
                <Link href="/work" text="Proyectos" />
                <Link href="/work" text="Comisiones" />
            </div>
        </div>
    )
}