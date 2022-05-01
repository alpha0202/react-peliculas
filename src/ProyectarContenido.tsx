import { ReactElement } from "react"

export default function ProyectarContenido (props: proyectarContenidoProps){
    return(
    <>
    <h3>Parte superior</h3>
    {props.children}
    <h2>Parte inferior</h2>
    </>
    )
}

interface proyectarContenidoProps{
    children: ReactElement
}
