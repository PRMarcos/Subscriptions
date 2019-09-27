import React from "react";
import { NavBar } from "../../components/NavBar";
import { Container, CardContainer } from "./style";
import { CardAlert } from "../../components/CardAlert";

import warning from "../../assets/CardImages/warningImg.png";

const title = "Inscrições para encontristas encerradas.";

const text = "Favor entrar encontato para mais informações sobre a lista de espera:";

const aditional = "Bruna - (27) 9 9755-8607";

export function VacanciesClosedPage({ history }) {


    return (
        <Container>
            <NavBar
                txtbtn="Home"
                btnFunc={() => {
                    history.push("/");
                }}
            />
            <CardContainer>
                <CardAlert
                    image={warning}
                    butunText="Voltar para pagina inicial"
                    title={title}
                    description={text}
                    aditional={aditional}
                    buttonFuncition={() => {
                        history.push("/");
                    }}
                ></CardAlert>

            </CardContainer>
        </Container>
    );
}
