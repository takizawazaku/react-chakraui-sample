import { Stack, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useMessage } from "../../../hooks/useMessage";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

export const SampleEtc: VFC = memo(() => {
  // コンポーネントは後でバラすべきか？
  const { showMessage } = useMessage();
  const onClickToast = (status: "info" | "warning" | "success" | "error") => {
    let title = "";
    switch (status) {
      case "info":
        title = "情報";
        break;
      case "warning":
        title = "警告";
        break;
      case "success":
        title = "成功";
        break;
      case "error":
        title = "失敗";
        break;
      default:
        title = "";
        break;
    }
    showMessage({
      title,
      status,
      variant: "top-accent",
    });
  };

  return (
    <>
      <Stack direction="column">
        <Wrap spacing={4}>
          <WrapItem>
            <PrimaryButton onClick={() => onClickToast("info")}>
              トースト表示(info)
            </PrimaryButton>
          </WrapItem>
          <WrapItem>
            <PrimaryButton onClick={() => onClickToast("warning")}>
              トースト表示(warning)
            </PrimaryButton>
          </WrapItem>
          <WrapItem>
            <PrimaryButton onClick={() => onClickToast("success")}>
              トースト表示(success)
            </PrimaryButton>
          </WrapItem>
          <WrapItem>
            <PrimaryButton onClick={() => onClickToast("error")}>
              トースト表示(error)
            </PrimaryButton>
          </WrapItem>
        </Wrap>
      </Stack>
    </>
  );
});
