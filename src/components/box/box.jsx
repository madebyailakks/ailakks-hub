import style from "./box.module.css";

export default function Box(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <div className={style.wrapper}>
                {props.left}
                {props.right}
            </div>
        </div>
    )
}