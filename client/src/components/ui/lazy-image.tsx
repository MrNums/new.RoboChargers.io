import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  effect?: 'blur' | 'opacity' | 'black-and-white';
  placeholderSrc?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  effect = 'blur',
  placeholderSrc,
}) => {
  return (
    <LazyLoadImage
      alt={alt}
      src={src}
      effect={effect}
      className={className}
      width={width}
      height={height}
      placeholderSrc={placeholderSrc}
      wrapperClassName="lazy-load-image-wrapper"
    />
  );
};