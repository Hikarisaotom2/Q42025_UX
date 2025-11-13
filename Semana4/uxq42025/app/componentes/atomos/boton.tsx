interface BotonParams {
    titulo: string;
    onDarClick:()=>void;
    customStyle: string;
}
// parametros.titulo
// {titulo, customStyle} = parametros
export default function Boton({ titulo, customStyle,onDarClick }: BotonParams) {
   /*
        1) no escala facilmente
        2) Principios de diseño
        */
       // Programacion funcional: funciones y los metodos como valores comunes y corrientes
       /*
   
       let darClick = ()=>{
        console.log("Hola mundo!");
       }
       darClick();
 
      darClick = ()=>{
        [1,2,3,4,5].forEach(element => {
            console.log(element)
        });
      }
      darClick(); // invocar la funcion 
      darClick //muestra el contenido de la funcion
      console.log("EL CODIGO ",darClick)

      // el codigo != invocacion/llamado

      Tipo de dato de una funcion: 
      1) tipos de datos de los parametros
      2) tipo de retorno
        (tipo de datos de los parametros) => tipo de retorno

      function hola(numero:number){
        return numero*numero;
      }
        (number)=>number

    function saludar(){
        console.log("hola mundo")
    }

    function imprimirLista(valor1:number,valor2:number){
        [1,2,3,4,5].forEach(element => {
            console.log(element)
        });
    }
        () => void;

    let funcion: ()=>void  = saludar
    funcion = imprimirLista

    "saludar"
    "imprimirLista tetxo muy largo grande y complicado que hace muchas cosas y tiene muchas cosas dentro"

    let cadena:String = "saludar"
    cadena = "imprimirLista tetxo muy largo grande y complicado que hace muchas cosas y tiene muchas cosas dentro"


*/
    return (
        <button
            className={`flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px] ${customStyle}`}
            onClick={onDarClick}
        >
            {titulo}
        </button>
    )
}