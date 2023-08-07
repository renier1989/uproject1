import { Component } from "react";
import Producto from "./Producto";
class Productos extends Component {
  render() {
    const { productos, agregarAlCarrito } = this.props;
    return (
      <div>
        {productos.map((producto, index) => (
          <Producto 
          key={index}
          producto={producto}
          agregarAlCarrito={agregarAlCarrito} 
          />
        ))}
      </div>
    );
  }
}

export default Productos;
