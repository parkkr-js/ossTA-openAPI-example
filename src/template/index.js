import { Box } from "@chakra-ui/react";

const Template = () => {
  return (
    <>
      <TemplateBackground />
    </>
  );
};

export default Template;

const TemplateBackground = () => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      bg="black"
      bgAttachment="fixed"
      zIndex="-1"
    />
  );
};
