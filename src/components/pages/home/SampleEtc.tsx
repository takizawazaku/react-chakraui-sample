import { Button } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useMessage } from "../../../hooks/useMessage";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

export const SampleEtc: VFC = memo(() => {
  const { showMessage } = useMessage();
  const onClickToast = () => {
    showMessage({ title: "aaaa", status: "info" });
  };

  return (
    <>
      <PrimaryButton onClick={onClickToast}>トースト表示</PrimaryButton>
    </>
  );
});
