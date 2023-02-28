const FormComponent = (): JSX.Element => {
  return (
    <form>
      <label htmlFor="Email">
        Email
        <input
          id="Email"
          placeholder="Introduce your email"
          type="email"
          name="name"
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          id="password"
          placeholder="Introduce your password"
          type="password"
          name="name"
        />
      </label>
      <label htmlFor="image">
        Image
        <input
          id="image"
          placeholder="Introduce an image"
          type="file"
          name="name"
        />
      </label>
    </form>
  );
};

export default FormComponent;
