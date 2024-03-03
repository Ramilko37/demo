import { Input } from "@chakra-ui/react";
import React from "react";

export const PromptInput = () => {
  return (
    <Input
      fontFamily={"Inter"}
      fontSize={"17px"}
      fontWeight={500}
      lineHeight={"22px"}
      color={"#fff"}
      h={"55px"}
      border={"1px solid rgba(255, 255, 255, 0.12)"}
      style={{ borderRadius: "8px" }}
      bgColor={"rgba(255, 255, 255, 0.07);"}
      _placeholder={{ color: "rgba(255, 255, 255, 0.56)" }}
      placeholder="Write your prompt"
    />
  );
};
