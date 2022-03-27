import React from "react";

import { Title } from "./styles";
import { ITitleProps } from "../../interfaces";

export function SubTitle({ title }: ITitleProps) {
  return (
    <Title>
      {title}
    </Title>
  );
}
