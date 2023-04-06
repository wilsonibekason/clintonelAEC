import React from "react";
import { Connect } from "frontity/dist/types";
import { connect, styled } from "frontity";

const Refresh = () => window.location.reload();
const description404 = (
  <>
    These Page can't be found
    <span role="img" aria-label="smillingly condused">
      😆
    </span>
  </>
);

const description = (
  <>
    Don&apos;t panic! Seems like you encountered an error. If this persists, try
    refreshing your browser.{" "}
    <LinkItem role="button" onClick={Refresh}>
      refresh
    </LinkItem>
  </>
);
const ErrorPage = ({ state }) => {
  const data = state.source.get(state.router.link);
  const title = "Oops! something went wrong";
  const title404 = "Oops! 404";
  return (
    <>
      <Container>
        <Title>{data.is404 ? title404 : title} </Title>
        <Description>{data.is404 ? description404 : description} </Description>
      </Container>
    </>
  );
};

export default connect(ErrorPage);

const Container = styled.div``;

const LinkItem = styled.a``;

const Title = styled.h1``;

const Description = styled.p``;
