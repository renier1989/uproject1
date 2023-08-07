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
        const {carro} = this.props;
        const cantidad = carro.reduce((acc,el) => acc + el.cantidad, 0);
        return (
            <div>
                <span style={styles.bubble}>
                    {cantidad !== 0 ? <BubbleAlert value={cantidad}/> : null}
                    
                </span>
                <button style={styles.carro}>Carrito</button>
            </div>
        );
    }
}

export default Carro;
