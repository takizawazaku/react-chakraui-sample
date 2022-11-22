import { Button } from "@chakra-ui/react";
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
      <PrimaryButton onClick={() => onClickToast("info")}>
        トースト表示(info)
      </PrimaryButton>
      <PrimaryButton onClick={() => onClickToast("warning")}>
        トースト表示(warning)
      </PrimaryButton>
      <PrimaryButton onClick={() => onClickToast("success")}>
        トースト表示(success)
      </PrimaryButton>
      <PrimaryButton onClick={() => onClickToast("error")}>
        トースト表示(error)
      </PrimaryButton>
    </>
  );
});
