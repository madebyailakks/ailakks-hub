import style from "./comissions.module.css";
import TextIcon from "../../components/text-icon/text-icon";

export default function Comissions() {
    return (
        <div className="container">
            <div className={style.wrapper}>
                <div className={style.grid} id={style.features}>
                    <div className={style.box} id={style.header}>
                        <h1>Plugins de Minecraft personalizados.</h1>
                        <p>¿Necesitas un plugin de Minecraft a medida para tu servidor? ¡Nosotros nos encargamos!
                            Consulta aquí nuestros precios y ventajas, y contáctanos en caso de duda o propuesta.</p>
                    </div>
                    <div className={style.box} id={style.element}>
                        <h1>Personalización</h1>
                        <h2>Valores y mensajes totalmente ajustable.</h2>
                    </div>
                    <div className={style.box} id={style.element}>
                        <h1>Revisiones</h1>
                        <h2>Cambios menores sin límite.</h2>
                    </div>
                    <div className={style.box} id={style.element}>
                        <h1>Plataforma</h1>
                        <h2>Spigot, BungeeCord o Velocity, y sus forks.</h2>
                    </div>
                    <div className={style.box} id={style.element}>
                        <h1>Servicio</h1>
                        <h2>Resolución de bugs después de la venta.</h2>
                    </div>
                    <div className={style.box} id={style.element}>
                        <h1>Conexión</h1>
                        <h2>Compatible con MySQL, MongoDB y/o Redis.</h2>
                    </div>
                    <div className={style.box} id={style.element}>
                        <h1>Versión</h1>
                        <h2>Cualquiera, pero una en específico.</h2>
                    </div>
                </div>
                <div className={style.grid}>
                    <div className={style.box}>
                        <h1>Plan</h1>
                        <div className="price">
                            <h4>Simple</h4>
                            <h5>19.99€</h5>
                        </div>
                        <p>Con un objetivo sencillo, pocos comandos, mensajes y configuraciones. Ejemplo: Plugin de
                            teletransporte aleatorio.</p>
                    </div>
                    <div className={style.box}>
                        <h1>Plan</h1>
                        <div className="price">
                            <h4>Medio</h4>
                            <h5>39.99€</h5>
                        </div>
                        <p>Funcionamiento simple, algo más logrado. Requiere algún sistema complejo, como almacenamiento
                            de datos, variables y más. Ejemplo: Plugin de economía.</p>
                    </div>
                    <div className={style.box}>
                        <h1>Plan</h1>
                        <div className="price">
                            <h4>Avanzado</h4>
                            <h5>79.99€</h5>
                        </div>
                        <p>Minijuego complejo, con almacenamiento de datos, sincornización, comandos administrativos y
                            más. Ejemplo: Plugin de Skywars.</p>
                    </div>
                </div>
                <div className="spaced">
                    <TextIcon icon={<i
                        className="fa-regular fa-circle-exclamation"/>} text={
                        <p>Actualmente no acepto comisiones. Si se trata de un proyecto a largo plazo, contáctame con tu
                            idea y la consideraré para un futuro cercano.</p>}/>
                </div>
                <div className={style.grid} id={style.footer}>
                    <div className={style.box}>
                        <div className="rich-elemnt">
                            <div>
                                <h3>Contáctame</h3>
                                <p>Aquí tienes mis métodos de contacto, para aclarar dudas o realizar propuestas
                                    personalizadas (únicamente si es realmente necesario, si no, aplicarán los planes
                                    aquí
                                    mencionados).</p>
                            </div>
                            <a href="mailto:hola@ailakks.com">hola@ailakks.com</a>
                            <a href="https://discord.com/users/725039856933404694">Ailakks#5505</a>
                        </div>
                    </div>
                    <div className={style.box}>
                        <div className="rich-elemnt">
                            <div>
                                <h3>Patrocinado</h3>
                                <p>¿Quieres una página web como esta para tus comisiones? La personalizaré con los
                                    colores,
                                    información y módulos deseados.</p>
                            </div>
                            <div className="price">
                                <a href="" className="uppercased">Me interesa</a>
                                <h5>19.99€</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}