import React, { useRef } from 'react';

interface Props {

}

const CustomImg: React.FC<Props & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>> = ({onError, ...props}) => {
  const imgRef = useRef<null | HTMLImageElement>(null);
  
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (onError) onError(e);

    if (imgRef.current) {
      imgRef.current.src = 'img/image-placeholder-300px-200px.jpg' 
    }
  }

  return (
      <img {...props} onError={handleError} ref={imgRef}/>
    )
}

export default CustomImg;