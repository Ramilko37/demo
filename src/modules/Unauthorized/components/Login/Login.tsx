import { Flex, Button, Text } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import { ILoginProps } from "../../types";

export const Login = ({ handleLogin }: ILoginProps) => {
  return (
    <Flex
      direction={"column"}
      justifyContent={{ base: "space-between", lg: "center" }}
      w={{ base: "100%", lg: "fit-content" }}
      margin={{ base: "0", lg: "0 auto" }}
      h={"100%"}
      p={"35px 0 35px"}
      gap={{ base: undefined, lg: "56px" }}
    >
      <Text textAlign={"center"} color={"#fff"} variant={"h2"}>
        Please{" "}
        <Text variant={"h2"} color={"Yellow"} as={"span"}>
          Log in
        </Text>
        <br /> to continue
      </Text>
      <Button onClick={handleLogin} variant={"primary"} leftIcon={<FaGoogle />}>
        <Text variant={"p_info"}>Google</Text>
      </Button>
    </Flex>
  );
};
