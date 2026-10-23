import React from "react";
import * as footerStyles from "./footer.module.css";

export default function Footer({copyRightYear}) {
    return (
        <p className="{footerStyles.footer}">
           (c) {copyRightYear} Estudos de Gatsby. Todos os direitos reservados.
        </p>
    )
}