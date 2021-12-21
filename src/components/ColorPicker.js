import React, {useState} from 'react';
import {SliderPicker, GithubPicker} from 'react-color'

const Colorpicker = () => {
    const [theColor, SelectColor] = useState('#FFFFFF')

    const colors = ['#FFFFFF', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB']

    return (
        <div className='color_picker_box'>
            {
                colors.map(color => {
                    console.log(color)
                    
                    return (
                        <button style={{backgroundColor: `${color}`}} ></button>  
                        )
                    })
                }
               
        </div>
    );
}

export default Colorpicker;
