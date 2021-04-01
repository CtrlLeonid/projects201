import React from "react";

export function PageInfo(){
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