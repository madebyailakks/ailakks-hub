import style from "./comissions.module.css";

export default function Comissions() {
    return (
        <div className="container">
            <div className={style.grid}>
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
            <div className={style.pricing}>
                <div className={style.box}>
                    <h3>Plan</h3>
                    <div className="price">
                        <h4>Simple</h4>
                        <h5>19.99€</h5>
                    </div>
                    <hr />
                        <p>Con un objetivo sencillo, pocos comandos, mensajes y configuraciones. Ejemplo: Plugin de
                            teletransporte aleatorio.</p>
                </div>
                <div className={style.box}>
                    <h3>Plan</h3>
                    <div className="price">
                        <h4>Medio</h4>
                        <h5>39.99€</h5>
                    </div>
                    <hr />
                        <p>Funcionamiento simple, algo más logrado. Requiere algún sistema complejo, como almacenamiento
                            de datos, variables y más. Ejemplo: Plugin de economía.</p>
                </div>
                <div className={style.box}>
                    <h3>Plan</h3>
                    <div className="price">
                        <h4>Avanzado</h4>
                        <h5>79.99€</h5>
                    </div>
                    <hr />
                        <p>Minijuego complejo, con almacenamiento de datos, sincornización, comandos administrativos y
                            más. Ejemplo: Plugin de Skywars.</p>
                </div>
            </div>
            <div className="spaced">
                <div className="text-icon">
                    <i className="fa-regular fa-circle-exclamation"></i>
                    <p>Contáctame con el plan deseado y la descripción del plugin en primer lugar, antes de realizar el
                        pago, para poder confirmar los detalles.</p>
                </div>
                <a className="uppercased" href="">Me interesa</a>
            </div>
            <div className="grid" id="footer">
                <div className="box" id="element">
                    <div className="rich-elemnt">
                        <div>
                            <h3>Contáctame</h3>
                            <p>Aquí tienes mis métodos de contacto, para aclarar dudas o realizar propuestas
                                personalizadas (únicamente si es realmente necesario, si no, aplicarán los planes aquí
                                mencionados).</p>
                        </div>
                        <a href="mailto:hola@ailakks.com">hola@ailakks.com</a>
                        <a href="https://discord.com/users/725039856933404694">Ailakks#5505</a>
                    </div>
                </div>
                <div className="box" id="element">
                    <div className="rich-elemnt">
                        <div>
                            <h3>Conóceme</h3>
                            <p>Aquí tienes mi portfolio y redes sociales, donde hablo un poco de mi experiencia en el
                                mundillo.</p>
                        </div>
                        <a className="uppercased" href="https://ailakks.com">Portfolio</a>
                    </div>
                </div>
                <div className="box" id="element">
                    <div className="rich-elemnt">
                        <div>
                            <h3>Patrocinado</h3>
                            <p>¿Quieres una página web como esta para tus comisiones? La personalizaré con los colores,
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
    )
}