import React from 'react'
import produtos from '../../data/produtos'

export default props => {

    const tabelaProdutos = produtos.map((produto) => {
        return (
            <tr>
                <td key={produto.id}>
                    {produto.id}
                </td>
                <td key={produto.id}>
                    {produto.nome}
                </td>
                <td key={produto.id}>
                    {produto.preco}
                </td>
            </tr>
        )
    })

    return (
        <div>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Preço</th>
            </tr>
            {tabelaProdutos}
        </div>
    )

}