import { Flex, Button, Text } from "@chakra-ui/react";
import { AiFillFire } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import sliderImg1 from "../../../images/sliderImage1.png";
import sliderImg2 from "../../../images/sliderImage2.png";
import { AnimatedCard } from "../AnimatedCard/AnimatedCard";
import { IWelcomeProps } from "../../types";

export const Welcome = ({ imagesData, handleWebAppButton }: IWelcomeProps) => {
  return (
    <Flex
      id={"welcome"}
      w={"100%"}
      maxW={"1440px"}
      h={"100%"}
      direction={{ base: "column", lg: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"107px"}
    >
      <Flex>
        <AnimatedCard imagesData={imagesData} />
      </Flex>
      <Flex
        direction={{ base: "row", lg: "column" }}
        w={"100%"}
        justifyContent={"space-between"}
        gap={"32px"}
        alignItems={"center"}
      >
        <Text
          display={{ base: "none", lg: "flex" }}
          color={"#fff"}
          variant={"h2"}
        >
          Undress any photo
        </Text>
        <Button
          w={{ base: "100%", lg: "397px" }}
          borderRadius={"30px"}
          border={"10px solid rgba(255, 255, 255, 0.07)"}
          bg={"#FFE179"}
          leftIcon={<FaTelegram size={30} />}
        >
          Telegram
        </Button>
        <Button
          w={{ base: "100%", lg: "397px" }}
          borderRadius={"30px"}
          border={"10px solid rgba(255, 255, 255, 0.07)"}
          bg={"#FFE179"}
          leftIcon={<AiFillFire size={30} />}
          onClick={handleWebAppButton}
        >
          Web App
        </Button>
      </Flex>
    </Flex>
  );
};
