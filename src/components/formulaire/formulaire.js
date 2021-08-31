import React from "react"
import classes from "./formulaire.module.css"

import Bouton from "../boutons/bouton"


class Formulaire extends React.Component{

    state = {
        titreSaisi : "",
        auteurSaisi : "", 
        pagesSaisi : ""
    }

    HandleValidationForm = (event) => {
        event.preventDefault()
        this.props.validation(this.state.titreSaisi, this.state.auteurSaisi, this.state.pagesSaisi)
        this.setState({
            titreSaisi : "",
            auteurSaisi : "", 
            pagesSaisi : ""
        })
    }

    render(){
        return(
            <>
                <h2 className={classes.monTitre}>Ajouter un livre</h2>
                <form>
                        <div className="form-group">
                            <label htmlFor="titre" className="form-label">Titre</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="titre" 
                                    value={this.state.titreSaisi}   
                                    // On raffraichi en allant chercher la valeur maj à jour dans le state *
                                    onChange={event => this.setState({titreSaisi:event.target.value})} 
                                    // On modifie cette valeur à chaque modification !  *
                                />

                        </div>
                        <div className="form-group">
                            <label htmlFor="auteur" className="form-label">Auteur</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                id="auteur" 
                                value={this.state.auteurSaisi}
                                onChange={event => this.setState({auteurSaisi:event.target.value})}
                                />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pages" className="form-label">Pages</label>
                            <input 
                            type="number" 
                            className="form-control" 
                            id="pages" 
                            value={this.state.pagesSaisi}
                            onChange={event => this.setState({pagesSaisi:event.target.value})}
                            />
                        </div>
                        <Bouton type="button" typeBtn="btn-primary" clic={this.HandleValidationForm}>Valider</Bouton>
                </form>
            </>
        )
    }
}

export default Formulaire