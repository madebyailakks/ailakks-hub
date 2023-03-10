import style from "./content-creators-list.module.css";
import {Link} from "react-router-dom";

const creators = [
    {
        "displayName": "elrubiusOMG",
        "count": "40.4 M",
        "source": "https://www.youtube.com/user/elrubiusOMG",
        "image": "rubius.jpg"
    },
    {
        "displayName": "FlexVega",
        "count": "7.13M",
        "source": "https://www.youtube.com/@FlexVega",
        "image": "flexvega.jpg"
    },
    {
        "displayName": "Spreen",
        "count": "6,3M",
        "source": "https://www.twitch.tv/elspreen",
        "image": "spreen.jpg"
    },
    {
        "displayName": "Capitán Gato",
        "count": "2.63M",
        "source": "https://www.youtube.com/@CapitanGato",
        "image": "capitán_gato.jpg"
    },
    {
        "displayName": "aXoZer",
        "count": "2.2M",
        "source": "https://twitter.com/aXoZerr",
        "image": "axozer.jpg"
    },
    {
        "displayName": "Regortread",
        "count": "1.4M",
        "source": "https://www.tiktok.com/@regortread",
        "image": "regortread.jpg"
    },
    {
        "displayName": "MarkiLokuras",
        "count": "1.05M",
        "source": "https://www.youtube.com/@MarkiLokuras",
        "image": "marki_locuras.jpg"
    },
    {
        "displayName": "Arsilex",
        "count": "862K",
        "source": "https://www.youtube.com/channel/UCOHD1HJPxzQFAbnBTMSVjPQ",
        "image": "arsilex.jpg"
    },
    {
        "displayName": "Lexosi",
        "count": "641K",
        "source": "https://www.youtube.com/@Lexosi",
        "image": "lexosi.jpg"
    },
    {
        "displayName": "aldo_geo",
        "count": "617.6K",
        "source": "https://twitter.com/aldogeotv",
        "image": "aldo_geo.jpg"
    },
    {
        "displayName": "lLocochon",
        "count": "338K",
        "source": "https://www.youtube.com/@lLocochon",
        "image": "locochon.jpg"
    },
    {
        "displayName": "Soarinng",
        "count": "302K",
        "source": "https://www.youtube.com/@Soarinng",
        "image": "soarinng.jpg"
    }
]

export default function ContentCreatorsList() {
    return (
        <div className={style.wrapper}>
            {creators.map((value, key) =>
                <div className={style.element} key={key}>
                    <div className={style.grid_wrap}>
                        <Link to={value.source}>
                            <div className={style.element}>
                                <img className={style.avatar} src={require('../../../media/images/creators/' + value.image)} />
                                <p>{value.displayName}</p>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}