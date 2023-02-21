import style from "./works.module.css";
import Box from "../../components/box/box";
import WorksList from "../../components/list/works/works-list";

export default function Work() {
    return (
        <div>
            <Box title="Proyectos personales" left={
                <div className={style.text_wrap}>
                    <p>Estos son algunos de los creadores de contenido para los que he tenido la oportunidad de trabajar, ya sea directamente o en alguno de sus proyectos.</p>
                    <p>Muchos más creadores han disfrutado indirectamente de mis creaciones en proyectos mayores, como el HormiGeo, puedes ver más en proyectos :)</p>
                </div>
            } right={<WorksList />} />
        </div>
    )
}