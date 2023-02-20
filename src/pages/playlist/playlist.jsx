import style from "./playlist.module.css";
import {useEffect, useState} from "react";

import axios from 'axios';

export default function Playlist() {
    const [playlist, setPlaylist] = useState(null);

    useEffect(() => {
        async function fetchPlaylist() {
            const response = await axios.get(process.env.REACT_APP_API_ENDPOINT + "/playlist");
            setPlaylist(response.data);
        }

        fetchPlaylist();
    }, []);

    if (playlist) {
        return (
            <div className={style.wrapper}>
                {
                    playlist.tracks.items.map((value, key) =>
                        <div className={style.element} key={key}>
                            {value.track.name}
                            {
                                value.track.artists.map((value, key) =>
                                    <div className={style.element} key={key}>
                                        {value.name}
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        )
    }
}