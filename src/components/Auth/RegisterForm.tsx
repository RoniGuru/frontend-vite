const RegisterForm = () => {
  const handleRegister = () => {};
  return (
    <div className="flex flex-col">
      <label>username</label>
      <input />
      <label>password</label>
      <input />
      <label>confirm password</label>
      <input />
      <button onClick={handleRegister}> Register</button>
    </div>
  );
};

export default RegisterForm;
