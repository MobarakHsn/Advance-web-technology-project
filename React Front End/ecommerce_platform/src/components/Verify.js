import {useState,useEffect} from 'react';
import axios from 'axios';
const Verify=()=>{
    const [email,setEmail]=useState("");
    const [code,setCode]=useState("");
    const [smsg,setSmsg]=useState("");
    const [emsg,setEmsg]=useState("");

    useEffect(function(){
        let x=localStorage.getItem("infos");
        x=JSON.parse(x);
        setEmail(x.email);
    },[]);
    const handleForm=(event)=>{
        event.preventDefault();
        let x=localStorage.getItem("infos");
        x=JSON.parse(x);
        //debugger;
        if(x.code==code)
        {
            var cr={"id":x.uc_id,"user_status":1};
            axios.post("http://localhost:8000/admin/api/user/change/access",cr).then(function(rsp){
            },function(err){
            });
            setSmsg("Email successfully verified now you can login to your accout :)");
            setEmsg("");
        }
        else
        {
            setEmsg("Code did not matched please try again!");
            setSmsg("");
        }
    }
    return(
        <form onSubmit={handleForm}>
            Verification code sent to:{email}
            <table>
                <tr>
                    <td>
                        Enter verification code:
                    </td>
                    <td>
                        <input type="text" onChange={(event)=>{setCode(event.target.value)}} value={code}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="submit" value="Verify"></input>
                    </td>
                </tr>
            </table>
            <span className="text-danger">
                {emsg}
            </span>
            <span className="text-success">
                {smsg}
            </span>
        </form>
    )
}
export default Verify;