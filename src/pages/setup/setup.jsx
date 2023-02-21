import style from "./setup.module.css";
import Box from "../../components/box/box";
import WorksList from "../../components/list/works/works-list";

export default function Setup() {
    return (
        <div>
            <Box title="Setup" left={
                <div className={style.text_wrap}>
                    <p>Estos son algunos de los proyectos personales que he decidido tener con el único objetivo de
                        entretenerme y aprender, aunque quién sabe en lo que se puedan convertir en un futuro.</p>
                </div>
            } right={<WorksList/>}/>
        </div>
    )
}