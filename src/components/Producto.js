import { Component } from "react";

class  Producto extends Component {
    render(){
        console.log(this.props);
        const {producto,agregarAlCarrito } = this.props;
        
        return(
            <div>
                <h3>{producto.name} </h3>
                <p>{producto.price}</p>
                <img src={producto.img} alt={producto.name} />
                <button onClick={agregarAlCarrito}>Agregar</button>
            </div>
        );
    }
}

export default Producto;