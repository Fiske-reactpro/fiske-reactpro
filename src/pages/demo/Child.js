import React from 'react';
import './index.less';
class Child extends React.Component{
   render(){
       return (
           <div>
               <p>{this.props.name}</p>
           </div>
       )
   }
}
export default Child;