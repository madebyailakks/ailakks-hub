import style from "./blog.module.css";
import Header from "../../components/header/header";

export default function Blog() {
    return (
        <div className={style.wrapper}>
            <Header text="Publicaciones" />
            <div className="container">
                <p>Por ahora, esto está vacío, próximamente se hará la primera publicación. ¡Vuelve más tarde!</p>
            </div>
        </div>
    )
}