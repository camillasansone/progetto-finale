import React from "react";

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="bg-dark text-white text-center p-2 mt-2 " >
                <p>Progetto Finale Epicode School </p>
                <p>Creato con WordPress e React  </p>
                <p>Camilla Sansone di Camopbianco</p>
            </div>
        )
    }
}