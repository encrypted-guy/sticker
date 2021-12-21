import React, {useState, useEffect, useContext} from 'react';
import SvgList from '../svgs/Svg'

import BasicContext from '../context/basics/BasicContext';

const Selecttype = () => {
    const {HandleClip, currentClip} = useContext(BasicContext)

    const [show, Setshow] = useState(false)

    useEffect(() => {
        window.onclick = () => {
            if(show){
                Setshow(false)
            }
        }

    })

    const currentSet = SvgList.filter(each => each.id === currentClip)
    return (
        <div className="dropdown">
            <button onClick={() => Setshow(show ? false : true)} className="dropbtn">
                <img src={currentSet[0].svg} alt="" />
                <p>{currentSet[0].name}</p>
            </button>


            <div id="myDropdown" className={`dropdown-content ${show ? 'show' : ''}`}>
                
                {
                    SvgList.map(each => {
                        return (
                            <button onClick={() => HandleClip(each.id)} key={each.id}>
                                <img src={each.svg} alt=""/>
                                <p>{each.name} </p>
                            </button>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Selecttype;
