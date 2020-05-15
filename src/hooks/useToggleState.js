import { useState } from 'react';

function useToggleState() {
    const [isToggledTrue, toggleState] = useState(false);
    function toggle() {
        toggleState(!isToggledTrue);
    }
    return [isToggledTrue, toggle];
}

export default useToggleState;