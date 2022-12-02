import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

export const BreadCrumbSample = () => {
  return (
    // <Breadcrumb>
    // <Breadcrumb separator='-'>
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem>
        <BreadcrumbLink href="/home">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="/home/user_management">
          ユーザー一覧
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="/home/sample_etc">その他サンプル</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
