import { useState } from "react";

type Person = {
  name: string;
  email: string;
}
function Component() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // option 1
    const text1 = formData.get('text') as string;
    const email1 = formData.get('email') as string;
    const person1 : Person = {name: text1, email: email1};
    console.log(person1);

    // option 2
    const data = Object.fromEntries(formData);
    const person2 : Person = {name: data.text as string, email: data.email as string}
    console.log(person2)
  }
  return (
    <section>
      <h2>Event example</h2>
      <form onSubmit={handleSubmit} className="form">
        <input name="text" type="text" className="form-input mb-1" value={text} onChange={(e) => {
          setText(e.target.value)
        }} />
        <input name="email" type="email" className="form-input mb-1" value={email} onChange={handleChange} />
        <button type="submit" className="btn btn-block">Submit</button>
      </form>
    </section>
  );
}
export default Component;
