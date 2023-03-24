import React from "react";
import { useParams } from "react-router";

export default function ClienteDetalhe () {
    const {id} = useParams();

    return (<h1>ClienteDetalhe {id}</h1>);
}