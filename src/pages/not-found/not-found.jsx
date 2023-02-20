import style from "./not-found.module.css";
import Header from "../../components/header/header";

export default function NotFound() {
    return (
        <div className={style.wrapper}>
            <Header text="Esto está muy vacío" />
            <div className="container">
                <p>No se ha encontrado ningún resultado para esta ruta. Es posible que este contenido ya no esté disponible más, o que te hayas confundido. Vuelve al inicio para seguir explorando.</p>
            </div>
        </div>
    )
}