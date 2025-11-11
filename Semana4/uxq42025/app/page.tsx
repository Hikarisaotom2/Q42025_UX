import Image from "next/image";
import Boton from "./componentes/atomos/boton";
import CampoForm from "./componentes/moleculas/campoForm";
import InputTexto from "./componentes/atomos/inputTexto";


export default function Home() {
   

  let variable = 10;


  function hola(numero:number){
      return <h3>{numero*numero*numero}</h3>;
  }

 

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <Boton titulo ="Log Out" customStyle="text-blue-600  bg-red-500"/>
        <Boton titulo="Registrar" customStyle="font-semibold text-red-600  bg-red-100"/>
        <Boton titulo="Clear" customStyle="font-semibold text-zinc-600  bg-red-200"/>
       
        <InputTexto />
      
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
         {hola(9)}
          </h1>
         
        </div>
      </main>
    </div>
  );
}
