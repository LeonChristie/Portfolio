import React from "react";
import Link from "../assets/linkedin_logo.svg";
import Git from "../assets/github_logo.svg";
import Leon from "../assets/index.jpeg"

export default function Open() {
  return (

    <div className="row justify-content-center mx-5">
        <div className="text-center section p-3">
            <div className="d-flex justify-content-around align-items-center">
                <a><span><img src={Link} width="40px" className="logo"></img></span></a>
                <a><span><img src={Git} width="48px" className="logo"></img></span></a>
                <a><span className="icon-link">@</span></a>
                <a><span className="icon-link">cv</span></a>
            </div>
            <hr />
            <div >
                <h1 className="pt-5 fw-bold">LEON CHRISTIE</h1>
                <h2 className="pb-5 fw-bold">Front-End Developer</h2>
                <p >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                quibusdam atque nostrum dicta eligendi unde minus doloremque sunt
                omnis adipisci non porro nisi, dolorum perferendis aliquam maiores
                modi totam distinctio?
                </p>
                <p>
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        More about me...</button>
                </p>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                        <div className="row justify-content-center py-4">
                            <div className="col-7 align-self-center">Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger. Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger</div>
                            <div className="col-3"><img src={Leon} className="photo" width="200px"/></div>
                        </div>
                        <div class="flex-row justify-content-center py-4 card card-body">
                            <div>HTML - CSS - JavaScript - Bootstrap 5 - React - Github</div>
                        </div>
                    </div>
                </div>


            </div>
                      <hr />  
        </div>
       
    </div>

 

  );
}
