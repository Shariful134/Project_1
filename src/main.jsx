import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProvideres from "./AuthProviders/AuthProvideres.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvideres>
      <RouterProvider router={router} />
    </AuthProvideres>
  </StrictMode>
);
