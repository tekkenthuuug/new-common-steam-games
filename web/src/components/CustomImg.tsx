import React, { useRef } from 'react';
import { Image, ImageProps } from '@chakra-ui/core';

interface Props {}

const CustomImg: React.FC<Props & ImageProps> = ({ onError, ...props }) => {
  const imgRef = useRef<null | HTMLImageElement>(null);

  const handleError = () => {
    if (onError) onError();

    if (imgRef.current) {
      imgRef.current.src = 'img/image-placeholder-300px-200px.jpg';
    }
  };

  return <Image {...props} onError={handleError} ref={imgRef} />;
};

export default CustomImg;
