import { createContext } from "react"


export const PsicologosContext = createContext();

const PsicologosProvider = (props) => {
    
    const listadoGratis = [
        {titulo: "TCC SUR Tratamientos Integrales", descripcion: "Lic. Nerea Vargas y Equipo - TCC - Niños - Adolescentes - Adultos - Discapacidad"},
        {titulo: "Guerra, Mariano - Lic. en Psicología", descripcion: "Psicólogo"},
        {titulo: "Genesis Equipo Interdisciplinario", descripcion: "Psicologia, Psicopedagogía, Psiquiatria, Terapia Ocupacional, Neurología, Nutrición, Fonoaudiología."},
        {titulo: "Gareca, Daniel Andrés - Lic. en Psicología (UBA)", descripcion: "Atención psicológica - Niños - Adolescentes - Adultos"},
        {titulo: "Guerra, Mariano - Lic. en Psicología", descripcion: "Psicólogo"},
        {titulo: "Alesso, María Alejandra - Lic. en Psicología", descripcion: "Psicólogo"},
        {titulo: "Alvarez Saez, Ma. del Rosario - Lic. en Psicología", descripcion: "Psicólogo"},
        {titulo: "Abriendo Camino", descripcion: "Psicólogo"},
        {titulo: "Aguiño Prieto, Alejandra", descripcion: "Psicólogo"},
        {titulo: "Alcalde Lacaze, Erina B.", descripcion: "Psicólogo"},
        {titulo: "Andrada, Vanina S.", descripcion: "Psicólogo"},
        ];
    
    const listadoDestacados = [
        {titulo: "Sosa, Gastón F. - Lic. en Psicología", descripcion: "Psicólogo - Psicoanalista", telefono: "(011) 15- 5388-5161", whatsapp: "1153885161", direccion: "Adrogué Centro, Adrogué"},
        
        {titulo: "Saggio, Lorena M. - Counselor", descripcion: "Consultora Psicológica - Counseling - Terapias Complementarias: Flores de Bach, aromaterapia, Yoga, Reiki", whatsapp: "1153885161", direccion: "Adrogué Centro, Adrogué"},
        
        {titulo: "Carello Silvina A. - Consultoría Psicológica", descripcion: "Atención con perspectiva de género - Consultoría Psicológica -Tratamientos Psicológicos - Adultos - Adolescentes - Familia - Pareja", telefono: "(011) 15- 5388-5161", whatsapp: "1153885161", direccion: "Adrogué Centro, Adrogué"},
        
        {titulo: "Genesis Equipo Interdisciplinario", descripcion: "Psicologia, Psicopedagogía, Psiquiatria, Terapia Ocupacional,Neurología, Nutrición, Fonoaudiología.", telefono: "(011) 15- 5388-5161", whatsapp: "1153885161", direccion: "Adrogué Centro, Adrogué"},
        
        {titulo: "Giannetto, Pedro Eduardo - Consultor Psicológico", descripcion: "Consultor Psicológico - Individual - Parejas- Flia", telefono: "(011) 15- 5388-5161", whatsapp: "1153885161", direccion: "Adrogué Centro, Adrogué"},
        
        ]

    return(

        <PsicologosContext.Provider
        value={{
            listadoGratis,
            listadoDestacados
        }}
        >
            {props.children}
        </PsicologosContext.Provider>
    )
}

export default PsicologosProvider;