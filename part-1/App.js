const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Pepe" />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
