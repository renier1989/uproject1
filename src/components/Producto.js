import { Component } from "react";
import Button from "./Button";

const styles ={
    producto :{
        border: 'solid 1px #aaa',
        boxShadow : '0 5px 5px rgba(0, 0, 0, 0.1)',
        width : '30%',
        padding : '10px 15px',
        borderRadius : '5px'
    },
    img :{
        width : '100%',
    }
}
class  Producto extends Component {
    render(){
        // console.log(this.props);
        const {producto,agregarAlCarrito } = this.props;
        
        return(
            <div style={styles.producto}>
                <img style={styles.img} src={producto.img} alt={producto.name} />
                <h3>{producto.name} </h3>
                <p>{producto.price}</p>
                <Button onClick={()=>agregarAlCarrito(producto)}>
                    Agregar al Carrito
                </Button>
                {/* <button onClick={agregarAlCarrito}>Agregar</button> */}
            </div>
        );
    }
}

export default Producto;