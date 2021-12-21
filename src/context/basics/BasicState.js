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
    // eslint-disable-next-line
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
    // GLOBAL SETTINGS
    fabric.Object.prototype.set({
        borderColor: '#5c5470',
        cornerColor: '#DBD8E3',
        cornerSize: 8,
        cornerStyle: 'circle',
        transparentCorners: false,
        padding: 5,
        borderDashArray: [10, 5],
    })



    // CLIPPING
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
    
    // CHANGING CLIP TYPES 
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
    

    // ADD IMAGE FUNCTION
    const Addimage = file => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.addEventListener('load', () => {      
            fabric.Image.fromURL(reader.result, img => {
                img.scaleToWidth(200)
                img.scaleToHeight(200)
                img.set({
                    left: state.canvas && state.canvas.getCenter().left,
                    top: state.canvas && state.canvas.getCenter().top,
                    originX: 'center',
                    originY: 'center',
                    scaleX: 0.08, 
                    scaleY: 0.08
                })
                state.canvas && state.canvas.add(img)
                state.canvas && state.canvas.requestRenderAll()
            })
        })
    }
    
    // DOWNLOAD IMAGE FUNCTION
    const DownloadImage = () => {
        if(state.canvas){
            let pngURL = state.canvas.toDataURL({
                format: 'png',
                quality: 1
            })
            let a = document.createElement("a");
            a.href = pngURL
            a.download = 'untitled.png'
            a.click()
        }else {
            console.log('download error')
        }
    }

    return (
        <BasicContext.Provider value={{
            canvas: state.canvas,
            currentClip: state.currentClip,
            InitCanvas,
            HandleClip,
            Addimage,
            DownloadImage
        }}>
            {props.children}
        </BasicContext.Provider>
    )
}

export default BasicState