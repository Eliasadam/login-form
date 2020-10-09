import React, { useState } from "react";
import Expand from "react-expand-animated";
import { CardWrapper, CardImg, CardTitle } from "../Styling";

const Card = ({ item }) => {
  const [opnen, setOpen ] = useState(false)
  return (
    <CardWrapper>
      <CardImg src={item.url} alt={item.title} />
      <CardTitle>{item.title}</CardTitle>
    </CardWrapper>
  );
};

export default Card;

