import React from 'react';

//funzione dove ho preparato la chiamata fetch
import { getPageAboutUs } from '../../functions/pages';

export default class AboutUs extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        getPageAboutUs().then(pgAboutUs => this.setState({ pgAboutUs }));
    }

    render() {

        // uso dangerouslySetInnerHTML per settare il contenuto e dire 
        //a react che deve essere un contenuto dinamico. Non e' molto sicuro e erende il codice suscettibile 
        //ad attacchi XXS

        return (
            <div >
                <h1 className="mt-5 text-center">{this.state.pgAboutUs.title}</h1>
                <p dangerouslySetInnerHTML={{ __html: this.state.pgAboutUs.content }}></p>
            </div>
        );
    }
}