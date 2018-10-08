import React from 'react'
export default class Info extends React.Component{
    render(){
        return(
            <div>
               这里是测试动态漏油功能;
               动态漏油的值是:{this.props.match.params.mainId}
            </div>
        )
    }
}