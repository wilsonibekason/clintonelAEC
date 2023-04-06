import { HomePage } from "./pages";
import { Links } from "./components";
const Root = ({ state }) => {
  console.log(state);
  return (
    <>
      You can edit your package in:
      <pre>packages\aec-theme\src\index.js</pre>
      <Links />
      <HomePage />
    </>
  );
};

export default {
  name: "aec-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {},
  },
  actions: {
    theme: {},
  },
};
