import { VFC, memo } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
  onClickSampleInput: () => void;
  onClickSampleList: () => void;
  onClickSampleEtc: () => void;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const {
    isOpen,
    onClose,
    onClickHome,
    onClickUserManagement,
    onClickSetting,
    onClickSampleInput,
    onClickSampleList,
    onClickSampleEtc,
  } = props;

  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody as="nav" p={0} bg="gray.100">
            <Button w="100%" onClick={onClickHome}>
              TOP
            </Button>
            <Button w="100%" onClick={onClickUserManagement}>
              ユーザー一覧
            </Button>
            <Button w="100%" onClick={onClickSetting}>
              設定
            </Button>
            <Button w="100%" onClick={onClickSampleInput}>
              入力画面サンプル
            </Button>
            <Button w="100%" onClick={onClickSampleList}>
              一覧画面サンプル
            </Button>
            <Button w="100%" onClick={onClickSampleEtc}>
              その他画面サンプル
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
