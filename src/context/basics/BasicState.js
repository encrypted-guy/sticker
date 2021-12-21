import React, {useReducer,useCallback} from 'react'
import {fabric} from 'fabric'
import {bedge,seahorse,hoursehead,fullhorse,turtle,Trangle} from './Shapes'

import BasicReducer from './BasicReducer'
import BasicContext from './BasicContext'

const BasicState = props => {
    const InitState = {
        canvas: null,
        currentClip: 123
    }
    const [state, dispatch] = useReducer(BasicReducer, InitState)

    

    // ==================================
    const InitCanvas = useCallback(element => {
        let canvas = new  fabric.Canvas(element, {
            height: window.innerWidth < 523 ? 320 : window.innerWidth < 400 ? 300 : 400,
            width: window.innerWidth < 523 ? 320 : window.innerWidth < 400 ? 300 : 400,
            backgroundColor: 'white',
            controlsAboveOverlay: true
        })
        canvas.renderAll()
        dispatch({
            type: 'INIT_CANVAS',
            payload: canvas
        })
    })



    // UPDATE CANVAS ON WIDTH

    // state.canvas && state.canvas.setHeight(400)
    // state.canvas && state.canvas.setWidth(400)
    // state.canvas && state.canvas.renderAll();

    // useEffect(() => {
    //     window.addEventListener('resize', () => {
            
    //         console.log('resize')
    //         if(window.innerWidth < 523){
    //             console.log('523')
    //             state.canvas && state.canvas.setHeight(320)
    //             state.canvas && state.canvas.setWidth(320)
    //             state.canvas && state.canvas.renderAll();
    //         }else if (window.innerWidth < 400) {
    //             console.log('400')
    //             state.canvas && state.canvas.setHeight(300)
    //             state.canvas && state.canvas.setWidth(300)
    //             state.canvas && state.canvas.renderAll();
    //         }else {
    //             console.log('normal')
    //             state.canvas && state.canvas.setHeight(400)
    //             state.canvas && state.canvas.setWidth(400)
    //             state.canvas && state.canvas.renderAll();
    //         }
    //     });
    // }, [window.innerWidth]);


    // CLIPPING

    // var clipPath = new fabric.Path("M161.469,0.007 C161.469,0.007 214.694,96.481 214.694,96.481 C214.694,96.481 322.948,117.266 322.948,117.266 C322.948,117.266 247.591,197.675 247.591,197.675 C247.591,197.675 261.269,306.993 261.269,306.993 C261.269,306.993 161.469,260.209 161.469,260.209 C161.469,260.209 61.667,306.993 61.667,306.993 C61.667,306.993 75.346,197.675 75.346,197.675 C75.346,197.675 -0.010,117.266 -0.010,117.266 C-0.010,117.266 108.242,96.481 108.242,96.481 C108.242,96.481 161.469,0.007 161.469,0.007");
    
    // clipPath.set({
    //     angle: 180,
    //     // width: 50,
    //     // height: 50,
    //     // left: 100,
    //     // top: 100,
    //     left: state.canvas && state.canvas.getCenter().left,
    //     top: state.canvas && state.canvas.getCenter().top,
    //     originX: 'center',
    //     originY: 'center',
    //     scaleX: 0.015, 
    //     scaleY: 0.015,
    //     // strokeWidth: 2,
    //     // stroke: "#880E4F",
    // })

    
    const setclip = (clipPath) => {
        if(state.canvas){
            clipPath.set({
                angle: 180,
                left: state.canvas && state.canvas.getCenter().left,
                top: state.canvas && state.canvas.getCenter().top,
                originX: 'center',
                originY: 'center',
                scaleX: 0.015, 
                scaleY: 0.015
            })
            state.canvas.clipPath = clipPath;
            state.canvas.renderAll()
        }
    }
    // setclip(bedge)
    
    
    const HandleClip = id => {
        console.log(id)
        dispatch({
            type: 'HANDLE_CLIP',
            payload: id
        })
    }


    if(state.currentClip === 123){
        setclip(bedge)
    }
    if(state.currentClip === 124){
        setclip(Trangle)
    }
    if(state.currentClip === 125){
        setclip(fullhorse)
    }
    if(state.currentClip === 126){
        setclip(hoursehead)
    }
    if(state.currentClip === 127){
        setclip(seahorse)
    }
    if(state.currentClip === 128){
        setclip(turtle)
    }
    

    // HandleClip(123)
    
    
    
    // state.canvas && state.canvas.add(new fabric.Rect({
    //     height: 150,
    //     width: 150,
    //     left: 5,
    //     top: 5,
    //     fill: 'red'
    // }))
    
    
    
    
    return (
        <BasicContext.Provider value={{
            canvas: state.canvas,
            currentClip: state.currentClip,
            InitCanvas,
            HandleClip
        }}>
            {props.children}
        </BasicContext.Provider>
    )
}

export default BasicState