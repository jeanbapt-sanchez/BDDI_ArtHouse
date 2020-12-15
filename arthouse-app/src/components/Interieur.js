import React, { useEffect } from 'react'

const Interieur = (props) => {
    console.log(props)
    const handleChange = (e) => {
        props.onEndPage('COUCOU LA STREET')
    }

    useEffect(() => {
        handleChange()
    }, [])
    return (
        <div>
            <h1>Choisi l'oeuvre que tu veux analyser</h1>
                <nav>
                    <ul>
                        <li>
                            <p>Ptn prend visuel desobediance</p>
                        </li>
                    </ul>
                </nav>

        </div>
    )
}

export default Interieur;