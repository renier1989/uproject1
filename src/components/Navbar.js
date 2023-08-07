import React, { Component } from 'react';
import Logo from './Logo';
import Carro from './Carro';

const styles = {
    navbar :{
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        height: '100px',
        justifyContent : 'space-between',
        padding:'0 50px',
        position: 'relative',
        boxShadow : '0 3px 5px rgba(0, 0, 0, 0.1)',
    }
}

class Navbar extends Component {
    render() {
        return (
            <nav style={styles.navbar}>
                <Logo />
                <Carro />
            </nav>
        );
    }
}

export default Navbar;
