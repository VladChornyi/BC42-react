import Button from "./components/Button/Button";
import { Container } from "./components/Container/Container";

function App() {
  const shouldRender = null;

  return (
    <>
      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          dolor aut eligendi quos pariatur incidunt voluptatem maxime quaerat ad
          itaque, placeat aspernatur suscipit, nam mollitia, reiciendis
          provident iusto expedita ipsum.
        </p>
        <h3>Test</h3>
        <a href="/">Link</a>

        <Button>Open modal</Button>
      </Container>
      <Container title="Hello" />
    </>
  );
}

export default App;
