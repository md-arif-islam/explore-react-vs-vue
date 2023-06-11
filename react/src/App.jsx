import "./App.css";

function App() {
  const user = {
    name: "Arif",
    age: 20,
  };

  return (
    <>
      <pre>{JSON.stringify(user)}</pre>
    </>
  );
}

export default App;
