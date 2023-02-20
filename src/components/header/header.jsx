import style from "./header.module.css";

export default function Header(props) {
    return (
        <div className={style.header}>
            <h1>{props.text}</h1>
        </div>
    )
}