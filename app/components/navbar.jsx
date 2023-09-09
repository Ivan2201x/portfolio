function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <p className=" text-3xl text-sky-800 ml-5 font-bold" >IvanDev</p>
      </div>
      <div className="flex-none" >
        <ul className="menu menu-horizontal px-1 text-xl font-semibold">
          <li><a id='About me'>Home</a></li>
          <li><a>About me</a></li>
          <li><a>Projects</a></li>
          <li><a>certificates</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </div>

  );
}

export default Navbar;
