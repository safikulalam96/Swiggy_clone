import React from "react";
import Aboutclasschild from "./Aboutclasschild";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("parent Constructor")
  }
  componentDidMount(){
    console.log('parent DidMount')
  }

  render() {
    console.log('parent render')
    return (
      <div>
        <hr />
        <h1>Count: {this.state.count}</h1>
        <button className="mx-2" onClick={()=>{
            this.setState({
                count:this.state.count+1
            })
        }}>Count</button>
        <h3>{this.props.name}</h3>
        <h2>Parent</h2>
        <Aboutclasschild/>
      </div>
    );
  }
}
export default AboutClass;




