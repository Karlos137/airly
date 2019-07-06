import React, { useState, createContext } from "react";

export const ImageContext = createContext();

export const ImageProvider = props => {
  const [image, setImage] = useState(null);

  return (
    <ImageContext.Provider value={[image, setImage]}>
      {props.children}
    </ImageContext.Provider>
  );
};
