import React, {useContext, useRef, useLayoutEffect} from 'react';

import BasicContext from '../context/basics/BasicContext';

const Canvas = () => {
    const {InitCanvas} = useContext(BasicContext) 
    
    
    const canvasEl = useRef(null)
    useLayoutEffect(() => {
        InitCanvas(canvasEl.current)
    }, [])


    return (
        <canvas ref={canvasEl}></canvas>
    );
}

export default Canvas;
