import User from "./components/users";

const App = () => {
  return (
    <div className="App">
      <h1>This is App Component</h1>
      <User name = "Karthik" description = "Full Stack"/>
      <User name = "Pooja" description = "ML"/>
    </div>
  );
};

export default App;
