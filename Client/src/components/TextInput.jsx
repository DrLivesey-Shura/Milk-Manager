import { Box, Input } from "@chakra-ui/react";

const TextInput = ({ textValue, setTextValue, placeholder }) => {
  return (
    <Box
      boxShadow="0 0 5px #00000033"
      borderRadius="5px"
      position="relative"
      background-color="#ffffff"
    >
      <Input
        fontSize="1.6rem"
        height="3.5rem"
        width="100%"
        padding="0 1.5rem"
        border="none"
        outline="none"
        borderRadius=" 5px"
        backgroundColor="transparent"
        color="#555555"
        cursor="pointer"
        textAlign=" center"
        type="text"
        value={textValue}
        placeholder={placeholder}
        onChange={(e) => setTextValue(e.target.value)}
      />
    </Box>
  );
};

export default TextInput;
