import style from "./setup.module.css";
import Box from "../../components/box/box";
import SetupList from "../../components/list/setup/setup-list";

export default function Setup() {
    return (
        <div>
            <Box title="Setup" left={
                <div className={style.text_wrap}>
                    <p>Estos son los componentes que utilizo día a día en mi setup para hacer mis cositas. También
                        incluiré una valoración personal por si en algún momento te interesa alguno de estos.</p>
                </div>
            } right={<SetupList/>}/>
        </div>
    )
}