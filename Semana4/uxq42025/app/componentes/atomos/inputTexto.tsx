'use client'
import { useEffect, useState } from "react";
import Boton from "./boton";

export default function InputTexto() {
    // Hooks
    const [textoBusqueda, setTextoBusqueda] = useState<string>("");
    const [lista, setLista] = useState<string[]>(["El principito", "Kpop demon hunters", "Ranam 1/2"]);
    function realizarBusqueda(event: any) {
        // console.log("[DEBUG]", event)
        setTextoBusqueda(event.target.value)
    }

    function agregarLista(){
        setLista([...lista,textoBusqueda])
    }
    // Un render en especifico 
    useEffect(()=>{
      console.log("Detectando un cambio en la lista");
    },[lista]);
   
    return (
        <div>
            <input type="text" className="font-semibold text-red-600  bg-red-100"
                //    onClick={(event:any)=>{realizarBusqueda(event)}}
                onChange={realizarBusqueda}
                value={textoBusqueda}
            />
            {
                textoBusqueda.length > 5 ? <h1>Buscando....</h1> : <h1>Texto muy corto para buscar</h1>
            }
            {
                //MAPEO : a partir de un tipo de datos nos ayuda a crear otro mas complejo 
                /*\
                for item in lista 
                    nuevaLista.push(<h1>{item}</h1>)
                */
                lista.map(item =>{
                    return <Boton titulo={item} customStyle="" key={item}/>
                })
            }
            <button onClick={agregarLista} className="text-blue-600  bg-red-500">Agregar a Lista</button>
        </div>

    )
}