import React, { useState } from 'react';
import '../assests/folder.css';

const Folder = ({ folderData , createInputHandler }) => {

    const [showChild, setShowChild] = useState(false);
    const [showInput, setShowInput] = useState({visible: false, isFolder: null});

    const clickHandler = (e, isFolder) => {
        e.stopPropagation();
        setShowChild(true);
        setShowInput({ visible: !showInput.visible, isFolder })
    };

    const handlerNewCreation = (e) => {
        if(e.keyCode === 13 && e.target.value){
            createInputHandler(folderData.id, e.target.value, showInput.isFolder);
            setShowInput({...showInput, visible: false});
        }
    };

    return (
        <div className='card-wrapper' >
            <div className='card' onClick={() => setShowChild((showChild) => showChild=!showChild)}>
                <div className='name-wrapper'> 
                    {folderData.isFolder ? <img src="folder-icon.png"/>: <img src="file-icon.png"/>}
                    <div className="name">{folderData.name}</div>
                </div>
                {folderData.isFolder ? 
                <div className='operation'>
                    <button onClick={(e) => clickHandler(e, true)}>Folder +</button>
                    <button onClick={(e) => clickHandler(e, false)}>File +</button>
                </div>
                : ''}
            </div>
            {showInput.visible ? 
            <div className='input-wrapper'>
                {showInput.isFolder ? <img src="folder-icon.png"/>: <img src="file-icon.png"/>}
                <input
                    type="text"
                    onKeyDown={handlerNewCreation}
                    autoFocus
                    onBlur={() => setShowInput({...showInput, visible: false})}/>
            </div>
            :''}
            <div className='child' >
                {folderData.child && showChild? 
                folderData.child.map(ob => {
                    return <Folder folderData={ob} createInputHandler={createInputHandler}></Folder>
                }): ''}
            </div>
        </div>
        
    );
};

export default Folder;