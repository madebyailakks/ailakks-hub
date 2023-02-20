import style from "./content-creators.module.css";
import Box from "../../components/box/box";
import ContentCreatorsList from "../../components/list/content-creator/content-creators-list";

export default function ContentCreators() {
    return (
        <div>
            <Box title="Creadores de contenido" left={
                <div className={style.text_wrap}>
                    <p>Estos son algunos de los creadores de contenido para los que he tenido la oportunidad de
                        trabajar, ya sea directamente o en alguno de sus proyectos.</p>
                    <p>Muchos más creadores han disfrutado indirectamente de mis creaciones en proyectos mayores, como
                        en los eventos.</p>
                </div>} right={<ContentCreatorsList/>}/>
        </div>
    )
}