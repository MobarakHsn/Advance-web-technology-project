import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
const Header=()=>{
    const [flag,setFlag] = useState(0);
    useEffect(function()
        {
            let x=localStorage.getItem("obj")
            if(x)
            {
                setFlag(1);
            }
            else
            {
                setFlag(0);
            }
        }
    )
    if(flag===0)
    {
        return(
            <div>
                <Link className="btn btn-primary" to="/login">Login</Link>
                <Link className="btn btn-secondary" to="/register">Registration</Link>
            </div>
        )
    }
    else
    {
        return(
            <div>
                <Link class="btn btn-warning" to="/logout">Logout</Link>
            </div>
        )
    }
}
export default Header;