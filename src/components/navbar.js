import NavButton from "./navButton";

function Navbar() {
  return <footer className="w-full h-20 min-h-[80px] grid grid-cols-2">
    <NavButton text="Главная" choosen={true}/>
    <NavButton text="Статистика"/>
  </footer>;
}

export default Navbar;
