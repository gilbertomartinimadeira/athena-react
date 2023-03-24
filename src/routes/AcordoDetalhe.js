import React from "react";
import { useParams } from "react-router";

export default function AcordoDetalhe () {
    const {id} = useParams();

    return (<h1>AcordoDetalhe {id}</h1>);
}