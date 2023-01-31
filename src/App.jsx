import Button from "./components/Button/Button";
import { Container } from "./components/Container/Container";
import frameWorks from "./assets/frameworks.json";
import FrameworksList from "./components/FrameworksList/FrameworksList";
import { BTN_VARIANTS } from "./constants/styles";
import { GlobalStyle } from "./components/GlobalStyles/GlobalStyles";

function App() {
  const variable = { title: "Hello World" };
  const arr = ["Hello World", "World", "Title"];

  return (
    <>
      <GlobalStyle />
      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          dolor aut eligendi quos pariatur incidunt voluptatem maxime quaerat ad
          itaque, placeat aspernatur suscipit, nam mollitia, reiciendis
          provident iusto expedita ipsum.
        </p>
        <h3>Test</h3>
        <a href="/">Link</a>

        <Button variant={BTN_VARIANTS.main}>Open modal</Button>
        <Button variant={BTN_VARIANTS.secondary}>Open modal</Button>
      </Container>
      <Container title={variable.title}>
        <FrameworksList frameWorks={frameWorks} />
      </Container>
    </>
  );
}

export default App;
