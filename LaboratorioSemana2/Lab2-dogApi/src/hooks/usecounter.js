import { useState } from "react"

import React from 'react'

export const useCounter = (initialValue = 10) => {
    const [ counter, setCounter ] = useState( initialValue )

    const increment = ( value = 1 ) => {
        setCounter (counter + value);
    }

    const decrement = (value = 1) => {
        setCounter (counter - value);
    }

    const reset = () => {
        setCounter(initialValue)
    }

    return {
        increment,
        decrement,
        reset,
        counter
    }
}