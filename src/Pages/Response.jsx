import { useContext } from 'react'
import { Context } from '../Context'
import Form from '../Components/Form'

function Response(){

    const { language } = useContext(Context)

    return(
            <div className="response-card">
                <h1 className="response-title">LA RÉPONSE</h1>
                <p className='reponse-souhaite'>Réponse souhaitée dès réception</p>
                <Form />
            </div>
    )
}

export default Response