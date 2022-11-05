import Header from "./components/header";
import Navbar from "./components/navbar";
import Main from "./pages/main";

function App() {
  return (
    <main className="w-full h-screen flex flex-col justify-start items-center">
      <Header />
      <div className="w-full h-full">
        <Main/>
      </div>
      <Navbar />
    </main>
  );
}

export default App;
