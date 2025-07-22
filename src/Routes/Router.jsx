import { createBrowserRouter } from "react-router";
import App from "../App";
import PrivacyPage from "../pages/PrivacyPage";
import HomeLayOut from "../Layout/HomeLayOut";
import HomePage from "../pages/HomePage";
import TermsPage from "../pages/TermsPage";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayOut,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "privacy-policy",
        Component: PrivacyPage,
      },
      {
        path: "terms-condiditions",
        Component: TermsPage,
      },
    ],
  },
]);
export default Router;
