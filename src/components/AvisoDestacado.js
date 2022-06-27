import React from 'react'

const AvisoDestacado = ({aviso}) => {

    const {titulo, descripcion, telefono, whatsapp, direccion} = aviso;

  return (
        <div className="aviso-destacado">
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <div className="destacado-data">
                <p className="icon-data-phone">{telefono}</p>
                <p className="icon-data-whatsapp">{whatsapp}</p>
                <p className="icon-data-city">{direccion}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <button className="btn-filtro-on">Atención online</button>
                <a href="" className="btn">Contactar</a>
            </div>
        </div>
  )
}

export default AvisoDestacado