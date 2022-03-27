import React from "react";

import { Title } from "./styles";

interface ITitleProps {
  title: string;
}

export function SubTitle({ title }: ITitleProps) {
  return (
    <Title>
      {title}
    </Title>
  );
}
