import { useState } from 'react';

function useInputState(initialState = "") {
    const [inputState, changeInputState] = useState(initialState);
    function handleInputChange(e) {
        changeInputState(e.target.value);
    }
    return [inputState, handleInputChange];
}

export default useInputState;