import React, { Component } from 'react';
import BubbleAlert from './BubbleAlert';

const styles = {
    carro:{
        backgroundColor: '#576',
        padding : '15px 20px',
        border : 'none',
        borderRadius : '5px',
        cursor: 'pointer',
        color: 'white',
    },
    bubble: {
        position : 'relative',
        left: 15,
        top: 20,
    }
}

class Carro extends Component {
    render() {
        return (
            <div>
                <span style={styles.bubble}>
                    <BubbleAlert value={100}/>
                </span>
                <button style={styles.carro}>Carrito</button>
            </div>
        );
    }
}

export default Carro;
