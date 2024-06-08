import React from "react";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
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
        <h2>This is About page from Class based Component</h2>
      </div>
    );
  }
}
export default AboutClass;
