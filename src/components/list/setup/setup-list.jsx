import style from "./setup-list.module.css";
import {Link} from "react-router-dom";

const setupList = [
    {
        "type": "Monitor principal",
        "name": "AOC 24G2AE 144Hz",
        "description": "AOC Monitor Gaming 24G2AE- 24\" Full HD, 144Hz, 1ms, IPS, FreeSync Premium, (1920x1080, 250 cd/m, D-SUB, HDMIx2, Displayport 1x1.2)",
        "opinion": "",
    },
    {
        "type": "Monitor secundario",
        "name": "Lenovo D24-20 75Hz",
        "description": "Lenovo D24-20 - Monitor Gaming 23.8 \" FullHD (VA, 75 Hz, 4 ms, HDMI, VGA, FreeSync), ajuste de inclinación - negro",
        "opinion": "",
    },
    {
        "type": "Teclado",
        "name": "Corsair K55 RGB PRO XT",
        "description": "Corsair K55 RGB PRO XT Teclado para Juegos con Teclas de Membrana, Retroiluminación RGB Dinámica, 6 Teclas Macro con Integración el Software Elgato, Resistencia al Polvo y los Derrames, QWERTY, Negro",
        "opinion": "",
    },
    {
        "type": "Ratón",
        "name": "Logitech G203",
        "description": "Logitech G203 LIGHTSYNC Ratón Gaming con Iluminación RGB Personalizable, 6 Botones Programables, Captor 8K para Gaming, Seguimiento de hasta 8,000 DPI, Ultra-ligero - Negro",
        "opinion": "",
    },
    {
        "type": "Capturadora",
        "name": "Elgato HD60 S",
        "description": "Elgato HD60 S, capturadora externa, streaming y grabación a 1080p60 con latencia ultrabaja en PS5, PS4/Pro, Xbox Series X/S, Xbox One X/S, en OBS, Twitch, YouTube, funciona con PC y Mac",
        "opinion": "",
    },
    {
        "type": "Cascos",
        "name": "HyperX Cloud Flight",
        "description": "HyperX HX-HSCF-BK Cloud Flight - Cascos de Gaming inalámbricos compatibles con PC, PS4/Pro, Negro",
        "opinion": "",
    },
    {
        "type": "Procesador",
        "name": "AMD Ryzen 5 5600G",
        "description": "AMD Ryzen 5 5600G, con Wraith Stealth Cooler",
        "opinion": "",
    },
    {
        "type": "Tarjeta gráfica",
        "name": "GEFORCE GTX 1650",
        "description": "MSI GEFORCE GTX 1650 4GT LP OC",
        "opinion": "",
    },
    {
        "type": "Memoria RAM",
        "name": "Corsair Vengeance LPX 2x16 3200MHz",
        "description": "Corsair CMK16GX4M2B3200C16 Vengeance LPX 16 GB (2 x 8 GB) DDR4 3200 MHz C16 XMP 2.0 Módulo de Memoria de Alto Rendimiento, Negro",
        "opinion": "",
    },
    {
        "type": "Memoria RAM",
        "name": "Kingston FURY Beast 8GB 3600MHz",
        "description": "Kingston FURY Beast 8GB 3600MHz DDR4 CL17 Memoria para Ordenadores de sobremesa Módulo único KF436C17BB/8",
        "opinion": "",
    },
    {
        "type": "Disco duro NVMe",
        "name": "Crucial P5 500GB 6600MB/s",
        "description": "Crucial P5 Plus CT500P5PSSD8 Disco Duro Sólido Interno SSD de 500GB (PCIe 4.0, 3D NAND, NVMe, M.2) hasta 6600MB/s, Color Negro",
        "opinion": "",
    },
    {
        "type": "Disco duro SSD",
        "name": "Kingston A400 480GB",
        "description": "Kingston A400 SSD Disco duro sólido interno 2.5\" SATA Rev 3.0, 480GB - SA400S37/240G",
        "opinion": "",
    },
    {
        "type": "Disco duro HDD",
        "name": "Seagate BarraCuda 1TB",
        "description": "Seagate Technology BarraCuda, 1 TB, Disco duro interno, HDD, 3,5\", SATA 6 GB/s, 7200 RPM, caché de 64 MB para ordenador de sobremesa y PC, Plateado, Paquete Abre-fácil (ST2000DMZ08)",
        "opinion": "",
    }
]

export default function SetupList() {
    return (
        <div className={style.wrapper}>
            {setupList.map((value, key) =>
                <div className={style.element} key={key}>
                    <div className={style.grid_wrap}>
                        <div className={style.element}>
                            <div>
                                <h3>{value.type}</h3>
                                <p>{value.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}