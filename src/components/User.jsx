const User = ({ img, name, hobbies, realData, children }) => {
  return (
    <section>
      <img src={img} alt={name}></img>
      <h1>Name: {name} </h1>
      <h3>Hobbies: {hobbies} </h3>
	  {children}
      <p>Real data: {realData.name}</p>
    </section>
  );
};
export default User;
