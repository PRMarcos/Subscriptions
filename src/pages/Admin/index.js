import React from "react";
import { NavBar } from "../../components/NavBar";
import { Button } from "../../components/Button";
import { LogOut } from "../../services/firestore";
import { Listar } from "../../services/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, OptionContainer } from "./style";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const Admin = ({ history }) => {
  async function handleExport() {
    try {
      const Encontreiros = await Listar("Encontreiros");
      const Encontristas = await Listar("Inscricoes");

      const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      const fileExtension = ".xlsx";

      const encontristas = XLSX.utils.json_to_sheet(Encontristas);
      const encontreiros = XLSX.utils.json_to_sheet(Encontreiros);

      const wb = { Sheets: { 'encontristas': encontristas, 'encontreiros': encontreiros }, SheetNames: ['encontristas', 'encontreiros'] };
      const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      const data = new Blob([excelBuffer], { type: fileType });
      FileSaver.saveAs(data, "RelatorioExport" + fileExtension);

    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <Container>
      <NavBar
        txtbtn="Home"
        btnFunc={() => {
          history.push("/");
        }}
      >
        <Button
          small
          btnFunc={async () => {
            await LogOut();
            history.push("/");
          }}
        >
          LogOut
        </Button>
      </NavBar>
      <OptionContainer>
        <h1>Administração:</h1>
        <Button
          small
          btnFunc={() => {
            history.push("/list/encontristas");
          }}
        >
          Listar Encontristas
        </Button>
        <Button
          small
          btnFunc={() => {
            history.push("/list/encontreiros");
          }}
        >
          Listar Encontreiros
        </Button>
        <Button small btnFunc={handleExport}>
          Exportar
        </Button>
      </OptionContainer>
      <ToastContainer />
    </Container>
  );
};
export { Admin };
