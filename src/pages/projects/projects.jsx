import style from "./projects.module.css";
import Box from "../../components/box/box";
import ProjectsList from "../../components/list/projects/projects-list";

export default function Projects() {
    return (<div>
            <Box title="Proyectos" left={<div className={style.text_wrap}>
                <p>Estos son algunos de los proyectos para los que he aportado en mayor o menor medida. En todos
                    ellos, he tenido que trabajar en equipo y seguir las indicaciones del cliente para entregar un
                    buen producto.</p>
            </div>} right={<ProjectsList/>}/>
        </div>)
}