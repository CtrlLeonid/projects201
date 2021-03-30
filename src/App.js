import './App.css';
import {Route, BrowserRouter, NavLink} from "react-router-dom";

function ConyactUs(){
    return (
    <div className="container my-5">
        <form action="">
            <div className="mb-3"><input type="text" className="form-control"/></div>
            <div className="mb-3"><input type="text" className="form-control"/></div>
            <div className="mb-3"><input type="text" className="form-control"/></div>
            <div className="mb-3"><input type="text" className="form-control"/></div>
        </form>
    </div>
    )
}

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <nav className="nav">
                <NavLink className="nav-link active" aria-current="page" to="#">Главная</NavLink>
                <NavLink className="nav-link" to="/about">О нас</NavLink>
                <NavLink className="nav-link" to="contact-us">Контакты</NavLink>
            </nav>

            <Route exact path="/" render={()=><h1>Главная стрница</h1>}/>
            <Route path="/about" render={()=><h1>О нас</h1>}/>
            <Route path="/contact-us"render={()=><h1>Страница контакты</h1>}/>
        </BrowserRouter>
    </div>
  );
}

export default App;