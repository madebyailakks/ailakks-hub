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
                            <img src={value.track.album.images[0].url} />
                            <a href={value.track.external_urls.spotify}>{value.track.name}</a>
                            {
                                value.track.artists.map((value, key) =>
                                    <div className={style.element} key={key}>
                                        <a href={value.external_urls.spotify}>{value.name}</a>
                                    </div>
                                )
                            }
                            <audio src={value.track.preview_url} controls={true} autoPlay={false} />
                        </div>
                    )
                }
            </div>
        )
    }
}