import { Loading } from "./loading"
import {Card} from "./card"
import { useFetch } from "../hooks/useFetch"
import { useCounter } from "../hooks/usecounter"

export const CustomHook = () => {

   const { data, hasError, isLoading, refetch } = useFetch("https://dog.ceo/api/breeds/image/random");
  return (
    <div>
      <>
        <h1>Imagen de perrito :) </h1>
        <hr/>
        <h2>{data?.name}</h2>
        {isLoading ? (
          <Loading />
        ) : (
          <Card imageUrl={data?.message} />
        )}
        <button className='btn btn-primary' onClick= { ()=>refetch() } >nuevo perrito</button>
        </>
    </div>
  )
}

export default CustomHook
