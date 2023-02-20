import style from "./ballons.module.css";

export default function Ballons() {
    return (
        <div className={style.wrapper}>
            <div className={style.happy}>
                <div className={`${style.balloon} ${style.balloon1} ${style["balloon-anim1"]}`} />
                <div className={`${style.balloon} ${style.balloon2} ${style["balloon-anim2"]}`} />
                <div className={`${style.balloon} ${style.balloon3} ${style["balloon-anim3"]}`} />
                <div className={`${style.balloon} ${style.balloon4} ${style["balloon-anim5"]}`} />
                <div className={`${style.balloon} ${style.balloon5} ${style["balloon-anim5"]}`} />
            </div>
            <div className={style.birthday}>
                <div className={`${style.balloon} ${style.balloon3} ${style["balloon-anim1"]}`} />
                <div className={`${style.balloon} ${style.balloon1} ${style["balloon-anim2"]}`} />
                <div className={`${style.balloon} ${style.balloon4} ${style["balloon-anim3"]}`} />
                <div className={`${style.balloon} ${style.balloon2} ${style["balloon-anim5"]}`} />
                <div className={`${style.balloon} ${style.balloon1} ${style["balloon-anim5"]}`} />
                <div className={`${style.balloon} ${style.balloon3} ${style["balloon-anim6"]}`} />
                <div className={`${style.balloon} ${style.balloon2} ${style["balloon-anim7"]}`} />
                <div className={`${style.balloon} ${style.balloon4} ${style["balloon-anim8"]}`} />
            </div>
        </div>
    )
}