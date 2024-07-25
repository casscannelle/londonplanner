import React, { forwardRef } from "react";
import { Formulario } from "../formulario";

export const Main = forwardRef((props, ref) => {
    return(
        <div className="header-topo">
            <div className="Main" ref={ref}>
            {props.children}
            <div>
            <div className="header-texto">
                <h1>Sua viagem para Londres bem organizada</h1>
                <h4>Toda viagem começa com um bom planejamento.<br/><br/>
                Criado com sugestões dos melhores passeios para fazer em Londres, este planner é o ponto de partida ideal para uma viagem inesquecível. Adicione as informações da sua viagem e tenha um planejamento personalizado na palma da sua mão para aproveitar ainda mais esta cidade incrível.<br></br><br/>
                Cadastre-se e acesse grátis o planner para você conhecer o melhor de Londres. </h4>
            </div>
            </div>
            <div className="header-form">
                <Formulario />
            </div>
            </div>
        </div>
    )
})