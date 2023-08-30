import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);

        this.state = {      //State is a set of data that an individual component can hold
            planet : "earth"
        };
        console.log("This is Constructor");
    }

    componentDidMount(){
        this.setState({   //To update its initial state from earth to mars
            planet : "Mars"
        });
        console.log("This is componentDidMount");
    }

    render(){       //logic
        console.log("This is render");
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.description}</h2>
                <h3>{this.state.planet}</h3>
            </div>
        );
    }
}

export default User;

// LIFE CYCLE METHODS
// MOUNT -> Component is initially rendered to DOM
// CONSTRUCTOR, RENDERED, COMPONENTDIDMOUNT -> SIDE EFFECTS
// UPDATE -> Component is being updated
// UNMOUNT -> Component is removed from DOM


// function User(props){
//     return (
//       <div className="User">
//         <h1>{props.name}</h1>
//         <h4>{props.description}</h4>
//       </div>
//     );
//   };
  
//   export default User;

  //props -> properties/params, a data that is passed from one componenet to another