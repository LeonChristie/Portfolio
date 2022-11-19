import React from "react";
import Heal from "../assets/hyandm.png"

export default function Work() {
  return (
    <div className="row justify-content-center text-center mx-5 pt-5  section">
        <div className="col-5 px-5">
            <h4 className="fs-5">Magazine Style Website - Heal Yourself & Move</h4>
            <img src={Heal} className="img-fluid"></img>
            <span><a href="https://github.com/LeonChristie"className="project-link">See Live</a></span>
            <span><a href="https://github.com/LeonChristie"className="project-link">See Code</a></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                quibusdam atque nostrum dicta eligendi unde minus doloremque sunt
                omnis adipisci non porro nisi, dolorum perferendis aliquam maiores
                modi totam distinctio?</p>
        </div>
        <div className="col-5 px-5">
        <h4 className="fs-5">Magazine Style Website - Heal Yourself & Move</h4>
            <img src={Heal} className="img-fluid"></img>
            <span><a href="https://github.com/LeonChristie"className="project-link">See Live</a></span>
            <span><a href="https://github.com/LeonChristie"className="project-link">See Code</a></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                quibusdam atque nostrum dicta eligendi unde minus doloremque sunt
                omnis adipisci non porro nisi, dolorum perferendis aliquam maiores
                modi totam distinctio?</p>
        </div>
    </div>
  );
}
