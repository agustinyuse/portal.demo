import { CertificateListComponent } from "../../components/Certificates/CertificateListComponent";
import { UserPresentationComponent } from "../../components/UserPresentation/UserPresentationComponent";

export const CertificatesView = () => (
  <>
    <UserPresentationComponent></UserPresentationComponent>
    <CertificateListComponent></CertificateListComponent>
  </>
);
