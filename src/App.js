import Card from "./components/card/Card";

function App() {
  
  return (
    <div className="flex items-center justify-center h-screen">
      <Card title="title">
        <img
          src="https://picsum.photos/300/200"
          alt='Title'
          className="rounded border-2 border-[#1B1B1B] shadow-retro"
        />
        <h1 className=" text-2xl ">Retro Card!</h1>
        <p className="text-sm font-thin">
          This is a simple vertical Retro Card with an img
        </p>
      </Card>
    </div>
  );
}

export default App;
