import React, {useContext} from 'react';
import BasicContext from '../context/basics/BasicContext';

const Uploadimage = () => {
    const {Addimage} = useContext(BasicContext)
    return (
        <div className="upload_image">
            <input onChange={e => Addimage(e.target.files[0]) } type="file" accept="image/*" id="newimg" alt="" />

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
            <p>upload Image</p>
        </div>
    );
}

export default Uploadimage;
