import { Component } from "react";

export class Test extends Component {
    constructor() {
        super();
    this.state = {
        userInput:"",
        travelList:[]
       
    }
}

    inputChange(e){
        this.setState({userInput: e});
    }

    addItem(input){
        if(input === " ") {
            alert("Please add your LiSt!!")
        }else{
        let listArray = this.state.travelList;
        listArray.push(input);
        this.setState({travelList: listArray, userInput: ''})
        console.log(listArray)
        
    }
}

crossed(e){
   const li = e.target;
    li.classList.toggle("crossed")
}

    
    render(){
        return(
            <div className="container">
                <input type="text"
                placeholder="Write your list..."
                onChange={(e) => {this.inputChange(e.target.value)}} 
                value = {this.state.userInput}/>

                 <button className="add" onClick={() => this.addItem(this.state.userInput)}>Add Item</button>

                 <ul>
                    {this.state.travelList.map((item,index) => (
                         <li key={index} onClick={this.crossed}>{item}</li>
                    ))}
                 </ul>

                 <button className="delete">Delete</button>
            </div>

        )
    }  
}