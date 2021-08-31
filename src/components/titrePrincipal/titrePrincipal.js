import React from 'react';
import classes from "./titrePrincipal.module.css"

class TitrePrincipal extends React.Component {

    render(){
        const mesclasses = `bordere border-dark p-2 mt-2 text-white text-center bg-primary rounded ${classes.titrePrincipal}`

        return(
            <h1 className={mesclasses}>{this.props.children}</h1>
        )
    }
}
export default TitrePrincipal