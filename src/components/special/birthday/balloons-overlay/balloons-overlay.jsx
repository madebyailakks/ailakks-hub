import style from "./balloons-overlay.module.css";
import {useEffect} from "react";

export default function BalloonsOverlay() {
    function random(num) {
        return Math.floor(Math.random() * num);
    }

    function getRandomStyles() {
        const r = random(255);
        const g = random(255);
        const b = random(255);
        const mt = random(200);
        const ml = random(50);
        const dur = random(5) + 5;
        return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `;
    }

    let balloonContainer;

    function createBalloons(num) {
        balloonContainer = document.getElementById("balloons_container");

        for (let i = num; i > 0; i--) {
            const balloon = document.createElement("div");
            balloon.className = style.balloon;
            balloon.style.cssText = getRandomStyles();
            balloonContainer.append(balloon);
        }
    }

    function removeBalloons() {
        balloonContainer.style.opacity = 0;

        setTimeout(() => {
            balloonContainer.remove()
        }, 500)
    }

    useEffect(() => {
        createBalloons(30)
    }, []);

    window.addEventListener("click", () => {
        removeBalloons();
    });

    return (
        <div id="balloons_container" className={style.container} />
    )
}