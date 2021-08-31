import React from "react"
import Bouton from "../boutons/bouton"

class FormulaireModification extends React.Component {

    state = {
        livres : {
                nom : "",
                auteur : "", 
                pages : ""
            }
        }

        componentDidMount = () => {
            this.setState ({
                nom:this.props.nom, 
                auteur:this.props.auteur,
                pages:this.props.pages
            })
        }

        HandleValidation = () => {
            this.props.validationModification(this.props.id, this.state.nom, this.state.auteur, this.state.pages)
        }
        
        
    render(){

        return(
            <>
                <td><input className='form-control' type="text" value={this.state.nom} onChange={(event) => this.setState({nom:event.target.value})}></input></td> 
                <td><input className='form-control' type="text" value={this.state.auteur} onChange={(event) => this.setState({auteur:event.target.value})}></input></td> 
                <td><input className='form-control' type="text" value={this.state.pages} onChange={(event) => this.setState({pages:event.target.value})}></input></td> 
                <td>
                    <Bouton  typeBtn="btn-danger" clic={ this.HandleValidation } >
                        Valider Modification
                    </Bouton>   
                </td>
             </>     
        )
    }
}

export default FormulaireModification