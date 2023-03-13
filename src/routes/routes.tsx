import { createBrowserRouter } from "react-router-dom";
import { CertificatesView } from "../pages/Certificates";
import { ClaimCreatedView } from "../pages/Claims";

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
    path: "/certificates/{id}/create-claim",
    element: <ClaimCreatedView></ClaimCreatedView>,
  },
]);

export default router;
