import React from 'react';


class Bouton extends React.Component {
    render(){
        const classCSS = ` btn ${this.props.typeBtn} `

        return(
            <button type="button" className={classCSS} onClick={this.props.clic} > {this.props.children} </button>
        )
    }
}

export default Bouton