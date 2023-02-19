import style from "./header.module.css";
import Link from "../button/link/link";

export default function Header() {
    return (
        <div className={style.header}>
            <a>Ailakks Hub</a>
            <div className={style.routes}>
                <Link href="/" text="Inicio" />
                <Link href="/work" text="Proyectos" />
            </div>
        </div>
    )
}