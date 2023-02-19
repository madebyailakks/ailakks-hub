import style from "./work.module.css";
import WorkList from "../../components/list/work/work-list";

export default function Work() {
    return (
        <div>
            <h1>Creadores de contenido</h1>
            <div className={style.wrapper}>
                <div className={style.text_wrap}>
                    <p>Estos son algunos de los creadores de contenido para los que he tenido la oportunidad de trabajar, ya sea directamente o en alguno de sus proyectos.</p>
                    <p>Muchos más creadores han disfrutado indirectamente de mis creaciones en proyectos mayores, como el HormiGeo, puedes ver más en proyectos :)</p>
                </div>
                <WorkList />
            </div>
        </div>
    )
}