import User from "./components/User";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="container">
        <Header
          home="Home"
          blog="Blog"
          services="Services"
          about="About"
          contact="Contact"
        />
        <main>
          <User name="Mary" profession="Developer" email="m@m.com" />
          <User name="Jack" profession="Designer" email="j@j.com" />
          <User name="Stefano" profession="Developer" email="s@s.com" />
        </main>
      </div>
    </>
  );
}

export default App;
