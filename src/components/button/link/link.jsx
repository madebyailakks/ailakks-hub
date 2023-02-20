import style from "./link.module.css";
import { Link } from 'react-router-dom'

export default function RouteLink(props) {
    return (
        <Link className={style.link} to={props.to}>{props.text}</Link>
    )
}