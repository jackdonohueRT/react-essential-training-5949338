import "./App.css";

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
      <p>Updated at {props.time} ms past the second</p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header name="Jack" time={new Date().getMilliseconds()} />
      <main>
        <h2>We serve the most delicious food around</h2>
      </main>
    </div>
  );
}

export default App;
