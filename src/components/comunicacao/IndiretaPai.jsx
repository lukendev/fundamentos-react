import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    const [a, b] = [1, 2]
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)


    function fornecerInformacoes(nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <span>{nome} </span>
            <span><strong>{idade}</strong> </span>
            <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            <div>Pai</div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}