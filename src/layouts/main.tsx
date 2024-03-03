import { Flex } from "@chakra-ui/react";
import React from "react";
import { ScreenHeader } from "../components/ScreenHeader/ScreenHeader";

export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      direction={"column"}
      bg={"#141414"}
      w={"100vw"}
      h={"100dvh"}
      alignContent={"center"}
      p={{ base: "0 24px 0", lg: "24px 96px 24px" }}
    >
      <ScreenHeader />
      {children}
    </Flex>
  );
};
