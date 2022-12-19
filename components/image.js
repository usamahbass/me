import { useState } from "react";
import { Skeleton, Box } from "@chakra-ui/react";
import NextImage from "next/image";

const Image = (props) => {
  const {
    src,
    alt,
    width,
    height,
    fallbackSrc,
    bgGradient,
    priority,
    quality,
    borderRadius,
    styles,
    ...rest
  } = props;
  const [isError, setIsError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = (result) => {
    if (result.naturalWidth === 0) setIsError(true);
    else setIsLoaded(true);
  };

  const handleError = () => setIsError(true);

  return (
    <Box
      width={width}
      height={height}
      position="relative"
      overflow="hidden"
      borderRadius={borderRadius}
      {...rest}
    >
      <Skeleton
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        isLoaded={isLoaded}
      >
        <NextImage
          src={isError ? fallbackSrc : src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          onLoadingComplete={handleLoad}
          onError={handleError}
          priority={priority}
          quality={quality}
          style={{ borderRadius, ...styles }}
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bgGradient={bgGradient}
        />
      </Skeleton>
    </Box>
  );
};

export default Image;
