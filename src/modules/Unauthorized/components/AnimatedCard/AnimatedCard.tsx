import { Flex, Divider, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

interface IFlowCardAnimatedImage {
  imagesData: any;
}

enum SliderDirection {
  left = 0,
  right = 100,
}

export const AnimatedCard = ({ imagesData }: IFlowCardAnimatedImage) => {
  const [sliderDirection, setSliderDirection] = useState(SliderDirection.right);
  const [leftImageIndex, setLeftImageIndex] = useState(0);
  const [rightImageIndex, setRightImageIndex] = useState(1);

  const calculateNextIndex = (currentIndex: number) =>
    (currentIndex + 2) % imagesData.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSliderDirection((prev) => {
        if (prev === SliderDirection.left) {
          setLeftImageIndex(calculateNextIndex);
          return SliderDirection.right;
        }

        setRightImageIndex(calculateNextIndex);
        return SliderDirection.left;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [imagesData]);

  return (
    <Flex
      width={{ base: "100%", lg: "550px" }}
      height={{ base: "390px", lg: "550px" }}
      justifyContent={"center"}
      alignItems={"center"}
      pos={"relative"}
    >
      <Flex
        w={"100%"}
        h={"100%"}
        // width={{ base: "350px", lg: "550px" }}
        // height={{ base: "390px", lg: "550px" }}

        direction={"column"}
        borderRadius={"20px"}
        overflow={"hidden"}
        pos={"relative"}
      >
        <Image
          w={"100%"}
          h={"100%"}
          zIndex={20}
          fit={"cover"}
          style={{
            clipPath: `inset(${100 - sliderDirection}% 0 0 0)`,
            transition: `clip-path 1s ease-in-out `,
          }}
          right={"10px"}
          borderRadius={"20px"}
          src={imagesData[leftImageIndex]?.imageUrl}
        />
        <Divider
          pos={"absolute"}
          top={"-3px"}
          zIndex={100}
          orientation={"horizontal"}
          w="10px"
          h="200%"
          bgColor={"#fff"}
          variant={"solid"}
          transform={"rotate(90deg)"}
          overflow={"hidden"}
          style={{
            top: `-${sliderDirection}%`,
            transition: `top 1s ease-in-out`,
          }}
        />
        <Image
          w={"100%"}
          h={"100%"}
          fit={"cover"}
          borderRadius={"20px"}
          top={0}
          left={0}
          pos={"absolute"}
          src={imagesData[rightImageIndex]?.imageUrl}
        />
      </Flex>
    </Flex>
  );
};
