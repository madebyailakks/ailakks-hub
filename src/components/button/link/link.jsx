import style from "./link.module.css";
import {NavLink} from 'react-router-dom'

export default function RouteLink(props) {
    return (
        <NavLink className={({isActive}) => isActive ? style.active: style.link} to={props.to} end>{props.text}</NavLink>
    )
}