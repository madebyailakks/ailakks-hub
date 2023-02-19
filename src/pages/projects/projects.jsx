import style from "./projects.module.css";
import Box from "../../components/box/box";
import ProjectsList from "../../components/list/projects/projects-list";

export default function Projects() {
    return (
        <div>
            <Box title="Proyectos" left={
                <div className={style.text_wrap}>
                    <p>Estos son algunos de los creadores de contenido para los que he tenido la oportunidad de trabajar, ya sea directamente o en alguno de sus proyectos.</p>
                    <p>Muchos más creadores han disfrutado indirectamente de mis creaciones en proyectos mayores, como el HormiGeo, puedes ver más en proyectos :)</p>
                </div>} right={<ProjectsList />} />
        </div>
    )
}