import React, { useState } from 'react';

//funzione dove ho preparato la chiamata fetch
import { getPageContact } from '../../functions/pages';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        getPageContact().then(pgContact => this.setState({ pgContact }), console.log(this.pgContact));
    }

    render() {

        // uso dangerouslySetInnerHTML per settare il contenuto e dire a react 
        //che deve essere un contenuto dinamico. Non e' molto sicuro e erende il codice suscettibile 
        //ad attacchi XXS

        return (
            <div>
                <h1 className="mt-5 text-center">{this.state.pgContact.title}</h1>
                <p className="text-center mt-5" dangerouslySetInnerHTML={{ __html: this.state.pgContact.content }}></p>
            </div>
        );
    }
}