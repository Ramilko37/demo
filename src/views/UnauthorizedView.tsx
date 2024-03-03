import { Flex } from "@chakra-ui/react";
import { Unauthorized } from "../modules/Unauthorized/ui";

export const UnauthorizedView = () => {
  return (
    <Flex
      w={"100%"}
      h={"100%"}
      direction={{ base: "column", lg: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Unauthorized />
    </Flex>
  );
};
