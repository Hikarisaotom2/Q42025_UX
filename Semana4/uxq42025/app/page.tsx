'use client'
import Image from "next/image";
import Boton from "./componentes/atomos/boton";
import CampoForm from "./componentes/moleculas/campoForm";
import InputTexto from "./componentes/atomos/inputTexto";
import { useEffect, useState } from "react";
import axios from 'axios';


export default function Home() {
  const [textoBusqueda, setTextoBusqueda] = useState<string>("Hola Mundo!");

  function realizarBusqueda(event: any) {
    // console.log("[DEBUG]", event)
    setTextoBusqueda(event.target.value)
  }

  function hola(numero: number) {
    return <h3>{numero * numero * numero}</h3>;
  }

  function ejecutarPeticionBackend() {
    console.log("Ejecutando peticion.......");
    const resultado = axios.get(process.env.NEXT_PUBLIC_BE_URL + "saludar")
    console.log("Resultado peticion ", resultado)
  }


  //Use effect

  // reaccionar al primer render 
  useEffect(() => {
    // cargando la infor = true
    // peticion ala BD para traer la info 
    // montar respuesta en un useState 
    // cargando la informacion = false
   
  }, []);

  // Reaccionar a todos los renders de la pagina 
  // useEffect(() => {
  //   console.log("Un render!!!");
  // });

  function logOut() {
    console.log("click en dar logout")
  }

  const clear = () => {
    console.log("click en el boton clear")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        {/* <Boton titulo="Log Out" customStyle="text-blue-600  bg-red-500" onDarClick={logOut} /> */}
      {/*  <Boton titulo="Registrar" customStyle="font-semibold text-red-600  bg-red-100" onDarClick={() => {
          console.log("Click en el boton registrar")}} /> 
        <Boton titulo="Clear" customStyle="font-semibold text-zinc-600  bg-red-200" onDarClick={clear} /> */}
        <Boton titulo="llamar endpoint" customStyle="font-semibold text-red-600  bg-red-100" onDarClick={ejecutarPeticionBackend} />

        
        {/* 
        <InputTexto />
        <input type="text" className="font-semibold text-red-600  bg-red-100"
          //    onClick={(event:any)=>{realizarBusqueda(event)}}
          onChange={realizarBusqueda}
          value={textoBusqueda}
        /> */}
        <h1>{textoBusqueda}</h1>
        {/* <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            {hola(9)}
          </h1>

        </div> */}
      </main>
    </div>
  );
}
