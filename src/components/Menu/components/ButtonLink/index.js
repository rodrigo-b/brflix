import React from 'react'

function ButtonLink(props) //função, mas também componente, devido a letra maiuscula no inicio da palavra
{
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink; //exportando para por importar em outros lugares (devido a existirem outras telas com essa função)