import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";

export default function Pagina3() {

    const data = useStaticQuery(graphql`
        query {
            allUser {
                nodes {
                    email
                    id
                    name
                    website
                }
            }
        }
        `);
    const users = data.allUser.nodes;

    return (
        <Layout>
            <h3>Dados Internos</h3>
            <h4>Usuários</h4>
            <table width="900px" border={1} cellPadding={10} cellSpacing={0}>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Website</th>
                </tr>
                {
                    users.map(item => {
                        return (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.website}</td>
                        </tr>)
                    })
                }
            </table>
        </Layout>
    );
}