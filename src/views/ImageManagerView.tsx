import { Flex } from "@chakra-ui/react";
import React from "react";
import { UploadImage } from "../modules/ImageManager/components/UploadImage/UploadImage";
import { ImageManager } from "../modules/ImageManager/ui";

export const ImageManagerView = () => {
  return (
    <Flex
      w={"100%"}
      h={"100%"}
      direction={{ base: "column", lg: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <ImageManager />
    </Flex>
  );
};
