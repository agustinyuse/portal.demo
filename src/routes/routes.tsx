import { createBrowserRouter } from "react-router-dom";
import { CertificatesView } from "../pages/CertificatesView";
import { ClaimCreatedView } from "../pages/ClaimCreatedView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CertificatesView></CertificatesView>,
  },
  {
    path: "/certificates",
    element: <CertificatesView></CertificatesView>,
  },
  {
    path: "/create-claim",
    element: <ClaimCreatedView></ClaimCreatedView>,
  },
]);

export default router;
