type ComponentProps = {
  type: 'advanced' | 'basic';
  name: string;
  email?: string;
}
function Component({type, name, email} : ComponentProps) {
  return (
    <div className={`alert ${type === 'advanced' ? 'alert-danger' : 'alert-success'}`}>
      <h3>User: {name}</h3>
      {email && <h3>Email: {email}</h3>}
    </div>
  );
}
export default Component;
