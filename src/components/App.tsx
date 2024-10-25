import InsertToDo from "./InsertToDo";

function App() {
  return (
    <div className="bg-custom w-screen h-screen">
      <div className="relative flex justify-center items-center top-32">
        <div className="w-1/3 h-auto rounded-2xl shadow-lg flex flex-col justify-between bg-white p-10">
          <InsertToDo />
        </div>
      </div>
    </div>
  );
}

export default App;
