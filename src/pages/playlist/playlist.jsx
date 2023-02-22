import style from "./playlist.module.css";
import {useEffect, useState} from "react";

import axios from 'axios';
import Header from "../../components/header/header";
import { getCookie, setCookie } from 'react-use-cookie';

export default function Playlist() {
    const [playlist, setPlaylist] = useState(null);
    const [failed, setFailed] = useState(false);

    const searchParams = new URLSearchParams(window.location.search);

    useEffect(() => {
        async function fetchPlaylist() {
            try {
                const response = await axios.get(process.env.REACT_APP_API_ENDPOINT + "/playlist", { params: { token: getCookie('token') } });
                setPlaylist(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        async function fetchToken() {
            try {
                const response = await axios.get(process.env.REACT_APP_API_ENDPOINT + "/token", { params: { code: searchParams.get('code') } });
                alert(response.data.token);
                setCookie('token', response.data.token);
            } catch (error) {
                console.error(error);
            }
        }

        if (getCookie('token')) {
            fetchPlaylist();
        } else {
            fetchToken();
        }
    }, []);

    if (getCookie('token')) {
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
    } else {
        return (
            <div>
                <a href={`https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&scope=playlist-read-private&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT_URI}`}>a</a>
            </div>
        )
    }
}