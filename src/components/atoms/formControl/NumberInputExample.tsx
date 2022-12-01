import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

export const NumberInputExample = () => {
  return (
    <FormControl>
      <FormLabel htmlFor="amount">Amount</FormLabel>
      <NumberInput max={50} min={10}>
        <NumberInputField id="amount" />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
};
