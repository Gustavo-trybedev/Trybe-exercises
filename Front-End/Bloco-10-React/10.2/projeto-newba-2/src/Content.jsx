import React, { Component } from 'react';

const conteudos = [
    {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
    },
    {
        conteudo: 'Composição de Componentes',
        bloco: 11,
        status: 'Aprendendo',
    },
    {
        conteudo: 'Composição de Estados',
        bloco: 12,
        status: 'Aprenderei'
    },
    {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
    },
]

const { conteudo, bloco, status } = conteudos;

class Content extends Component {
    render() {
        return (
            <div className="content">
                {conteudos.map((content) => (
                    <div className="card">
                        <h4 key={conteudo}>{`O conteudo é: ${content.conteudo}`}</h4>
                        <p key={status}>{`Status: ${content.status}`}</p>
                        <p key={bloco}>{`Bloco: ${content.bloco}`}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Content;