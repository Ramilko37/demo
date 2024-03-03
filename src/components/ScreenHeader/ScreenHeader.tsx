import { Flex } from "@chakra-ui/react";
import { Logo } from "../../images/icons/Logo";

export const ScreenHeader = () => {
  return (
    <Flex w={"100%"} h={"52px"} p={"2px 4px 2px"} mb={"20px"}>
      <Logo w={"112px"} h={"44px"} />
    </Flex>
  );
};
