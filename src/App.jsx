import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

function App() {
  const StyledApp = styled.main`
    /* background-color: orangered; */
    padding: 20px;
  `;

  // GlobalStyles: Proveniente do styled components, ele é uma variável js que armazena todos os estilos e retorna um componente. Este componente global não pode ter filhos ou receber props.
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>
            {/* o prop "as" faz com que o styled components renderize a tag passada como valor, ao invés da tag padrão do componente */}
            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button>Check-In</Button>
              <Button variation="secondary" size="small">
                Check-Out
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="Number of guests" />
              <Input type="number" placeholder="Number of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
