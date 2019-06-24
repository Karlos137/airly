import React from "react";

//styled components
import ImageWrapper from "./ImageWrapper";
import TextWrapper from "./TextWrapper";
import ImageTitle from "./ImageTitle";
import ImageText from "./ImageText";
import Image from "./Image";

const CityImage = props => {
  return (
    <ImageWrapper>
      <Image src={props.src} />
      <TextWrapper>
        <ImageTitle>Prague</ImageTitle>
        <ImageText>Czech Republic</ImageText>
      </TextWrapper>
    </ImageWrapper>
  );
};

export default CityImage;
