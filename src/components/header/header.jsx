import style from "./header.module.css";
import Link from "../button/link/link";

export default function Header() {
    return (
        <div className={style.header}>
            <a>Ailakks Hub</a>
            <div className={style.routes}>
                <div className={style.wrapper}>
                    <Link href="/" text="Inicio" />
                    <Link href="/content-creators" text="Creadores de contenido" />
                    <Link href="/projects" text="Proyectos" />
                    <Link href="/work" text="Proyectos personales" />
                    <Link href="/music" text="Música" />
                    <Link href="/comissions" text="Comisiones" />
                    <Link href="/blog" text="Blog" />
                </div>
            </div>
        </div>
    )
}