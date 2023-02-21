import style from "./playlist.module.css";
import {useEffect, useState} from "react";

import axios from 'axios';
import Header from "../../components/header/header";

export default function Playlist() {
    const [playlist, setPlaylist] = useState(null);
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        async function fetchPlaylist() {
            const response = await axios.get(process.env.REACT_APP_API_ENDPOINT + "/playlist").catch(function (error) {
                if (error) {
                    setFailed(true);
                }
            });
            setPlaylist(response.data);
        }

        fetchPlaylist();
    }, []);

    return (
        <div>
            <Header text="Música" />
            <div className="container">
                {playlist ? <div className={style.wrapper}>
                        {
                            playlist.tracks.items.map((value, key) =>
                                <div className={style.element} key={key}>
                                    <img src={value.track.album.images[0].url}/>
                                    <a href={value.track.external_urls.spotify}>{value.track.name}</a>
                                    {
                                        value.track.artists.map((value, key) =>
                                            <div className={style.element} key={key}>
                                                <a href={value.external_urls.spotify}>{value.name}</a>
                                            </div>
                                        )
                                    }
                                    <audio src={value.track.preview_url} controls={true} autoPlay={false}/>
                                </div>
                            )
                        }
                    </div> :
                    <p>{failed ? "No se han podido obtener los datos. Inténtalo de nuevo más tarde.": "Cargando los datos la de lista de reproducción..."}</p>}
            </div>
        </div>
    )
}