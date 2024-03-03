"use client";

import { Button, Flex, Text, Image } from "@chakra-ui/react";
import { useAppSelector } from "../../../../store/store";
import { useDropImage } from "../../../../utils/hooks/useDropImage";
import { PaperClip } from "../../../../images/icons/PaperClip";

export const UploadImage = () => {
  const { getRootProps, getInputProps, open, isDragActive } = useDropImage();

  const initialImage = useAppSelector((state) => state.promptSlice.promptImage);

  const handleSelectPhoto = () => {
    open();
  };

  if (initialImage) {
    return (
      <Flex
        direction={"column"}
        alignItems={"center"}
        textAlign={"center"}
        w={"100%"}
        bgColor={"rgba(255, 255, 255, 0.02)"}
        borderRadius={"32px"}
        border={"3px dashed rgba(255, 225, 121, 0.24)"}
        justify={"space-between"}
        flex={1}
      >
        <Image
          objectFit={"scale-down"}
          borderRadius={"32px"}
          w={"100%"}
          h={"100%"}
          src={initialImage}
        />
      </Flex>
    );
  }

  return (
    <>
      <Flex
        direction={"column"}
        alignItems={"center"}
        textAlign={"center"}
        w={"100%"}
        p={{ base: "55px 53px 40px", md: "56px 40px 40px 40px" }}
        {...getRootProps()}
        tabIndex={undefined}
        bgColor={"rgba(255, 255, 255, 0.02)"}
        borderRadius={"32px"}
        border={"3px dashed rgba(255, 225, 121, 0.24)"}
        justify={"space-between"}
        backgroundImage={initialImage}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"inherit"}
        flex={1}
      >
        <input {...getInputProps()} />
        <Flex
          direction={"column"}
          w={"100%"}
          gap={"8px"}
          justify={"center"}
          alignItems={"center"}
        >
          <PaperClip w={"56px"} h={"56px"} />

          <Text color={"#fff"} variant={"h3"}>
            Upload any photo
          </Text>
          <Text color={"#fff"} opacity={0.4} variant={"h3"}>
            .jpg .png
          </Text>
        </Flex>

        <Button
          variant="secondary"
          w={"100%"}
          maxW={"202px"}
          mt={{ base: "24px", md: "10px" }}
          onClick={handleSelectPhoto}
          justifySelf={"flex-end"}
        >
          Select Photo
        </Button>
      </Flex>
    </>
  );
};
