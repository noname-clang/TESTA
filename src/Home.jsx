import React from "react";
import TesteFc from './Teste'
import './index.css'
 const HomePage = () => {
    return (
        <>
        
          <header>
            <nav>
                <TesteFc ARRAY={['HOME','SOBRE' , 'SERVICOS' , 'CONTATO']}/>
            </nav>
          </header>
          <div className="divdohome">
            <h1> Essa aqui é a home page</h1>
          </div>
          <div className="divzinhadocurso"> 
            <h1>Adicione e conquiste</h1>
            <h3>Melhore suas habilidades com os cursinhos do fabio gameplay , va do 0 ao mestre em 24 horas </h3> 
          </div>
        </>
    )
 }

  export default  HomePage