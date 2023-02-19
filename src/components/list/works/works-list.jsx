import style from "./work-list.module.css";

const projectsList = [
]

export default function WorksList() {
    return (
        <div className={style.wrapper}>
            {projectsList.map((value, key) =>
                <div className={style.element} key={key}>
                    <div className={style.grid_wrap}>
                        <div className={style.element}>
                            <p>{value.count}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}