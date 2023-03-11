import { CertificateListComponent } from "../components/certificates/CertificateListComponent";
import { UserPresentationComponent } from "../components/userPresentation/UserPresentationComponent";

export const CertificatesView = () => (
  <>
    <UserPresentationComponent></UserPresentationComponent>
    <CertificateListComponent></CertificateListComponent>
  </>
);
