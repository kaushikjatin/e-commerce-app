import React from 'react';
import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.styles.scss'
const CollectionPreview=({title,items})=>{
    return(
        <div className='collection-preview'>
            <h1>{title}</h1>
            <div className='preview'>
                {
                    items.filter((item,ind)=> ind<4)
                    .map(({id,...other_props})=>(
                        <CollectionItem key={id} {...other_props}></CollectionItem>
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview;