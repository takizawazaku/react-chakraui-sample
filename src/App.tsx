import { ChakraProvider, Button } from "@chakra-ui/react";
import theme from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">ボタン</Button>
      <p>あああああああ</p>
      <b>いいいいいい</b>
    </ChakraProvider>
  );
}

export default App;
