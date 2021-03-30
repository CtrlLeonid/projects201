import './App.css';
import React from "react";
import {Route, BrowserRouter, NavLink} from "react-router-dom";

function Menu(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="#">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Главная</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">О нас</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact-us">Контакты</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="#" hidden="true" aria-disabled="true">Disabled</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

function MainPage(){
    return(
        <div className="container my-5">
            <p><h1>Тут тоже что то будет</h1></p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/14gsV2zc9Lk?start=17"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
        </div>
    )
}

function PageInfo(){
    return(
        <div className="container my-3">
            <div className="row">
                <div className="col-sm-6">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://zastavok.net/ts/creative-wallpaper/1507481962.jpg" className="d-block w-{100}" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://zastavok.net/ts/creative-wallpaper/1442695348.jpg" className="d-block w-{100}" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://zastavok.net/ts/creative-wallpaper/1424130062.jpg" className="d-block w-{100}" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card my-auto">
                        <img src="https://www.liceocomercialtome.cl/images/logoedu.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h2 className="card-title">Eduprof</h2>
                                <p><h3>Наши контакты</h3></p>
                                <p><h5>hotline@eduprof.ru</h5></p>
                                <p><h5>+7 (495) 260-52-89</h5></p>
                                <p><h5>109377, г. Москва, ул. Академика Скрябина, дом 9, стр. 4</h5></p>
                                <p><h5>109052, г. Москва, Рязанский проспект, дом 7, стр. 1</h5></p>
                                <p><h5>© 2020 ГБОУ ДПО Центр «Профессионал»</h5></p>
                                <a href="https://sdo.eduprof.ru/" className="btn btn-primary">Перейти</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ContactUs(){
    return (
        <div className="container my-5">
            <form action="">
                <div className="mb-3"><input type="text"  placeholder="Введите Emai" className="form-control"/></div>
                <div className="mb-3"><input type="text" placeholder="Как к вам обращаться" className="form-control"/></div>
                <div className="mb-3"><textarea type="text" placeholder="Введите текст" className="form-control"/></div>
                <div className="mb-3"><input type="submit" className="form-control btn btn-primary"/></div>
            </form>
        </div>
    )
}
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Menu/>
                <Route exact path="/" render={()=><h1><MainPage/></h1>} />
                <Route path="/about" render={()=><h1><PageInfo/></h1>}/>
                <Route path="/contact-us" render={()=><ContactUs/>}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
