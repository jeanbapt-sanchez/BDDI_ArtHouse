import React from 'react'
import { useHistory } from 'react-router'

const Interieur = (props) => {
    let history = useHistory()

    return (
        <div>
            <h1 className="text-big text-bold">Choisi l'oeuvre que tu veux analyser</h1>
            <button onClick={() => {history.push('/sceneLivre')}}>Commencer la désobeisance visuelle</button>

        </div>
    )
}

export default Interieur;