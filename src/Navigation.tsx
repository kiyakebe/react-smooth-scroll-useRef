interface Props {
  onScroll: (i: number) => void; // create void function to call handleClick
}

const Navigation = ({ onScroll }: Props) => {
  return (
    <nav className="navigation">
        {/* we can't pass it b/c we are calling it with value passed to t */}
      <button onClick={() => onScroll(0)}>Scroll 1</button> 
      <button onClick={() => onScroll(1)}>Scroll 2</button>
      <button onClick={() => onScroll(2)}>Scroll 3</button>
    </nav>
  );
};

export default Navigation;