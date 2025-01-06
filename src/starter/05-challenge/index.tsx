type BasicComponentProps = {
  type: 'basic';
  name: string;
  email?: string;
}
type AdvancedComponentProps = {
  type: 'advanced';
  name: string;
  email?: string;
}
type ComponentProps = BasicComponentProps | AdvancedComponentProps
function Component(props: ComponentProps) {
  const {type, name} = props;
  if(type === 'basic'){
    return (<div className='alert alert-success'>
      <h3>User: {name}</h3>
    </div>)
  };
  return (
    <div className='alert alert-danger'>
      <h3>User: {name}</h3>
      <h3>Email: {props.email}</h3>
    </div>
  )
}
export default Component;
