import { useState } from 'react';

const useFlip = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const togggleFlip = () => {
        setIsFlipped((prevIsFlipped) => !isFlipped);
    };

    return [isFlipped, togggleFlip];
};

export default useFlip;