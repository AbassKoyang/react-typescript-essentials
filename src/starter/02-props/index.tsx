import {PropsWithChildren } from "react";
// option 1 - Here we're explicitly defining the type for the children prop
// type Props = {
//   name: string;
//   id: number;
//   children?: React.ReactNode
// }
// option 2 - here we're using a declaration from react
type Props = PropsWithChildren<{
  name: string;
  id: number;
}>

function Component({name, id, children} : Props) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Id: {id}</h1>
      {children}
    </div>
  );
}
export default Component;
