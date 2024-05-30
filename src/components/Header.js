function Header(props) {
  return (
    <header>
      <div>
        <nav>
          <ul>
            <a>
              <li>{props.home}</li>
            </a>
            <a>
              <li>{props.blog}</li>
            </a>
            <a>
              <li>{props.services}</li>
            </a>
            <a>
              <li>{props.about}</li>
            </a>
            <a>
              <li>{props.contact}</li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
