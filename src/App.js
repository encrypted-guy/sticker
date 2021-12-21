import React, {Fragment} from 'react';
import Canvas from './components/Canvas';
import Download from './components/Download';
import Selecttype from './components/SelectType';
import Uploadimage from './components/UploadImage';

import BasicState from './context/basics/BasicState';

const App = () => {
    return (
        <BasicState>
            <Fragment>
                <div className="canvas_site">
                    <Canvas />
                    <Download type={'mobile'} />
                </div>
                <div className='defaults'>
                    <Selecttype />
                    <Uploadimage />
                    <Download type={'desktop'} />
                </div>
            </Fragment>
        </BasicState>
    );
}

export default App;