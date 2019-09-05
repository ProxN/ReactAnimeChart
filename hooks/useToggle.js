import {useState} from 'react';

function useToggler(initalVal = false){
    const [state,setState] = useState(initalVal);

    const toggle = () =>{
        setState(!state)
    }
    return [state,toggle];
}

export default useToggler;