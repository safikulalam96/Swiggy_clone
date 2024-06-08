import React from "react";
class Aboutbachhha extends React.Component{
    constructor(props){
        super(props)
        console.log('second constructor')
    }
    componentDidMount(){
        //api calls
        console.log("second compoenentDidMount")
    }
    render(){
        console.log('second render')
        return <div>
            This is last Component
        </div>
    }
}
export default Aboutbachhha;