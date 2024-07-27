const InputStyle = (error: boolean) => {
  return {
    height: "52px",
    borderRadius: "100px",
    color: "#555555",
    bg: "#FFFEFB",
    _placeholder: { color: "#989292" },
    border: error ? "2px solid #FF7B7B" : "1px solid #D9DDE3",
    _focus: {
      border: error ? "2px solid #FF7B7B" : "1px solid #D9DDE3",
      boxShadow: error ? "none" : "0px 0px 0px 4px #F1EEF8",
    },
    _hover: {
      border: error ? "2px solid #FF7B7B" : "1px solid #D9DDE3",
    },
  };
};

const TextErrorStyle = {
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "200%",
  color: "#FF7B7B",
  marginLeft: "16px",
  marginTop: "4px",
};

export { InputStyle, TextErrorStyle };
