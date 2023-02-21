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
                        <h4>Plan</h4>
                        <div className={style.price}>
                            <h1>Simple</h1>
                            <h5>19.99€</h5>
                        </div>
                        <hr/>
                        <p>Con un objetivo sencillo, pocos comandos, mensajes y configuraciones. Ejemplo: Plugin de
                            teletransporte aleatorio.</p>
                    </div>
                    <div className={style.box}>
                        <h4>Plan</h4>
                        <div className={style.price}>
                            <h1>Medio</h1>
                            <h5>39.99€</h5>
                        </div>
                        <hr/>
                        <p>Funcionamiento simple, algo más logrado. Requiere algún sistema complejo, como almacenamiento
                            de datos, variables y más. Ejemplo: Plugin de economía.</p>
                    </div>
                    <div className={style.box}>
                        <h4>Plan</h4>
                        <div className={style.price}>
                            <h1>Avanzado</h1>
                            <h5>79.99€</h5>
                        </div>
                        <hr/>
                        <p>Minijuego complejo, con almacenamiento de datos, sincornización, comandos administrativos y
                            más. Ejemplo: Plugin de Skywars.</p>
                    </div>
                </div>
                <div className={style.info_wrap}>
                    <TextIcon icon={<i
                        className="fa-regular fa-circle-exclamation"/>} text={
                        <p>Actualmente no acepto comisiones. Si se trata de un proyecto a largo plazo, contáctame con tu
                            idea y la consideraré para un futuro cercano.</p>}/>
                </div>
                <div className={style.grid} id={style.footer}>
                    <div className={style.box}>
                        <div>
                            <h3>Contáctame</h3>
                            <p>Aquí tienes mis métodos de contacto, para aclarar dudas o realizar propuestas
                                personalizadas (únicamente si es realmente necesario, si no, aplicarán los planes
                                aquí
                                mencionados).</p>
                        </div>
                        <hr/>
                        <div className="inline_grid">
                            <a className="main_btn" href="mailto:hola@ailakks.com">hola@ailakks.com</a>
                            <a className="main_btn" href="https://discord.com/users/725039856933404694">Ailakks#5505</a>
                        </div>
                    </div>
                    <div className={style.box}>
                        <div>
                            <h3>Patrocinado</h3>
                            <p>¿Quieres una página web como esta para tus comisiones? La personalizaré con los
                                colores,
                                información y módulos deseados.</p>
                        </div>
                        <hr/>
                        <div className={style.price}>
                            <a href="" className="main_btn">Me interesa</a>
                            <h5>19.99€</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}