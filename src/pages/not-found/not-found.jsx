import style from "./not-found.module.css";

export default function NotFound() {
    return (
        <div className={style.wrapper}>
            <h1>Esto está muy vacío</h1>
            <p>No se ha encontrado ningún resultado para esta ruta. Es posible que este contenido ya no esté disponible más, o que te hayas confundido. Vuelve al inicio para seguir explorando.</p>
        </div>
    )
}