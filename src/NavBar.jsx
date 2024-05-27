import React from "react";
import TesteFc from './Teste'
import './index.css'
 const NabBarzinha = () => {
    return (
        <>
        
          <header>
            <nav>
                <TesteFc ARRAY={['HOME','SOBRE' , 'SERVICOS' , 'CONTATO']}/>
            </nav>
          </header>
        </>
    )
 }

  export default  NabBarzinha