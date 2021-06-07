import React from 'react';

const ImageList =(props)=>{
  const images =  props.images.map((image)=>{
          let url = image.urls.regular
          return <div><img src={url} alt="Image not found"  width="300dp"/></div>   
    });
    return( <div>
         {images}      
    </div>);
}
export default ImageList;