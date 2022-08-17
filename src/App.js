import React  from 'react';
import "./App.css";
import axios from 'axios';



class App extends React.Component {
state={
    advice:''
};

componentDidMount(){
    this.fetchAdvice(); //call the func
}

//func declaration
fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
        const {advice} = response.data.slip; //disctructring advice from response 
       
        this.setState({advice});//  det the advice value to the advice prop (state)

    })
    .catch((error)=>{
        console.log(error);

    });
}

    render() {
        const {advice} = this.state; // disctructring
        return (
            <div className="app">
                <div className='card'>
                    <h1 className ='heading'>{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span> Give Me Advice ! </span>
                    </button>       
                </div>
            </div>
           
        )
    }
}

export default App;