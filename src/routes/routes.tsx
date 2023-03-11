import { createBrowserRouter } from "react-router-dom";
import { CertificatesView } from "../views/CertificatesView";
import { ClaimCreatedView } from "../views/ClaimCreatedView";

const router = createBrowserRouter([
    {
      path: "/",
      element: <CertificatesView></CertificatesView>,
    },{
path: "/certificates",
        element: <CertificatesView></CertificatesView>,
      }, {
        path: "/create-claim",
        element: <ClaimCreatedView></ClaimCreatedView>,
      },
  ]);

  export default router;