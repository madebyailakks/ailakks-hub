import style from "./text-icon.module.css";

export default function TextIcon(props) {
    return (
        <div className={style.wrapper}>
            {props.icon}
            {props.text}
        </div>
    )
}