const HeadingStyle = {
  mx: "auto",
  width: "60%",
  textAlign: "center",
  fontSize: "3xl",
  fontFamily: "gilroyMedium",
  fontWeight: "bold",
};

const IntroDescriptionStyle = {
  fontSize: "xl",
  mt: "16px",
  mx: "auto",
  width: "80%",
  textAlign: "center",
  fontFamily: "gilroyMedium",
};

const IntroDiveInStyle = {
  mt: "48px",
  mx: "auto",
  textAlign: "center",
  fontSize: "2xl",
  fontFamily: "gilroyMedium",
  fontWeight: "bold",
};

const CardStyle = {
  boxShadow: "0px 10px 10px 4px rgba(212, 224, 229, 0.30)",
  borderRadius: "24px",
  _hover: {
    transform: "scale(1.03)",
    transition: "transform .15s ease-in",
  },
};

const HowContainerStyle = {
  width: { base: "100%", md: "50%" },
  mx: "auto",
  boxShadow: "0px 10px 10px 4px rgba(212, 224, 229, 0.30)",
  borderRadius: "24px",
  p: "32px",
};

const FaqContainerStyle = {
  flexDirection: "column",
  boxShadow: "0px 10px 10px 4px rgba(212, 224, 229, 0.30)",
  borderRadius: "24px",
  p: "32px",
  gap: "32px",
};

const FooterHeadingStyle = {
  textAlign: "center",
  fontSize: "xl",
  fontFamily: "gilroyMedium",
  fontWeight: "bold",
  mb: "16px",
};

const FooterIconStyle = {
  borderRadius: "100%",
  p: "8px",
  bg: "purple.300",
  _hover: {
    transform: "scale(1.03)",
    transition: "transform .15s ease-in",
    bg: "purple.400",
  },
};

export {
  HeadingStyle,
  IntroDescriptionStyle,
  IntroDiveInStyle,
  CardStyle,
  HowContainerStyle,
  FaqContainerStyle,
  FooterHeadingStyle,
  FooterIconStyle,
};
