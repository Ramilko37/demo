import { defineStyleConfig } from "@chakra-ui/react";

const Style = defineStyleConfig({
  baseStyle: {
    fontFamily: "Inter",
    cursor: "default",
  },
  variants: {
    loginTitle: {
      fontSize: { base: "38px", lg: "56px" },
      fontWeight: "550",
      lineHeight: { base: "40px", lg: "56px" },
    }, //temporary variant
    h1: {
      fontSize: "24px",
      fontWeight: "550",
      lineHeight: "32px",
    },
    h2: {
      fontFamily: "Alegreya",
      fontSize: { base: "40px", lg: "56px" },
      fontWeight: "900",
      lineHeight: { base: "40px", lg: "50px" },
    },
    h3: {
      fontFamily: "Alegreya",
      fontSize: { base: "32px", lg: "56px" },
      fontWeight: "800",
      lineHeight: { base: "40px", lg: "50px" },
    },
    p_info: {
      fontFamily: "Inter",
      fontSize: "17px",
      fontWeight: "600",
      lineHeight: "24px",
    },
    p_description: {
      fontSize: "14px",
      fontWeight: "350",
      lineHeight: "20px",
    },
    p_small_description: {
      fontSize: "13px",
      fontWeight: "350",
      lineHeight: "16px",
    },
    p_number: {
      fontSize: "11px",
      fontWeight: "350",
      lineHeight: "11px",
    },
    h_tab: {
      fontSize: { base: "16px", lg: "17px" },
      fontWeight: "500",
      lineHeight: "24px",
    },
    p_tab: {
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "24px",
    },
    cancel_tab: {
      fontSize: { base: "16px", lg: "17px" },
      fontWeight: "350",
      lineHeight: "24px",
    },
    action_option: {
      fontSize: "12px",
      fontWeight: "450",
      lineHeight: "14px",
    },
    gender_option: {
      fontSize: { base: "14px", lg: "12px" },
      fontWeight: "450",
      lineHeight: "24px",
    },
    style_option: {
      fontSize: { base: "12px", lg: "11px" },
      fontWeight: "450",
      lineHeight: { base: "12px", lg: "14px" },
    },
    main_btn: {
      fontSize: "17px",
      fontWeight: "500",
      lineHeight: "24px",
    },
    small_btn: {
      fontSize: "14px",
      fontWeight: "450",
      lineHeight: { base: "14px", lg: "16px" },
    },
  },
});

export const TextStyle = {
  key: "Text",
  style: Style,
};
