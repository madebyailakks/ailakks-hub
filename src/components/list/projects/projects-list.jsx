import style from "./projects-list.module.css";

const projectsList = [

]

export default function ProjectsList() {
    return (
        <div className={style.wrapper}>
            {projectsList.map((value, key) =>
                <div className={style.element} key={key}>
                    <div className={style.grid_wrap}>
                        <div className={style.element}>
                            <img className={style.avatar} src={require('../../../media/images/projects/' + value.image)} />
                            <h3 href={value.source}>{value.displayName}</h3>
                            <p>{value.count}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}