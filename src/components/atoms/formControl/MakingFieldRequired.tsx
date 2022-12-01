import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export const MakingFieldRequired = () => {
  return (
    <FormControl isRequired>
      <FormLabel htmlFor="first-name">First name</FormLabel>
      <Input id="first-name" placeholder="First name" />
    </FormControl>
  );
};
