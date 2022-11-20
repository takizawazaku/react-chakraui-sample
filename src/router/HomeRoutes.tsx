import { Home } from "../components/pages/home/Home";
import { SampleEtc } from "../components/pages/home/SampleEtc";
import { SampleInput } from "../components/pages/home/SampleInput";
import { SampleList } from "../components/pages/home/SampleList";
import { Setting } from "../components/pages/home/Setting";
import { UserManagement } from "../components/pages/home/UserManagement";
import { Page404 } from "../components/pages/Page404";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />,
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />,
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />,
  },
  {
    path: "/sample_input",
    exact: false,
    children: <SampleInput />,
  },
  {
    path: "/sample_list",
    exact: false,
    children: <SampleList />,
  },
  {
    path: "/sample_etc",
    exact: false,
    children: <SampleEtc />,
  },
  {
    path: "",
    exact: false,
    childlen: <Setting />,
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />,
  },
];
