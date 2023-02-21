import style from "./footer.module.css";

import generatedGitInfo from '../../generatedGitInfo.json';

export default function Footer() {
    return (
        <div className={style.wrapper}>
            <div>
                <h3>Ailakks Hub</h3>
                <p>Esta página web fue hecha con amor por Ailakks.</p>
            </div>
            <div>
                <h3>ailakks/ailakks-hub</h3>
                <p>{generatedGitInfo.gitBranch}@{generatedGitInfo.gitCommitHash}</p>
            </div>
        </div>
    )
}