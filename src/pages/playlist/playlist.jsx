import style from "./playlist.module.css";
import {useEffect, useState} from "react";

import axios from 'axios';

export default function Playlist() {
    const [playlist, setPlaylist] = useState("");

    useEffect(() => {
        async function fetchPlaylist() {
            const response = await axios.get(process.env.REACT_APP_API_ENDPOINT + "/playlist");
            setPlaylist(response.data);
        }

        fetchPlaylist();
    }, []);

    return (
        <div className={style.wrapper}>
            <h1>Esto está muy vacío</h1>
            <p>{JSON.stringify(playlist)}</p>
        </div>
    )
}