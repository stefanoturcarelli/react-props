// <App> is the root component of our application

// Importing components without the .js extension
import User from "./components/User";
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import Clock from "./components/Clock";
import ProductList from "./components/ProductList";

// React offers conditional rendering to render a particular component or
// code snippet based on some condition or the status of our application

function App() {
  const todayDate = new Date().toDateString();
  let isLoggedIn = false;

  // Array of Products
  const products = [
    { id: 1001, name: "PlayStation 5", price: 499 },
    { id: 1002, name: "Nintendo Switch", price: 299 },
    { id: 1003, name: "Xbox Series X", price: 499 },
  ];

  return (
    // Fragments wrap your JSX into a single JSX element without returning any
    // HTML. Use them when you want a generic parent for your components
    <>
      <Header title="React Components" isLoggedIn={isLoggedIn} />
      <main>
        <div className="container">
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
          <section>
            <ProductList list={products} />
          </section>
          <section></section>
        </div>
      </main>
    </>
  );
}

export default App;
