import { Component } from "react"

const styles = {
    button : {
        backgroundColor: '#576',
        padding : '15px 20px',
        border : 'none',
        borderRadius : '5px',
        cursor: 'pointer',
        color: 'white',
    }
}
 
class Button extends Component {
    render() {
        // console.log(this.props);
        return (
            <button style={styles.button} {...this.props} />
        )
    }
}

export default Button