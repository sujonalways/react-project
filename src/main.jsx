import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import Homepage from "./pages/home/Homepage.jsx";

import Howitwork from "./pages/howitwork/Howitwork.jsx";
import Singup from "./pages/sing-up/Singup.jsx";
import Featurspages from "./pages/featurspage/Featurspages.jsx";
import Pricingpage from "./pages/pricingpage/Pricingpage.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import SignIn from "./pages/sign-in/SignIn.jsx";
import FAQpage from "./pages/faqpage/FAQpage.jsx";
// import SignIn from "./pages/sing-in/SignIn.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/featurs",
        element: <Featurspages />,
      },
      {
        path: "/howitwork",
        element: <Howitwork />,
      },
      {
        path: "/pricing",
        element: <Pricingpage />,
      },
      {
        path: "/signin",
        element: <SignIn/>,

      },
      {
        path: '/singup',
        element:<Singup />,
      },

    
    ],
  },

  {
    path: "*",
    element: <FAQpage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
