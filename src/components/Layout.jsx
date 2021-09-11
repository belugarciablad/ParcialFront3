import React from "react";
import Opciones from "./Opciones"
import Recordatorio from "./Recordatorio";
import data from "./data.json";

class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            contador: 0,
            seleccionPrevia:null,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    historial=[];
    
    handleClick(botonclickeado){

        if(this.historial.length === 4){
            alert("FIN")
            return
        }

        if((botonclickeado==="A" & this.state.seleccionPrevia===null) | (botonclickeado==="A" & this.state.seleccionPrevia==="B")){
            this.setState({contador: this.state.contador+1})
        }else if((botonclickeado==="A" & this.state.seleccionPrevia==="A") | (botonclickeado==="B" & this.state.seleccionPrevia==="B") |(botonclickeado==="B" & this.state.seleccionPrevia===null)){
            this.setState({contador: this.state.contador+2})
        }else if(botonclickeado==="B" & this.state.seleccionPrevia==="A")
            this.setState({contador: this.state.contador+3})
        else{
            alert("fin")
        }

        this.setState({
            seleccionPrevia: botonclickeado,
        })       
        
    }
    
    componentDidUpdate(){
        this.historial.push(this.state.seleccionPrevia)    

    }
    
    render(){
        return (
            <div className="layout">
                <h1 className="historia">
                {data[this.state.contador].historia}
                </h1>
                <Opciones opcionA={data[this.state.contador].opciones.a} opcionB={data[this.state.contador].opciones.b} handleClick={this.handleClick}/>
                <Recordatorio seleccionPrevia={this.state.seleccionPrevia} historial={this.historial}/>
            </div>

        )
    }
}

export default Layout;