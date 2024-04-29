const App = () => {
  return (
    <div>
      <Person hobbies={["swimming", "baseball", "reading"]} age="19" />
      <Person hobbies={["running", "cooking", "coding"]} age="25" />
      <Person hobbies={["breathing", "tv"]} age="10" />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
