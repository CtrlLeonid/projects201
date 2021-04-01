import './App.css';
import React from "react";
import {Route, BrowserRouter, NavLink} from "react-router-dom";
import {Menu} from "./components/Menu";
import {PostList} from "./components/PostList";
import {Post} from "./components/Post";
import {ContactUs} from "./components/ContactUs";
import {PageInfo} from "./components/PageInfo";


/*function MainPage(){
    return(
        <div className="container my-5">
            <p><h1>Тут тоже что то будет</h1></p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/14gsV2zc9Lk?start=17"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
        </div>
    )
}*/



function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Menu/>
                <Route exact path="/" render={()=><h1><PostList/></h1>} />
                <Route path="/about" render={()=><h1><PageInfo/></h1>}/>
                <Route path="/contact-us" render={()=><ContactUs/>}/>
                <Route path="/post" render={()=><Post/>}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
