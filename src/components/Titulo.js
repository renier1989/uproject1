import React, { Component } from 'react';

const sytles = {
    titulo : {
        marginButtom : '30px',
    }
}

class Titulo extends Component {
    render() {
        return (
            <h1 style={sytles.titulo}>
               Tienda 
            </h1>
        );
    }
}

export default Titulo;
