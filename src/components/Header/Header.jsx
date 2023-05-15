import "./Header.css";

export default function Header() {
  return (
    <div className="rootDivHeader">
      <header className="border-bottom border-light border-5 mb-5 myHeader">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg">
              <a
                className="navbar-brand ms-2 fs-2 fw-bold text-black "
                href=""
              >
                  <p className="myBrand">
                    Bank <span className="myBrand2">Bot</span>
                  </p>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              {/* <div className="collapse navbar-collapse"></div> */}
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
              
              <ul className="navbar-nav ml-auto ms-auto">
                <li className="nav-item fs-5">
                      <p className="myNavContent">
                            About
                      </p>
                </li>
                <li className="nav-item fs-5">
                        <p className="myNavContent">
                            Services
                        </p>
                </li>

                <li className="nav-item fs-5">
                    <p className="myNavContent">
                        Login
                    </p>
                </li>
                <li className="nav-item fs-5">
                    <p className="myNavContent">
                        SignUp
                    </p>
                </li>
              </ul>

            </div>
  
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
