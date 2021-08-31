import React from "react"
import Bouton from "../../../components/boutons/bouton"

class Livre extends React.Component {

    render(){
        return(
            <>
                <td id={this.props.id}> {this.props.nom} </td>
                <td> {this.props.auteur} </td>
                <td> {this.props.pages} </td>
                <td>
                    <Bouton typeBtn="btn-danger" clic={this.props.modification}  >
                        Modifier
                    </Bouton>   
                </td>
                <td> 
                    <Bouton typeBtn="btn-warning" clic={this.props.suppression}  >
                        Supprimer
                    </Bouton>   
                </td>                
            </>
        )
    }
}

export default Livre