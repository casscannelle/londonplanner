import React from "react";
import logo from "../../img/logo.png";


export function Footer () {
    return (
        <div className="footer">
            <div>
                <img src={logo} alt="london logo" width={100}></img>
            </div>
            <div className="credits">
                <h5>Planner de viagens</h5>
                <p className="footer-p">Todos os direitos reservados - 2024</p>
            </div>
        </div>
    )
}