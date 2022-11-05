function NavButton({ text, choosen = false }) {
  return (
    <button
      className={`w-full h-full ${choosen ? 'bg-main-color/30' : ''} border-main-color text-main-color hover:bg-main-color hover:text-white transition-colors active:bg-main-color-dark`}
    >
      {text}
    </button>
  );
}

export default NavButton;
