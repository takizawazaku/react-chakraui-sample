import { Badge, Stack } from "@chakra-ui/react";

// prettier-ignore
export const BadgeSample = () => {
  return (
    <Stack direction="row">
      <Badge>Default</Badge>
      <Badge colorScheme="green">Success</Badge>
      <Badge colorScheme="red">Removed</Badge>
      <Badge colorScheme="purple">New</Badge>
      <Badge variant="outline" colorScheme="green">Default</Badge>
      <Badge variant="solid" colorScheme="green">Success</Badge>
      <Badge variant="subtle" colorScheme="green">Removed</Badge>
    </Stack>
  );
};
