import {useState} from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {

    const [mensaje, setMensaje] = useState('')
    
    const handlePresupuesto = (e) => {
        e.preventDefault();
        if(!Number(presupuesto) || Number(presupuesto)) {
            setMensaje('No es un presupuesto válido')
        } else {
            console.log('Si es un presupuesto válido')
        }
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>
                <label>Definir presupuesto</label>
                <input 
                    className='nuevo-presupuesto' 
                    type="text" 
                    placeholder='Agrega tu presupuesto' 
                    value={presupuesto}
                    onChange={e => setPresupuesto(e.target.value)}
                />
            </div>
            <input type="submit" value="Agregar" />
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto