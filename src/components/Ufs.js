import React, { useEffect, useState } from "react";

export default function Ufs({setOpcaoUf}) {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const opt = [{id:"", nome:"Selecione..."}];
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
        .then(results => results.json())
        .then(data => {
            data.forEach(uf => {
                opt.push({id: uf.id, nome: uf.nome});
            });
            setOptions(opt);
        })
    }, []);//aqui estou dizendo que só vai rodar 1 vez, quando a tela for renderizada

    function handleChange(event) {
        setOpcaoUf({id: event.target.value, nome: event.target[event.target.selectedIndex].text});
    }

    return (
        <select name="uf" onChange={handleChange}>
            {options.map(item => {
                return (
                    <option key={item.id} value={item.id}>{item.nome}</option>
                )
            })}
        </select>
    )
}