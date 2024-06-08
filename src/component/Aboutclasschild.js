import React from "react";
import Aboutbachhha from "./Aboutbachhha"
class Aboutclasschild extends React.Component{
    constructor(props){
        super(props)
        console.log('first constructor')
    }
    componentDidMount(){
        //api calls
        console.log("first componentDidMount")
    }
    render(){
        console.log('first render')
        return <div>
           I am second About
           <Aboutbachhha/>
        </div>
    }
}
export default Aboutclasschild;