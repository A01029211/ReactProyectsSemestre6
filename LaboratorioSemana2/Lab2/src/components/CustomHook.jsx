import { Loading } from "./loading.jsx"
import {Card} from "./card.jsx"
import { useFetch } from "../useFetch.js"
import { useCounter } from "../useCounter.js"

export const CustomHook = () => {

    const { counter, decrement, increment } = useCounter(1);
    const {data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
  return (
    <div>
      <>
        <h1>Información de Pokemon</h1>
        <hr/>
        <h2>{data?.name}</h2>
        {isLoading ? <Loading/>
                : (<Card id={counter} name={data.name} sprites={ [
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
        ] } />)}
        <button className='btn btn-danger' onClick= { ()=>decrement() } >Anterior</button>
        <button className='btn btn-primary' onClick= { ()=>increment() } >Siguiente</button>
        </>
    </div>
  )
}

export default CustomHook
