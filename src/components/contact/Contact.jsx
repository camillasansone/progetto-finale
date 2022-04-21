import React, { useState } from 'react';
import { getPageContact } from '../../functions/pages';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageContact: []
        };
    }

    componentDidMount() {
        getPageContact().then(pageContact => this.setState({ pageContact }));
    }

    render() {
        console.log(this.state.pageContact)

        return (
            <div>
                <h1 className="mt-5 text-center">{this.state.pageContact.title}</h1>
                <p className="text-center mt-5" dangerouslySetInnerHTML={{ __html: this.state.pageContact.content }}></p>
            </div>
        );
    }
}