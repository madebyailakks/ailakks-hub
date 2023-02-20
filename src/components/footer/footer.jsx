import style from "./footer.module.css";

import generatedGitInfo from '../../generatedGitInfo.json';

export default function Footer() {
    return (
        <div className={style.wrapper}>
            <div>
                <h1>Ailakks Hub</h1>
                <p>Esta página web fue hecha con amor por Ailakks.</p>
            </div>
            <div>
                <p>Esta página web es <a href="https://github.com/Ailakks/ailakks-hub">open source</a></p>
                <p>ailakks/ailakks-hub</p>
                <p>{generatedGitInfo.gitBranch}@{generatedGitInfo.gitCommitHash}</p>
            </div>
        </div>
    )
}