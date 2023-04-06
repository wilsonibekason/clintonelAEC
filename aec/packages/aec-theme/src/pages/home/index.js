import { connect, styled } from "frontity";

const HomePage = ({ state }) => {
  const data = state.source.get(state.router.link);
  console.log("Home Page Response", data);

  return (
    <>
      <Container>
        <h1>djjjdjdj</h1>
      </Container>
    </>
  );
};

const Layout = styled.main``;

const Container = styled.div``;

export default connect(HomePage);
