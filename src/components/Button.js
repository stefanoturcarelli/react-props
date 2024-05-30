function Button(props) {
  return (
    <button className={props.isLoggedIn ? "red" : "green"}>
      {props.isLoggedIn ? "Logout" : "Login"}
    </button>
  );
}

export default Button;
