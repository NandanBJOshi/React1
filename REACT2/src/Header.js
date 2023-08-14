import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to={"./"} class="nav-link active" aria-current="page" >
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"./uni"} class="nav-link" href="#">
                Link
              </Link>
            </li>
            <li class="nav-item dropdown">
            <Link to={"./park"} class="nav-link" >
                park
            </Link>
            </li>
            </ul>
            <form class="d-flex">
            <input
                id="search"
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit"
                onClick={(event)=>{
                    event.preventDefault();
                    let s=document.getElementById("search");
                    return(
                        <Link to={"./"+s.value}></Link>
                    );
                }}>
                Search
            </button>
            </form>
        </div>
      </div>
    </nav>
  );
}
