import React from 'react';
import {Link} from 'react-router-dom';
export default class Home extends React.Component{
    render(){
        return (
                <div>
                    <ul>
                        <li>
                            <Link to="/main">Home1</Link>
                        </li>
                        <li>
                            <Link to="/about">About2</Link>
                        </li>
                        <li>
                            <Link to="/topics">topics3</Link>
                        </li>
                        <li>
                            <Link to="/Imooc1">Imooc1</Link>
                        </li>
                        <li>
                            <Link to="/Imooc2">Imooc2</Link>
                        </li>
                    </ul>
                    <hr/>
                    {this.props.children}
                </div>
        );
    }
}