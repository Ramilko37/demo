import { Button, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { UploadImage } from "../components/UploadImage/UploadImage";
import { PromptInput } from "../components/PromptInput/PromptInput";
import { Settings } from "../../../images/icons/Settings";
import { AiFillFire } from "react-icons/ai";

export const ImageManager = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return isMobile ? (
    <Flex
      direction={"column"}
      w={"100%"}
      h={"calc(100dvh - 68px)"}
      gap={"16px"}
    >
      <UploadImage />
      <Flex w={"100%"} gap={"10px"}>
        <PromptInput />
        <Flex
          w={"65px"}
          h={"55px"}
          justify={"center"}
          alignItems={"center"}
          style={{ borderRadius: "8px" }}
          border={"1px solid rgba(255, 255, 255, 0.12)"}
          bg={"rgba(255, 255, 255, 0.07)"}
        >
          <Settings w={"30px"} h={"30px"} />
        </Flex>
      </Flex>
      <Button
        m={"32px 0 32px"}
        style={{ outline: "10px solid rgba(255, 255, 255, 0.07)" }}
        variant={"primary"}
        leftIcon={<AiFillFire size={30} />}
      >
        <Text variant={"p_info"}>Undress</Text>
      </Button>
    </Flex>
  ) : (
    <></>
  );
};
