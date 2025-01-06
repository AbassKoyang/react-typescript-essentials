import { ThemeProvider } from "./context";
import { useTheme } from "./context";

function ParentComponent() {
  return (
    <ThemeProvider>
      <ChildComponent/>
    </ThemeProvider>
  );
}

function ChildComponent() {
  const context = useTheme();
  console.log(context)
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Context API</h2>
    </div>
  );
}
export default ParentComponent;
