import * as React from "react";
import { connect, useConnect, styled } from "frontity";

const Link = ({ state, href, children, actions }) => {
  const {} = useConnect();
  const data = state.source.get(state.router.link);
  console.log(data);
  console.log(data.isFetching);
  return (
    <>
      <HelloComponent
        href={href}
        onClick={(e) => {
          e.preventDefault();
          return actions.router.set(href);
        }}
      ></HelloComponent>
      <p>Current Url: {state.router.link} </p>
      <p>{state.frontity.title} </p>
      <h1>{state.frontity.description} </h1>
      <LinkComponent>
        {data.isPage && <h1>This is a Page</h1>}
        {data.isFetching && data.isReady && <h1>This is a Page</h1>}
        <LinkComponent></LinkComponent>
        {/* <Post /> */}
      </LinkComponent>
    </>
  );
};

const HelloComponent = styled.a`
  color: #eee;
  font-size: 2rem;
`;
const LinkComponent = styled.ul`
  display: flex;
  text-decoration: none;
`;

export default connect(Link);
