import style from "./box.module.css";
import Header from "../header/header";

export default function Box(props) {
    return (
        <div>
            <Header text={props.title} />
            <div className="container">
                <div className={style.wrapper}>
                    {props.left}
                    {props.right}
                </div>
            </div>
        </div>
    )
}