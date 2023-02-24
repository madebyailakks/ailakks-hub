import style from "./footer.module.css";

import generatedGitInfo from '../../git-info.json';

export default function Footer() {
    return (
        <div className={style.wrapper}>
            <div>
                <h3>Ailakks Hub</h3>
                <p>Esta página web fue hecha con amor por Ailakks. Código fuente disponible <a href="https://github.com/Ailakks/ailakks-hub">aquí</a>.</p>
            </div>
            <div>
                <h3>madebyailakks/ailakks-hub</h3>
                <p>{generatedGitInfo.gitBranch}@{generatedGitInfo.gitCommitHash}</p>
            </div>
        </div>
    )
}