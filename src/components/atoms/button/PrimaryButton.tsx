import { ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  isFullWidth?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  onClick: () => void;
  bg?: string;
};

export const PrimaryButton: VFC<Props> = (props) => {
  const {
    children,
    isFullWidth = false,
    disabled = false,
    isLoading = false,
    onClick,
    bg = "blue.400",
  } = props;

  return (
    <Button
      bg={bg}
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
