import React, { useState } from "react";
import Layout from "../components/layout";
import Ufs from "../components/Ufs";

export default function Pagina2() {

    const [opcaoUf, setOpcaoUf] = useState({id:"", nome: ""});

    return (
        <Layout>
            <h3>Dados Externos</h3>
            <Ufs setOpcaoUf={setOpcaoUf} />
            <p>{opcaoUf.id} - {opcaoUf.nome}</p>
        </Layout>
    );
}