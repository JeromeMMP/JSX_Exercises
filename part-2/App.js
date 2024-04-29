const App = () => {
  const KMessage =
    "I like my starbucks with extra white chocolate syrup, is that too much to ask for? ";
  const BMessage = "burgers > any other food in the world";
  const SMessage = "How abouT nohHhHu";
  return (
    <div>
      <Tweet name="SassySandy" timeAgo="3 weeks ago" message={SMessage} />
      <Tweet name="bobbyTheKidd" timeAgo="3 hours ago" message={BMessage} />
      <Tweet
        name="KarenTheWhiteQueen"
        timeAgo="3 mins ago"
        message={KMessage}
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
