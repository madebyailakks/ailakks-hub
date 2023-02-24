import style from "./playlist.module.css";
import {useEffect, useState} from "react";

import axios from 'axios';
import Header from "../../components/header/header";
import {getCookie, setCookie} from 'react-use-cookie';
import {useSearchParams} from "react-router-dom";

export default function Playlist() {
    const [playlist, setPlaylist] = useState(null);
    const [failed, setFailed] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        async function fetchPlaylist() {
            try {
                const response = await axios.get(process.env.REACT_APP_API_ENDPOINT + "/playlist", { params: { token: getCookie('token') } });
                setPlaylist(response.data);
            } catch (error) {
                setCookie('token', '', 0);
            }
        }

        async function fetchToken() {
            try {
                const response = await axios.get(process.env.REACT_APP_API_ENDPOINT + "/token", { params: { code: searchParams.get('code') } });
                setCookie('token', response.data.token);

                searchParams.delete('code');
                setSearchParams(searchParams);

                fetchPlaylist();
            } catch (error) {
                console.error(error);
            }
        }

        if (getCookie('token')) {
            fetchPlaylist();
        } else if (searchParams.get('code')) {
            fetchToken();
        }
    }, []);

    if (!getCookie('token')) {
        return (
            <div>
                <Header text="Música"/>
                <div className="container">
                    <div id={style.login} className={style.wrapper}>
                        <div>
                            <h2>Accede con tu cuenta de Spotify</h2>
                            <p>Completa este sencillo paso con tu cuenta para ver la playlist.</p>
                        </div>
                        <a className="main_btn" href={`https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&scope=playlist-read-private&redirect_uri=${encodeURIComponent(process.env.REACT_APP_SPOTIFY_REDIRECT_URI)}`}>Continuar a Spotify</a>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <Header text="Música"/>
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
                        <p>{failed ? "No se han podido obtener los datos. Inténtalo de nuevo más tarde." : "Cargando los datos la de lista de reproducción..."}</p>}
                </div>
            </div>
        )
    }
}