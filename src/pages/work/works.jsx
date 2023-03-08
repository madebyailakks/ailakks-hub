import style from "./works.module.css";
import Box from "../../components/box/box";
import WorksList from "../../components/list/works/work-list";

export default function Work() {
    return (
        <div>
            <Box title="Proyectos personales" left={
                <div className={style.text_wrap}>
                    <p>Estos son algunos de los proyectos personales que he decidido tener con el único objetivo de
                        entretenerme y aprender, aunque quién sabe en lo que se puedan convertir en un futuro.</p>
                </div>
            } right={<WorksList/>}/>
        </div>
    )
}