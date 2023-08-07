import React, { Component } from 'react';

const styles = {
    detalleCarro :{
        backgroundColor : 'white',
        position: 'absolute',
        marginTop: '30px',
        boxShadow : '1px 5px 5px rgba(0, 0, 0, 0.3)',
        borderRadius: '5px',
        right : 50,
        width : '300px',
    },
    ul:{
        padding:0,
        margin: 0,
    },
    producto:{
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'center',
        padding : '25px 20px',
        borderBottom: '1px solid #aaa',
    }
}

class DetalleCarro extends Component {
    render() {
        const {carro} = this.props; 
        return (
            <div style={styles.detalleCarro}>
                <ul style={styles.ul}>
                    {carro.map((x,i) => 
                        <li style={styles.producto} key={i}> 
                        <img src={x.img} alt={x.name} width='50' height='32' />
                        {x.name} 
                        <span> {x.cantidad} </span>
                    </li> )}
                </ul>
            </div>
        );
    }
}

export default DetalleCarro;
