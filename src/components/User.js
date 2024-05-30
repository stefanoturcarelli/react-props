// props is an object

function User(props) {
  return (
    <section>
      <p>Name: {props.name}</p>
      <p>Profession: {props.profession}</p>
      <p>Email: {props.email}</p>
    </section>
  );
}

export default User;
