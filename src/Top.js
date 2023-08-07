import { Logo, Navbar } from "./Header";
function Top() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-2"><Logo Name="sp"/></div>
                <div className="col"><Navbar/></div>
            </div>
            
        </div>
    );
}
export default Top;