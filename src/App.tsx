import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Setting from "./components/Setting/Setting";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/profile' component={Profile}/>
                        <Route path='/dialogs/' component={Dialogs}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/setting' component={Setting}/>
                    </Switch>
                </div>
                {/*<Profile/>*/}
            </div>
        </BrowserRouter>);
}


export default App;
