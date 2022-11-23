import { ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  isFullWidth?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  colorScheme:
    | "blue"
    | "cyan"
    | "gray"
    | "green"
    | "orange"
    | "pink"
    | "purple"
    | "red"
    | "teal"
    | "yellow"
    | "twitter"
    | "whiteAlpha"
    | "blackAlpha"
    | "linkedin"
    | "facebook"
    | "messenger"
    | "whatsapp"
    | "telegram"
    | undefined;

  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = (props) => {
  const {
    children,
    isFullWidth = false,
    disabled = false,
    isLoading = false,
    colorScheme,
    onClick,
  } = props;

  return (
    <Button
      bg="teal.400"
      colorScheme={colorScheme}
      color="white"
      isFullWidth={isFullWidth}
      disabled={disabled || isLoading}
      isLoading={isLoading}
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
