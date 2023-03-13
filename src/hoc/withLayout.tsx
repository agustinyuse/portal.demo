// HoC -> withAlgo...  FUNCION

import Navbar from "../components/NavBar/Navbar";

/*

  HoC : Función que recibe un componente y retorna un componente modificado

*/
const withLayout =
  ({ Component }: any) =>
  ({ props }: any) => {
    return (
      <>
        <Navbar />
        <Component {...props} />
      </>
    );
  };

export default withLayout;
