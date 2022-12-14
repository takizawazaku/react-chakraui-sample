/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import { useToast } from "@chakra-ui/react";

type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error";
  variant: "solid" | "subtle" | "left-accent" | "top-accent";
};

export const useMessage = () => {
  const toast = useToast();

  const showMessage = useCallback((props: Props) => {
    const { title, status, variant } = props;
    toast({
      title,
      status,
      variant,
      position: "top",
      duration: 2000,
      isClosable: true,
    });
  }, []);

  return { showMessage };
};
