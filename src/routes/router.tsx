import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import NotFoundPage from "@/pages/not-found/page";
import RootLayout from "@/pages/root/layout";
import ErrorPage from "@/pages/error/page";
import RootPage from "@/pages/root/page";

import { AppRoutes } from "./app-routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={AppRoutes.root}
      element={<RootLayout />}
      errorElement={<ErrorPage />}
    >
      {/* Root */}
      <Route index element={<RootPage />} />

      {/* Github 404 */}
      <Route path={AppRoutes.github404} element={<NotFoundPage />} />

      {/* Not Found */}
      <Route path={AppRoutes.notFound} element={<NotFoundPage />} />
    </Route>
  )
);
