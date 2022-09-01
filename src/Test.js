import { Component } from "react";
import icon from "./check.png"

export class Test extends Component {

    state = {
        userInput:"",
        travelList:[],
    }


inputChange(e){
        this.setState({userInput: e});
    }

addItem(input){
        if(input === "") {
            alert("Please add your LiSt!!")
        }
        else{
        let list = this.state.travelList;
        list.push(input);
        this.setState({travelList: list, userInput: ""})
    }
}


crossed(e){
   const li = e.target;
    li.classList.toggle("crossed")
}

delete(){
    let list = this.state.travelList;
    list = [];
    this.setState({travelList:list})
}

onForm(e){
e.preventDefault()
}

    
    render(){
        return(
            <div className="container">
                <form onSubmit={this.onForm}>
                <input type="text"
                placeholder="Write your list..."
                onChange={(e) => {this.inputChange(e.target.value)}} 
                value = {this.state.userInput}/>

                 <button className="add" onClick={() => this.addItem(this.state.userInput)}>Add Item</button>
                 <div className="li">
                 <ul>
                    {this.state.travelList.map((item,index) => (
                         <li key={index} onClick={this.crossed}>
                            <img src={icon} alt="check" width={50}/>
                            {item}</li>
                    ))}
                 </ul>
                 </div>

                 <button className="delete" onClick={()=> this.delete()}>Delete</button>
                 </form>
            </div>

        )
    }  
}