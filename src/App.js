import { Component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Titulo from './components/Titulo';
import Navbar from './components/Navbar';
class App extends Component {
  state = {
    productos : [
      {name : 'Tomate' , price: 3000, img : '/productos/tomate.jpg'},
      {name : 'Alberja' , price: 2000, img : '/productos/arbejas.jpg'},
      {name : 'Lechuga' , price: 400, img : '/productos/lechuga.jpg'},
    ],
    carro : [
      // {name : 'Lechuga' , price: 400, img : '/productos/lechuga.jpg', cantidad: 1}, // Ejemplos de la estructura del arreglo 
    ],
  }

  agregarAlCarrito = (producto) => {
    // console.log(producto);
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad : 1
      }) 
    });
  }

  render() {
    console.log(this.state.carro);
    return(
      <div>
        <Navbar />
        <Layout>
          <Titulo />
          <Productos 
          agregarAlCarrito={this.agregarAlCarrito} 
          productos={this.state.productos} 
          />
        </Layout>
      </div>
    );
  }
}

export default App;
