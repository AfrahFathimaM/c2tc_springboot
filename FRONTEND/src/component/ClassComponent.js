import React ,{Component} from 'react'//importing component class form react library
//writing a class
class ClassComponent extends Component{
render(){//to render outpur in browser
return <h1>Afrah's classcomponent with {this.props.v1}{this.props.v2}</h1>
}
}
//export this componentand import this in app.js forexecution
export default ClassComponent;
