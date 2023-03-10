import { createBrowserRouter } from "react-router-dom";
import { CertificateDetailComponent } from "../components/certificates/CertificateDetailComponent";
import { CertificateListComponent } from "../components/certificates/CertificateListComponent";
import { ClaimCreatedView } from "../views/ClaimCreatedView";

const router = createBrowserRouter([
    {
      path: "/",
      element: <CertificateListComponent></CertificateListComponent>,
    },{
path: "/certificates",
        element: <CertificateListComponent></CertificateListComponent>,
      }, {
        path: "/create-claim",
        element: <ClaimCreatedView></ClaimCreatedView>,
      },
  ]);

  export default router;