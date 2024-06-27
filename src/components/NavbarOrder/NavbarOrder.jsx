const NavbarOrder = () => {
  return (
    <section>
      <div className="navbar bg-base-100 mb-4">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Order Management</a>
        </div>
        <div className="flex-none">
          <div className="p-4 text-gray-500">
            <div className="dropdown">
              <div className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <i className="material-icons">notifications</i>
                  <span className="badge badge-sm indicator-item">520</span>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="cat meme"
                  src="../../public/photo/51y8GUVKJoL._AC_UF1000,1000_QL80_.jpg"
                />
              </div>
            </div>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavbarOrder;
