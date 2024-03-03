import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

export const Settings = ({ ...props }: IconProps) => {
  return (
    <Icon w={props.w} h={props.h} viewBox="0 0 30 30" fill="none">
      <path
        d="M2 9.75H15.7502M27.0005 9.75H23.2504"
        stroke="url(#paint0_linear_450_3538)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.0005 19.75H13.2502M2 19.75H5.75007"
        stroke="url(#paint1_linear_450_3538)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.5001 13.5001C21.5712 13.5001 23.2501 11.8212 23.2501 9.75007C23.2501 7.67896 21.5712 6 19.5001 6C17.429 6 15.75 7.67896 15.75 9.75007C15.75 11.8212 17.429 13.5001 19.5001 13.5001Z"
        stroke="url(#paint2_linear_450_3538)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.49993 23.5001C7.42883 23.5001 5.74986 21.8212 5.74986 19.7501C5.74986 17.679 7.42883 16 9.49993 16C11.571 16 13.25 17.679 13.25 19.7501C13.25 21.8212 11.571 23.5001 9.49993 23.5001Z"
        stroke="url(#paint3_linear_450_3538)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_450_3538"
          x1="14.5002"
          y1="9.75"
          x2="14.5002"
          y2="10.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFE179" />
          <stop offset="1" stop-color="#C0B29F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_450_3538"
          x1="14.5002"
          y1="19.75"
          x2="14.5002"
          y2="20.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFE179" />
          <stop offset="1" stop-color="#C0B29F" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_450_3538"
          x1="19.5001"
          y1="6"
          x2="19.5001"
          y2="13.5001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFE179" />
          <stop offset="1" stop-color="#C0B29F" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_450_3538"
          x1="9.49993"
          y1="16"
          x2="9.49993"
          y2="23.5001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFE179" />
          <stop offset="1" stop-color="#C0B29F" />
        </linearGradient>
      </defs>
    </Icon>
  );
};
