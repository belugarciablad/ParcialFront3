import React from "react";

export default class Recordatorio extends React.Component{
    historial =[]
    keyCreator = 0
    render(){
        return (
            <div className="recordatorio">
                <h3>Selección anterior: {this.props.seleccionPrevia}</h3>
                <h4>Historial de opciones elegidas: </h4>
                <ul>{this.props.historial.map(item => <li key={this.keyCreator++}>{item}</li>)}</ul>
            </div>
        )
    }
}