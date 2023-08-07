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
    ]
  }
  render() {
    return(
      <div>
        <Navbar />
        <Layout>
          <Titulo />
          <Productos 
          agregarAlCarrito={()=>console.log('agregue algo ')} 
          productos={this.state.productos} 
          />
        </Layout>
      </div>
    );
  }
}

export default App;
