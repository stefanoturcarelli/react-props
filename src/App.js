import User from "./components/User";
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import Clock from "./components/Clock";

const todayDate = new Date().toDateString();

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
          <div>Users</div>
          <User name="Mary" profession="Developer" email="m@m.com" />
          <User name="Jack" profession="Designer" email="j@j.com" />
          <User name="Stefano" profession="Developer" email="s@s.com" />
          <section>
            <Calendar date={todayDate} />
          </section>
          <section>
            <Clock />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
