import React from 'react'
import {bancos} from './clases/bancos.js'

const holaMundoFlecha = (nombre:string):string => {
    return `Hola mundo ${nombre}`;
}

const Bancos = () => {
  return (
    <div>
        <h1>Hola mundo</h1>
        <h1>{holaMundoFlecha('Santiago')}</h1>
      <h1>Listado de Bancos</h1>
      <ul>
            {bancos.map((a) => (
            <li key = {a.id}>
            {a.id} - {a.name}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Bancos
