import style from "./setup-list.module.css";
import {Link} from "react-router-dom";

const setupList = [
    {
        "name": "Monitor principal",
        "description": "OC Monitor Gaming 24G2AE- 24\" Full HD, 144Hz, 1ms, IPS, FreeSync Premium, (1920x1080, 250 cd/m, D-SUB, HDMIx2, Displayport 1x1.2)",
        "opinion": "",
    },
    {
        "name": "Monitor secundario",
        "description": "Lenovo D24-20 - Monitor Gaming 23.8 \" FullHD (VA, 75 Hz, 4 ms, HDMI, VGA, FreeSync), ajuste de inclinación - negro",
        "opinion": "",
    },
    {
        "name": "Teclado",
        "description": "Corsair K55 RGB PRO XT Teclado para Juegos con Teclas de Membrana, Retroiluminación RGB Dinámica, 6 Teclas Macro con Integración el Software Elgato, Resistencia al Polvo y los Derrames, QWERTY, Negro",
        "opinion": "",
    },
    {
        "name": "Ratón",
        "description": "Logitech G203 LIGHTSYNC Ratón Gaming con Iluminación RGB Personalizable, 6 Botones Programables, Captor 8K para Gaming, Seguimiento de hasta 8,000 DPI, Ultra-ligero - Negro",
        "opinion": "",
    },
    {
        "name": "Capturadora",
        "description": "Elgato HD60 S, capturadora externa, streaming y grabación a 1080p60 con latencia ultrabaja en PS5, PS4/Pro, Xbox Series X/S, Xbox One X/S, en OBS, Twitch, YouTube, funciona con PC y Mac",
        "opinion": "",
    },
    {
        "name": "Cascos",
        "description": "HyperX HX-HSCF-BK Cloud Flight - Cascos de Gaming inalámbricos compatibles con PC, PS4/Pro, Negro",
        "opinion": "",
    },
    {
        "name": "Procesador",
        "description": "AMD Ryzen 5 5600G, con Wraith Stealth Cooler",
        "opinion": "",
    },
    {
        "name": "Tarjeta gráfica",
        "description": "MSI GEFORCE GTX 1650 4GT LP OC",
        "opinion": "",
    },
    {
        "name": "Memoria RAM",
        "description": "Corsair CMK16GX4M2B3200C16 Vengeance LPX 16 GB (2 x 8 GB) DDR4 3200 MHz C16 XMP 2.0 Módulo de Memoria de Alto Rendimiento, Negro",
        "opinion": "",
    }
]

export default function SetupList() {
    return (
        <div className={style.wrapper}>
            {setupList.map((value, key) =>
                <Link to={value.github}>
                    <div className={style.element} key={key}>
                        <div className={style.grid_wrap}>
                            <div className={style.element}>
                                <div>
                                    <h3>{value.name}</h3>
                                    <p>{value.description}.</p>
                                    {value.link ? <div className={style.link_container}>
                                        <i className="fa-thin fa-link"/>
                                        <a href={value.link}>{value.display_link}</a>
                                    </div> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    )
}