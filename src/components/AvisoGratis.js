import React from 'react'

const AvisoGratis = ({aviso}) => {

    const { titulo, descripcion } = aviso; 

  return (
        <div className="aviso-gratis d-flex align-items-center justify-content-between">
            <div>
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
                </div>
            <a href="" className="btn">Contactar</a>
        </div>
  )
}

export default AvisoGratis