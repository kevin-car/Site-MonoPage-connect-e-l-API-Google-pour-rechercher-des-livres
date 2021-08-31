import React from "react"

class Alerte extends React.Component {
    render(){
        const classCSS = ` alert ${this.props.type}`
        return(
            <>
                <div class={classCSS} role="alert">
                    {this.props.children}
                </div>
            </>
        )
    }
}

export default Alerte