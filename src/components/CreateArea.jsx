import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props){

    const [isFullarea, setFullarea] = useState(false);

    const [note, setNote] = useState({title: "", content: ""});

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote =>{
            return {
                ...prevNote,
                [name]: value
            };
        })
    }

    function submitClick(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        });
        event.preventDefault();
    }

    function fullArea(){
        setFullarea(true);
    }

    return (
        <div>
            <form class="create-note">
                {isFullarea && <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>}
                <textarea 
                onClick ={fullArea} 
                onChange={handleChange} 
                name="content" 
                placeholder="Take a note..." 
                rows={isFullarea ? 3 :1} 
                value={note.content}>                    
                </textarea>
                <Zoom in={isFullarea}>
                <Fab onClick={submitClick}>
                <AddIcon />
                </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea;