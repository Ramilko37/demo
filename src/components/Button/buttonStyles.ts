import { defineStyleConfig } from "@chakra-ui/react";

export const Style = defineStyleConfig({
  baseStyle: {
    justifyContent: "center",
    alignItems: "center",
    _focusVisible: { boxShadow: "none", outline: "none" },
    borderRadius: "30px",
    margin: 0,
    fontFamily: "Inter",
    fontSize: "17px",
    lineHeight: "24px",
    fontWeight: 600,
    svg: {
      cursor: "pointer",
    },
  },
  sizes: {
    // default button size
    sm: {
      fontSize: "16px",
      fontWeight: 350,
      lineHeight: "24px",
    },
    md: {
      // переопределение шрифтов, отступов и размеров работает только здесь и в variants
      fontSize: "17px",
      fontWeight: 500,
      lineHeight: "24px",
      p: { base: "18px 40px", md: "16px 40px" },
      h: { base: "60px", md: "56px" },
    },
    //TODO rename this names S, M, L
    onlyIcon: {
      fontSize: 0,
      padding: "7px 7px",
      borderRadius: "8px",
      gap: 0,
      height: "30px",
      iconSpacing: 0,
      ".chakra-button__icon": {
        margin: "0",
      },
    },
    M: {
      fontSize: "14px",
      lineHeight: "20px",
      padding: "5px 8px",
      borderRadius: "8px",
      gap: "4px",
      height: "30px",
    },
  },
  variants: {
    primary: {
      maxW: { base: "100%", lg: "397px" },
      bgColor: "Yellow",
      border: "10px solid rgba(255, 255, 255, 0.07)",
      color: "Black",
      padding: "18px 40px 18px",
      "@media(hover: hover)": {
        _hover: {
          color: "White",
          _disabled: {
            bgColor: "Gray.6",
            color: "Gray.5",
          },
        },
      },
      "@media(hover: none)": {
        _hover: {
          color: "White",
          _disabled: {
            bgColor: "Gray.6",
            color: "Gray.5",
          },
        },
      },
      _disabled: {
        bgColor: "Gray.3",
        color: "Gray.6",
        opacity: 1,
      },
      _active: {
        bgColor: "Pink",
        color: "white",
      },
      _focus: {
        bgColor: "PinkDark",
        color: "white",
      },
    },
    secondary: {
      background: "transparent",
      color: "Yellow",
      border: "2px solid var(--1, #FFE179)",
      "@media(hover: hover)": {
        _hover: {
          bgColor: "#292929",
          color: "White",
          _disabled: {
            bgColor: "Black.1",
            color: "Black.3",
          },
        },
      },
      _disabled: {
        bgColor: "Black.1",
        color: "Black.3",
      },
    },
    tertiary: {
      bgColor: "White",
      color: "Black.1",
      "@media(hover: hover)": {
        _hover: {
          bgColor: "Gray.1",
          color: "Black.1",
          _disabled: {
            bgColor: "White",
            color: "Gray.5",
          },
        },
      },
      _disabled: {
        bgColor: "White",
        color: "Gray.5",
      },
    },
    quaternary: {
      bgColor: "Gray.3",
      color: "Black.1",
      "@media(hover: hover)": {
        _hover: {
          bgColor: "Gray.4",
          color: "Black.1",
          _disabled: {
            bgColor: "Gray.3",
            color: "Black.6",
          },
        },
      },
      _disabled: {
        bgColor: "Gray.3",
        color: "Black.6",
      },
    },
    editorButton: {
      bgColor: "White",
      color: "Black.1",
      _active: {
        bgColor: "Pink",
        color: "White",
        "@media(hover: hover)": {
          _hover: {
            bgColor: "PinkDark",
            color: "White",
          },
        },
      },
      "@media(hover: hover)": {
        _hover: {
          bgColor: "#F7F7F7",
          color: "Black.1",
          _disabled: {
            bgColor: "Gray.3",
            color: "Black.6",
          },
        },
      },
      _disabled: {
        bgColor: "Gray.3",
        color: "Black.6",
      },
    },
    primaryCircle: {
      bgColor: "Pink",
      color: "White",
      borderRadius: "50%",
      "@media(hover: hover)": {
        _hover: {
          bgColor: "PinkDark",
          color: "White",
          _disabled: {
            bgColor: "Gray.3",
            color: "Gray.6",
          },
        },
      },
    },
    secondaryCircle: {
      bgColor: "White",
      color: "Black.1",
      borderRadius: "50%",
      "@media(hover: hover)": {
        _hover: {
          bgColor: "Gray.1",
          color: "White",
          _disabled: {
            bgColor: "Black.1",
            color: "Black.3",
          },
        },
      },
    },
    imageEditorHeader: {
      bgColor: "Pink",
      color: "White",
      borderRadius: "32px",
      _disabled: {
        bgColor: "Black.2",
        background: "Black.2",
        color: "rgba(255, 255, 255, 0.56)",
      },
    },
    store: {
      borderRadius: "5px",
      maxHeight: "40px",
      _hover: {
        bgColor: "transparent",
      },
    },
    undoRedo: {
      width: { base: "auto", md: "40px" },
      height: { base: "auto", md: "36px" },
      bgColor: { base: "transparent", md: "white" },
      color: { base: "Gray.6", md: "Gray.6" },
      borderRadius: "0px 20px 20px 0px !important",
      zIndex: 1000,
      rounded: "full",
      _hover: {
        color: { base: "#414141", md: "#Gray.3" },
      },
      _active: {
        color: { base: "white", md: "#414141" },
      },
      _focus: {
        color: { base: "white", md: "#414141" },
        opacity: 1,
      },
    },
    defaultProps: {
      variant: "primary",
    },
  },
});

export const ButtonStyle = {
  key: "Button",
  style: Style,
};
