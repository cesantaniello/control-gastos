import {useState, useEffect} from 'react'

const BotonReset = () => {
  return (
    <button
        className="reset-app"
        type="button"
        onClick={handleResetApp}
    >
        Resetear App
    </button>
  )
}

export default BotonReset