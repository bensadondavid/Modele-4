import { useContext } from 'react'
import { Context } from '../Context'
import Form from '../Components/Form'

function Response(){

    const { language } = useContext(Context)

    return(
            <>
                <div className="response-title">
                    <h1>Réponse</h1>
                    <img src="logo-y-l.png" className='logo-petit'/>
                </div>
                <Form />
            </>
    )
}

export default Response