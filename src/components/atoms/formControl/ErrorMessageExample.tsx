import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";

export const ErrorMessageExample = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: any) => setInput(e.target.value);

  const isError = input === "";

  return (
    <FormControl isInvalid={isError}>
      <FormLabel htmlFor="email">Email</FormLabel>
      <Input
        id="email"
        type="email"
        value={input}
        onChange={handleInputChange}
      />
      {!isError ? (
        <FormHelperText>入力できたね！えらい！！</FormHelperText>
      ) : (
        <FormErrorMessage>メールアドレスが入力されていません</FormErrorMessage>
      )}
    </FormControl>
  );
};
