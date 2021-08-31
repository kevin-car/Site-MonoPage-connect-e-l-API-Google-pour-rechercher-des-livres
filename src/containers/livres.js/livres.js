import React from "react"
import Livre from "./livre/livre"
import Formulaire from "../../components/formulaire/formulaire"
import FormulaireModification from "../../components/formulaireModification/formulaireModification.js"
import Alerte from "../../components/alerte/alerte" 

class Livres extends React.Component {
    state = {
        livres : [
            {
                id : 1,
                nom : "l'algorithmie selon h2prog", 
                auteur : "Mathieu Gaston", 
                pages : 600
            },
            {
                id : 2,
                nom : "Alice au pays des merveilles",
                auteur : "Jean Pierre",
                pages : 500
            },
            {
                id : 7,
                nom : "Alice au pays des sorcières",
                auteur : "Jean paul",
                pages : 500
            },
        ],
            lastID : 7, // permet de créer un nouvel ID lors de l'ajout d'objet (pour l'incrémentation de nouveau ID)
            idAModifier : 0, // Permet de changer l'ID qui a recevra la modification
            codeMessage : null // Pour toutes les fonction CRUD, il recevra un code message et type pour l'affichage de composant alert
    }

    HandleModificationLivre = (id, nom, auteur, pages) => {

        const indexLivre = this.state.livres.findIndex(index => {
            return index.id === id
        })

        const newLivre = {
            id:id,
            nom:nom,
            auteur:auteur,
            pages:pages
        }

        const newListe = this.state.livres.slice()
        newListe[indexLivre] = newLivre

        this.setState({
            livres:newListe, 
            idAModifier:0 , 
            codeMessage : { message : "modification effectuée" , type : "btn-danger"} })
    }
    

    HandleAjoutLivre = (titre, auteur, pages) => {
        // créer le modele générique d'ajout
        const newLivre = {
            id : this.state.lastID + 1 ,
            nom : titre,
            auteur : auteur,
            pages : pages
        }
        // Importer la liste des states
        const copyofLivres = this.state.livres.slice()

        // Rajouter le nouvel élément dans le nouveau tableau
        copyofLivres.push(newLivre)
        console.log(titre, auteur, pages)

        // Renvoi la copie en modifiant les 2 données 
        this.setState(oldState => {
            return {
            livres:copyofLivres, 
            lastID : oldState.lastID + 1,
            codeMessage : { message : "ajout effectué" , type : "btn-success"} }
        })
        this.props.fermerAjoutLivre()
    }
 


    // LA FONCTION QUI PERMET DE MODIFIER LA VALEUR DE Myboolean (s'il est à vrai, le formulaire d'ajout est ouvert et inversement)
    HandleAffichageFormulaire = () => {
        this.setState((oldstate, props) => {
            /* ici, on rentre dans myBoolean et on lui inverse sa valeur ! */
            return{myBoolean: !oldstate.myBoolean}
        })
    }

    deleteBookHandle = (thisID) => {
        const numCaseLivre = this.state.livres.findIndex(livre => {
            return(
                livre.id === thisID
            )
        })

        // Fonction de suppression en fonction de l'index
        const copyLivres = this.state.livres.slice()
        copyLivres.splice(numCaseLivre, 1)

        // fonction de récupération de notre nouvel élément 
        this.setState({
            livres:copyLivres, 
            codeMessage : { message : "Suppression Effectuée" , type : "btn-warning"}        })
    }

    render(){
        return(
            <>
                {this.state.codeMessage !== null ? <Alerte type={this.state.codeMessage.type}>{this.state.codeMessage.message} </Alerte> : null}
                
                <table className="table table-active text-center">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">Titre</th>
                            <th scope="col">Auteur</th>
                            <th scope="col">Nombre de pages</th>
                            <th scope="col" colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.livres.map(livre => {

                            if(this.state.idAModifier !== livre.id){
                                return(

                                <tr key={livre.id}>
                                    <Livre                                                 
                                        nom = {livre.nom}
                                        auteur = {livre.auteur}
                                        pages = {livre.pages}
                                        id = {livre.id}
                                        suppression = {() => this.deleteBookHandle(livre.id)}
                                        modification = {() => this.setState({idAModifier:livre.id})}
                                    />
                                </tr>
                            )
                            }else {
                                return (
                                    <tr key={livre.id}>
                                        <FormulaireModification 
                                                id= {livre.id}
                                                nom = {livre.nom}
                                                auteur = {livre.auteur}
                                                pages = {livre.pages}
                                                validationModification = {this.HandleModificationLivre}
                                        />
                                    </tr>
                                )
                            } 
                    })
                    }
                    </tbody>
                </table>
                {this.props.myBoolean === true ? <Formulaire validation={this.HandleAjoutLivre} /> : null}
            </>
        )  
    }
}

export default Livres