import React, { Component } from 'react';

const styles = {
    bubbleAlert: {
        backgroundColor: '#d72700',
        color: 'white',
        padding : '5px 10px',
        borderRadius : '15px',
        fontSize : '0.9rem',
        width : '20px',
    }
}

class BubbleAlert extends Component {
    render() {
        return (
            <span style={styles.bubbleAlert}>
                7
            </span>
        );
    }
}

export default BubbleAlert;
