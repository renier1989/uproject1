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
    esCarroVisible: false,
  }

  agregarAlCarrito = (producto) => {
    // console.log(producto);
    const { carro } = this.state;
    if(carro.find(pro => pro.name === producto.name)){
      // creo un nuevo carro con los datos de la cantidad modificados.
      const newCar = carro.map(x => x.name === producto.name ? ({
        ...x ,
        cantidad : x.cantidad + 1,
      })
      :
      x
      )
      return this.setState({carro: newCar});
    }
    // esto lo hago si es que no hay valores similares a un producto , añado el primer producto
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad : 1
      }) 
    });
  }

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return;
    }
    this.setState({esCarroVisible : !this.state.esCarroVisible});
  }

  render() {
    // console.log(this.state.carro);
    const { esCarroVisible} = this.state;
    return(
      <div>
        <Navbar 
        carro={this.state.carro}
        esCarroVisible={esCarroVisible}
        mostrarCarro={this.mostrarCarro}
         />
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
