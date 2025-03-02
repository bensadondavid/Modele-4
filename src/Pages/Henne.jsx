import { useContext } from 'react'
import { Context } from '../Context'
import Waze from '../Buttons/Waze'
import SaveTheDate from '../Buttons/SaveTheDate'

function Henne(){

    const { language } = useContext(Context)

    return(
            <div className="card">
                <h1 className='title'>Henné</h1>
                <img src="logo-y-l.png" className='logo-petit'/>
                <div className="noms">
                    <h1 className='nom-1'>Yael</h1>
                    <h1 className='and'>&</h1>
                    <h1 className='nom-2'>Levy</h1>
                </div>
                <p className='text'>Ont la joie de vous convier au henné</p>
                <p className='date'>le Dimanche 3 juin 2024 <br /> A 20h00 </p>
                <p className='endroit'>A la salle de fetes ORION <br /> Saint brice sous foret, 95350 </p>
                <Waze name={'waze'} lat={48.8525} long={2.3372} iconWidth='18px' iconHeight='25px' iconColor='#183C28' />
                <SaveTheDate name={'save-the-date'} date={[2024, 6, 3, 12, 0]} iconColor='#183C28' iconHeight='18px' iconWidth='21px'/>
            </div>
    )
}

export default Henne