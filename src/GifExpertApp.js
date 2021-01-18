import {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['Hunter x hunter']);
    /* const handleAdd = ()=>{
        setCategories([...categories,'Sakura    '])
    } */
    return(
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategories={setCategories}/>
            <ol>
                {
                    categories.map(category =>{
                        return <GifGrid 
                        key={category}
                        category={category}
                        />   
                    })
                }
            </ol>
        </>
    );
}