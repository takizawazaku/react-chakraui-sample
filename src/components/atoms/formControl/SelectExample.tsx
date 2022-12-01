import { FormControl, FormLabel, Select } from "@chakra-ui/react";

export const SelectExample = () => {
  return (
    <FormControl>
      <FormLabel htmlFor="country">Country</FormLabel>
      <Select id="country" placeholder="Select country">
        <option>United Arab Emirates</option>
        <option>Nigeria</option>
      </Select>
    </FormControl>
  );
};
