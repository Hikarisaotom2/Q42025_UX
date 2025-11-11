interface BotonParams {
    titulo: string;
    customStyle: string;
}
// parametros.titulo
// {titulo, customStyle} = parametros
export default function Boton({ titulo, customStyle }: BotonParams) {

    return (
        <button
            className={`flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px] ${customStyle}`}
        >
            {titulo}
        </button>
    )
}