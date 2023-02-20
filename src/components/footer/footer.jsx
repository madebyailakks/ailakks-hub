import style from "./footer.module.css";

import generatedGitInfo from '../../generatedGitInfo.json';

export default function Footer() {
    return (
        <div className={style.wrapper}>
            <p>Esta página web es <a href="https://github.com/Ailakks/ailakks-hub">open source</a></p>
            <p>ailakks/ailakks-hub</p>
            <p>{generatedGitInfo.gitBranch}@{generatedGitInfo.gitCommitHash}</p>
        </div>
    )
}