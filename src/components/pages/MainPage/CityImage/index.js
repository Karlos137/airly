import React, { useContext } from "react";

//styled components imports
import ImageWrapper from "./ImageWrapper";
import TextWrapper from "./TextWrapper";
import ImageTitle from "./ImageTitle";
import ImageText from "./ImageText";
import Image from "./Image";

//context imports
import { OptionContext } from "../../../../context/OptionContext";

const CityImage = props => {
  const [selectedOption] = useContext(OptionContext);

  return (
    <ImageWrapper>
      <Image src={props.src} />
      {selectedOption === null ? (
        <TextWrapper>
          <ImageTitle>Prague</ImageTitle>
          <ImageText>Czech Republic</ImageText>
        </TextWrapper>
      ) : (
        <TextWrapper>
          <ImageTitle>{selectedOption.city}</ImageTitle>
          <ImageText>{selectedOption.country}</ImageText>
        </TextWrapper>
      )}
    </ImageWrapper>
  );
};

export default CityImage;
