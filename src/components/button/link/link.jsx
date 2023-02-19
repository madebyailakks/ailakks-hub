import style from "./link.module.css";

export default function Link(props) {
    return (
        <a className={style.link} href={props.href}>{props.text}</a>
    )
}