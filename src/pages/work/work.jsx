import style from "./work.module.css";
import WorkList from "../../components/list/work/work-list";
import Box from "../../components/box/box";

export default function Work() {
    return (
        <div>
            <Box title="Creadores de contenido" left={
                <div className={style.text_wrap}>
                    <p>Estos son algunos de los creadores de contenido para los que he tenido la oportunidad de trabajar, ya sea directamente o en alguno de sus proyectos.</p>
                    <p>Muchos más creadores han disfrutado indirectamente de mis creaciones en proyectos mayores, como el HormiGeo, puedes ver más en proyectos :)</p>
                </div>} right={<WorkList />} />
        </div>
    )
}