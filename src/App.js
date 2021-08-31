import React from 'react';


import TitrePrincipal from './components/titrePrincipal/titrePrincipal.js';
import Livres from './containers/livres.js/livres.js';
import Bouton from './components/boutons/bouton.js';

class App extends React.Component {

    state = {
            myBoolean : false
    }   


    HandleAjouterLivre = ()=>{
        this.setState((oldState, props) => {
            return {myBoolean: !oldState.myBoolean}   
        })
    }

    render(){

        return(
            <div className='container'>
                    <TitrePrincipal>Les Livres</TitrePrincipal>
                    <Livres myBoolean={this.state.myBoolean} fermerAjoutLivre={ () => this.setState({myBoolean:false})}/>
                    <Bouton
                        typeBtn="btn-dark"
                        css="w-120"
                        clic={this.HandleAjouterLivre}
                    >
                        {this.state.myBoolean === false ? "ajouter un nouveau livre" : "fermer le formulaire d'ajout"}
                    </Bouton>

            </div>
        )
    }
}

export default App