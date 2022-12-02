import { Center, Divider, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useMessage } from "../../../hooks/useMessage";
import { BadgeSample } from "../../atoms/badge/BadgeSample";
import { BreadCrumbSample } from "../../atoms/breadcrumb/BreadCrumbSample";
import { AlertDialogButton } from "../../atoms/button/AlertDialogButton";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { CheckboxGroup } from "../../atoms/formControl/CheckboxGroup";
import { ErrorMessageExample } from "../../atoms/formControl/ErrorMessageExample";
import { MakingFieldRequired } from "../../atoms/formControl/MakingFieldRequired";
import { NumberInputExample } from "../../atoms/formControl/NumberInputExample";
import { SelectExample } from "../../atoms/formControl/SelectExample";
import { SlideTransitionSample } from "../../atoms/Transitions/SlideTransitionSample";

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
      <BreadCrumbSample />
      <Center fontSize={20}>雑に試します</Center>

      <Wrap p={{ base: 4, md: 10 }}>
        <WrapItem>
          <AlertDialogButton />
        </WrapItem>
      </Wrap>

      <Divider />

      {/* https://chakra-ui.com/docs/components/toast/usage */}
      <Wrap p={{ base: 4, md: 10 }}>
        <WrapItem>
          <PrimaryButton onClick={() => onClickToast("info")}>
            トースト表示(info)
          </PrimaryButton>
        </WrapItem>
        <WrapItem>
          <PrimaryButton
            bg={"orange.400"}
            onClick={() => onClickToast("warning")}
          >
            トースト表示(warning)
          </PrimaryButton>
        </WrapItem>
        <WrapItem>
          <PrimaryButton
            bg={"green.400"}
            onClick={() => onClickToast("success")}
          >
            トースト表示(success)
          </PrimaryButton>
        </WrapItem>
        <WrapItem>
          <PrimaryButton bg={"red.400"} onClick={() => onClickToast("error")}>
            トースト表示(error)
          </PrimaryButton>
        </WrapItem>
      </Wrap>

      <Divider />

      <Wrap p={{ base: 4, md: 10 }}>
        <WrapItem>
          <CheckboxGroup />
        </WrapItem>
      </Wrap>

      <Divider />

      <Wrap p={{ base: 4, md: 10 }}>
        <WrapItem>
          <ErrorMessageExample />
        </WrapItem>
      </Wrap>

      <Divider />

      <Wrap p={{ base: 4, md: 10 }}>
        <WrapItem>
          <MakingFieldRequired />
        </WrapItem>
      </Wrap>

      <Divider />

      <Wrap p={{ base: 4, md: 10 }}>
        <WrapItem>
          <SelectExample />
        </WrapItem>
      </Wrap>

      <Divider />

      <Wrap p={{ base: 4, md: 10 }}>
        <WrapItem>
          <NumberInputExample />
        </WrapItem>
      </Wrap>

      <Divider />

      <Wrap p={{ base: 4, md: 10 }}>
        <WrapItem>
          <BadgeSample />
        </WrapItem>
      </Wrap>

      <Divider />

      <Wrap p={{ base: 4, md: 10 }}>
        <WrapItem>
          <SlideTransitionSample />
        </WrapItem>
      </Wrap>
    </>
  );
});
