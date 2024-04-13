import Input from "../InputFields/Input";
import { useState } from 'react';
import './post.css';
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postSlice";


const MakePost = (props) => {
    const { setOpen } = props;
    const dispatch = useDispatch();

    const [title, setTitle] = useState('Add a title');
    const [desc, setDesc] = useState('Add some descriptions');
    const tags = [
        'None',
        'NSFW',
        'Mood',
        'Quotes',
        'Shitpost',
    ];
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handlePost = () => {
        setOpen(false);
        const newPost = {
            title: title,
            description: desc,
            tag: selectedIndex,
        };
        dispatch(createPost(newPost));
    }

    return ( 
        <section className="makepost-container">
            <div className="makepost-navigation">
                <p className="makepost-save" onClick={handlePost}>
                    Post
                </p>
            </div>
            <Input 
                label="Title" 
                data={title} 
                setData={setTitle} 
                inputType="textarea"
                classStyle="makepost-title"
            />
            <Input 
                label="Descriptions" 
                data={desc} 
                setData={setDesc} 
                inputType="textarea"
                classStyle="makepost-desc"
            />
            <label htmlFor=""> Tags </label>
            <div className="makepost-tags">
                {tags.map((tag, index) => {
                    return (
                        <button 
                            key={index} 
                            className={`${selectedIndex === index ? `makepost-tags-selected` : `makepost-tags-${tag}`}`}
                            onClick={() => setSelectedIndex(index)}
                        > 
                            { tag } 
                        </button>
                    )
                })}
            </div>
        </section>
     );
}
 
export default MakePost;