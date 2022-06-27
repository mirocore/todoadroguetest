import React, { useContext } from 'react'
import { PsicologosContext } from '../context/PsicologosContext'

import banner1 from '../assets/banner_01.png';
import banner2 from '../assets/banner_02.png';
import banner3 from '../assets/banner_03.png';
import AvisoGratis from './AvisoGratis';
import AvisoDestacado from './AvisoDestacado';

const PsicologosAdrogue = () => {

    const { listadoGratis, listadoDestacados } = useContext(PsicologosContext);


  return (<>
        
        <div id="promoTop">
            <div className="container">
                <div className="row">
                    <p className="col-12">Contratá cualquiera de nuestros productos en <span>3 cuotas sin interés</span> </p>
                </div>
            </div>
        </div>

        <header>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="#" id="logo">Todo Adrogué</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                

                
                <div className="collapse navbar-collapse  justify-content-between" id="navbarSupportedContent">
                    <form className="d-flex me-4" id="busquedaTop">
                        <input type="text" placeholder="¿Qué servicio buscás?"/>
                        <input type="text" placeholder="¿Dónde?"/>
                        <button className="btn">Buscar</button>
                    </form>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Rubros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sobre Adrogué</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn nav-btn">¡Publicar ahora!</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </header>


        <div className="container my-4 " id="busquedaMobile">
            <div className="row">
                <div className="col">
                    <div className="bg-white p-3">

                    <h1>Realizar otra búsqueda</h1>
                    <form className="my-3" >
                        <input className="form-control mb-2 fs-6" type="text" placeholder="¿Qué servicio buscás?"/>
                        <input className="form-control mb-2 fs-6" type="text" placeholder="¿Dónde?"/>
                        <button className="btn w-100">Buscar</button>
                    </form>

                    </div>
                </div>
            </div>
            
        </div>


        <div className="container mt-5">
            <div className="row">
                <div className="col">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={banner1} className="d-block w-100" alt="img_01" />
                        </div>
                        <div className="carousel-item">
                        <img src={banner2} className="d-block w-100" alt="img_02" />
                        </div>
                        <div className="carousel-item">
                        <img src={banner3} className="d-block w-100" alt="img_03" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="d-flex  justify-content-between align-items-center mt-1">
                    <div className="carousel-indicators d-inline">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <button className="btn-promo btn">Publicá tu banner aquí</button>
                </div>
                </div>
            </div>




            <div className="row">
                <div className="col-12 col-md-8 offset-md-2">
                    <div id="incluir">
                        <div>
                            <p>¿Querés incluirte en ésta sección?</p>
                            <p>¡Publicá gratis en 3 simples pasos!</p>
                        </div>
                        <button>¡Publicar!</button>
                    </div>
                </div>
            </div>


            <div className="row my-5">
                <div className="col-12 col-lg-8 order-last order-lg-first">
                    <p className="fw-light text-secondary">Inicio / Psicología / Adrogué</p>
                    <h1>Psicología en Adrogüe <span>(134 resultados)</span></h1>
                    <p>Listado de Profesionales en Psicología - Psicopedagogía - Pedagogía - Counselor</p>
                    <div id="filtros" className="d-flex justify-content-between">
                        <div>
                            <button className="btn-filtro-on">Atención Online</button>
                            <button className="btn-filtro-off">Abierto ahora</button>
                        </div>
                        <select name="" id="">
                            <option value="">Ordenar por relevancia</option>
                            <option value="">Ordenar por nombre</option>
                        </select>
                    </div>

                    <div id="listado-gratis">

                        {
                            listadoGratis.map( (aviso, index) => (
                                <AvisoGratis 
                                    key={index}
                                    aviso={aviso}
                                />
                            ) )
                        }


                        <div className="d-flex justify-content-between align-items-center flex-wrap-reverse mb-5">
                            <button className="btn-incluir mb-2">Incluirme en ésta seccion</button>
                            <nav aria-label="Page navigation example" className=" mb-2">
                                <ul className="pagination m-0 p-0">
                                    <li className="page-item"><a className="page-link" href="#">&lt;</a></li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                                    <li className="page-item"><a className="page-link" href="#">&gt;</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>


                </div>
                <div className="col-12 col-lg-4 order-first order-lg-last">
                    <div className="listado-destacados">
                        <button className="btn-promo btn">Destacá tu anuncio aquí</button>

                        
                        {
                            listadoDestacados.map( (aviso, index) => (
                                <AvisoDestacado 
                                    key={index}
                                    aviso={aviso}
                                />
                            ) )
                        }




                    </div>
                </div>
            </div>


        </div>

        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <a href="#" className="footer-logo">Todo Adrogué</a>
                        <p>Todo Adrogué S.R.L.</p>
                        <p>Una Idea de Grupo Todo</p>
                    </div>
                    <div className="col-12 col-md-2 offset-md-1">
                        <h3 className="nav-h3">Navegación</h3>
                        <ul>
                            <li>Inicio</li>
                            <li>Cómo Publicar</li>
                            <li>Todos los Rubros</li>
                            <li>Mapa</li>
                            <li>Historia de Adrogué</li>
                            <li>Contactanos</li>
                            <li>Términos y condiciones</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-2">
                        <h3 className="nav-h3">Guías Zona Sur</h3>
                        <ul>
                            <li>Adrogué</li>
                            <li>Avellaneda</li>
                            <li>Cañuelas</li>
                            <li>Ezeiza</li>
                            <li>Lanús</li>
                            <li>Lomas de Zamora</li>
                            <li>Monte Grande</li>
                            <li>Quilmes</li>
                            <li>San Vicente</li>
                            <li>Varela</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-2">
                        <h3 className="nav-h3">Guías Costa Atlántida</h3>
                        <ul>
                            <li>Aguas Verdes</li>
                            <li>Costa del Este</li>
                            <li>La Lucila</li>
                            <li>Las Toninas</li>
                            <li>Mar de Ajó</li>
                            <li>Mar del Tuyú</li>
                            <li>San Bernardo</li>
                            <li>San Clemente</li>
                            <li>Santa Teresita</li>
                            <li>Villa Gesell</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </footer>
        


    </>
  )
}

export default PsicologosAdrogue;