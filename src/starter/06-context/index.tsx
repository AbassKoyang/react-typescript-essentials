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
  const theme = useTheme();
  console.log(theme)
  return (
    <div>
      <h2>React & Typescript</h2>
      <button className="btn btn-center" onClick={
        () => {
          if(theme.theme === 'system') {
            theme.setTheme('dark');
            return;
        }
        theme.setTheme('system');
      }}>Toggle</button>
    </div>
  );
}
export default ParentComponent;
