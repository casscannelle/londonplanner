import React from "react";
import itinerario from "../../img/itinerario.jpg"
import mapas from "../../img/mapas.jpg"
import passeios from "../../img/passeios.jpg"
import checklist from "../../img/checklist.jpg"


export function Body(){
    
    return(
        <div>
            <div className="body-title">
                <h2>O que você vai encontrar no planner</h2>
            </div>
            <div className="grid-container">
                <div className="grid-item">
                <div><img src={itinerario} alt="london underground" width={215}></img></div>
                    <div><h3>Itinerário</h3></div>
                    <div><p>Uma programação otimizada por localização para você aproveitar melhor cada dia.</p></div>
                </div>
                <div className="grid-item">
                <div><img src={passeios} alt="london telephone" width={215}></img></div>
                    <div><h3>Pontos turísticos</h3></div>
                    <div><p>O que é imperdível? Descubra informações sobre os principais atrativos de Londres e confira também sugestões de passeios em cidades próximas.</p></div>
                </div>
                <div className="grid-item">
                <div><img src={mapas} alt="london eye" width={215}></img></div>
                    <div><h3>Check-list</h3></div>
                    <div><p>Pegou o passaporte? E a sombrinha? Disponibilizamos um check-list para você não esquecer nada para a viagem.</p></div>
                </div>
                <div className="grid-item">
                    <div><img src={checklist} alt="london taxi" width={215}></img></div>
                    <div><h3>Mapas</h3></div>
                    <div><p>Para ajudar você a se localizar e se locomover de transporte público ou a pé pela cidade.</p></div>
                </div>
            </div>
            
        </div>
    )
}