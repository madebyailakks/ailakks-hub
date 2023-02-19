import style from "./work.module.css";
import WorkList from "../../components/list/work/work-list";

export default function Work() {
    return (
        <div className={style.header}>
            <h1>Creadores de contenido</h1>
            <p>Estos son algunos de los creadores de contenido para los que he tenido la oportunidad de trabajar, ya sea directamente o en alguno de sus proyectos.</p>
            <WorkList />
        </div>
    )
}