import React from 'react'; 
import Child from './Child';
import {Button} from 'antd';
import './index.less';
class Life extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    handleClick(){
        this.setState({
            count: this.state.count + 1
        })
    }
    handleAdd=()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    render(){
        return (
            <div>
            <p>The lifecycle introduction of React</p>
            <Button onClick={this.handleAdd}>AntD点击一下</Button>
            <button onClick={this.handleAdd}>点击一下</button>
            <button onClick={this.handleClick.bind(this)}>点击一下</button>
            <p>{this.state.count}</p>
            <Child name="jack"></Child>
            </div>
        )
    }
}
export default Life;