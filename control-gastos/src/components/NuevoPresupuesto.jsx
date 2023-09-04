import React from 'react'

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario'>
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
        </form>
    </div>
  )
}

export default NuevoPresupuesto