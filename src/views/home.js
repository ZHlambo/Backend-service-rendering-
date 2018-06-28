import React,{Component} from "react";

export default class Home extends Component{
  constructor(props){
    super(props);
    this.state ={
      text:"init"
    }
  }
  componentWillMount(){
    console.log("willmount");
    this.setState({text: "willmount"})
  }
  click=()=>{
    console.log("Asdfa");
  }
  render() {
    return (
      <div onClick={this.click}>
        {this.state.text}
      </div>
    );
  }
}
