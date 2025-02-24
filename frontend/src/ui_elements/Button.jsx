const Button = ({ onClick, children, className })=> {
    return (
      <button
        onClick={onClick}
        className={`py-2 px-6 bg-gray-300 text-black-700 text-center mt-4 hover:bg-gray-500 hover:text-black ${className}`}
      >
        {children}
      </button>
    );
  }
  

  export default Button