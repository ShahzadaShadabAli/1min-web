
function App() {

  return (
    <div>
    <h1>Moodify</h1>
    <button className="bg-green-300 p-5" onClick={() => alert("You are Happy")}>Happy</button>
    <button className="bg-yellow-300 p-5" onClick={() => alert("You are Neutral")}>Neutral</button>
    <button className="bg-red-300 p-5" onClick={() => alert("You are Sad")}>Sad</button>
    </div>
  );
}

export default App;
