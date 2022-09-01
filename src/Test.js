import { Component } from "react";

export class Test extends Component {
    state = {
        userInput:"",
        travelList:[]
    }


inputChange(e){
        this.setState({userInput: e});
    }

addItem(input){
        if(input === " ") {
            alert("Please add your LiSt!!")
        }else{
        let list = this.state.travelList;
        list.push(input);
        this.setState({travelList: list, userInput: ''})
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

    
    render(){
        return(
            <div className="container">
                <form>
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

                 <button className="delete" onClick={()=> this.delete()}>Delete</button>
                 </form>
            </div>

        )
    }  
}