const FormComponent = (): JSX.Element => {
  return (
    <form>
      <button></button>
      <label>
        imagen
        <input type="text" name="name"></input>
      </label>
      <label>
        password
        <input type="text" name="name"></input>
      </label>
      <label>
        email
        <input type="text" name="name"></input>
      </label>
    </form>
  );
};

export default FormComponent;
