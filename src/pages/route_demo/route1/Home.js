import React from 'react';
import {HashRouter,Route,Link} from 'react-router-dom';
import About from './about';
import Main from './Main';
import Topic from './topic';
export default class Home extends React.Component{
    render(){
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Home</Link>
                        </li>
                    </ul>
                    <hr/>
                    <Route exact="true" path="/" component={Main}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topic}></Route>
                </div>
            </HashRouter>
        );
    }
}