import {useState,useEffect} from 'react';
import axios from 'axios';
const Register=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confpassword,setConfpassword]=useState("");
    const [gender,setGender]=useState("");
    const [contact,setContact]=useState("");
    const [dob,setDob]=useState("");
    const [praddress,setPraddress]=useState("");
    const [peaddress,setPeaddress]=useState("");
    const [verifypost,setVerifypost]=useState("");
    
    
    const [post,setPost] = useState("");
    
    const [validatename,setValidatename]=useState("");
    const [validateemail,setValidateemail]=useState("");
    const [validatepassword,setValidatepassword]=useState("");
    const [validateconfpassword,setValidateconfpassword]=useState("");
    const [validategender,setValidategender]=useState("");
    const [validatecontact,setValidatecontact]=useState("");
    const [validatedob,setValidatedob]=useState("");
    const [validatepraddress,setValidatepraddress]=useState("");
    const [validatepeaddress,setValidatepeaddress]=useState("");

    useEffect(function(){
        if(post)
        {
            if(post.status===1)
            {
                var infos={
                    "email":email,
                }
                localStorage.setItem("infos",JSON.stringify(infos));
                axios.post("http://localhost:8000/admin/api/verification",infos).then(function(rsp){
                    setVerifypost(rsp.data);        
                    var infos={
                        "email":email,
                        "uc_id":post.uc_id,
                        "code":rsp.data.code
                    }
                    localStorage.setItem("infos",JSON.stringify(infos));
                    window.location.href="/verification";
                },function(err){
                    
                });
            }
            if(post.status===2)
            {
                if(post.errors.name)
                {
                    setValidatename(post.errors.name);
                }
                else
                {
                    setValidatename("");
                }

                if(post.errors.email)
                {
                    setValidateemail(post.errors.email);
                }
                else
                {
                    setValidateemail("");
                }

                if(post.errors.password)
                {
                    setValidatepassword(post.errors.password);
                }
                else
                {
                    setValidatepassword("");
                }

                if(post.errors.confPassword)
                {
                    setValidateconfpassword(post.errors.confPassword);
                }
                else
                {
                    setValidateconfpassword("");
                }
                if(post.errors.gender)
                {
                    setValidategender(post.errors.gender);
                }
                else
                {
                    setValidategender("");
                }

                if(post.errors.contact)
                {
                    setValidatecontact(post.errors.contact);
                }
                else
                {
                    setValidatecontact("");
                }
                if(post.errors.Praddress)
                {
                    setValidatepraddress(post.errors.Praddress);
                }
                else
                {
                    setValidatepraddress("");
                }

                if(post.errors.Peaddress)
                {
                    setValidatepeaddress(post.errors.Peaddress);
                }
                else
                {
                    setValidatepeaddress("");
                }

                if(post.errors.dob)
                {
                    setValidatedob(post.errors.dob);
                }
                else
                {
                    setValidatedob("");
                }
            }
        }
        else
        {
            setValidatename("");
            setValidateemail("");
            setValidatepassword("");
            setValidateconfpassword("");
            setValidategender("");
            setValidatecontact("");
            setValidatedob("");
            setValidatepraddress("");
            setValidatepeaddress("");
        }
    },[post]);


    const handleForm=(event)=>{
        event.preventDefault();
        var informations={"name":name,
                        "email":email,
                        "password":password,
                        "confPassword":confpassword,
                        "gender":gender,
                        "contact":contact,
                        "dob":dob,
                        "Praddress":praddress,
                        "Peaddress":peaddress};
        axios.post("http://localhost:8000/admin/api/admin/register",informations).then(function(rsp){
            setPost(rsp.data);
        },function(err){
            setValidatename("");
            setValidateemail("");
            setValidatepassword("");
            setValidateconfpassword("");
            setValidategender("");
            setValidatecontact("");
            setValidatedob("");
            setValidatepraddress("");
            setValidatepeaddress("");
        });
    }
    return(
        <form onSubmit={handleForm}>
            <br></br>
            <table>
                <tr>
                    <td>
                        Name:
                    </td>
                    <td>
                        <input type="text" onChange={(event)=>{setName(event.target.value)}} value={name}></input>
                    </td>
                    <td>
                        {validatename}
                    </td>
                </tr>
                <tr>
                    <td>
                        Email:
                    </td>
                    <td>
                        <input type="text" onChange={(event)=>{setEmail(event.target.value)}} value={email}></input>
                    </td>
                    <td>
                        {validateemail}
                    </td>
                </tr>
                <tr>
                    <td>
                        Password:
                    </td>
                    <td>
                        <input type="password" onChange={(event)=>{setPassword(event.target.value)}} value={password}></input>
                    </td>
                    <td>
                        {validatepassword}
                    </td>
                </tr>
                <tr>
                    <td>
                        Confirm password:
                    </td>
                    <td>
                        <input type="password" onChange={(event)=>{setConfpassword(event.target.value)}} value={confpassword}></input>
                    </td>
                    <td>
                        {validateconfpassword}
                    </td>
                </tr>
                <tr>
                    <td>
                        Gender:
                    </td>
                    <td>
                        <input type="radio" value="Male"  name="gender"  onChange={(event)=>{setGender(event.target.value)}} />
                        <label for="gender">Male</label><br></br>
                        <input type="radio" value="Female"  name="gender" onChange={(event)=>{setGender(event.target.value)}} /> 
                        <label for="gender">Female</label><br></br>
                    </td>
                    <td>
                        {validategender}
                    </td>
                </tr>
                <tr>
                    <td>
                        Date of Birth:
                    </td>
                    <td>
                        <input type="date" onChange={(event)=>{setDob(event.target.value)}} value={dob}  />
                    </td>
                    <td>
                        {validatedob}
                    </td>
                </tr>
                <tr>
                    <td>
                        Contact number:
                    </td>
                    <td>
                        <input type="text" onChange={(event)=>{setContact(event.target.value)}} value={contact}></input>
                    </td>
                    <td>
                        {validatecontact}
                    </td>
                </tr>
                <tr>
                    <td>
                        Present address:
                    </td>
                    <td>
                        <textarea onChange={(event)=>{setPraddress(event.target.value)}} value={praddress}></textarea>
                    </td>
                    <td>
                        {validatepraddress}
                    </td>
                </tr>
                <tr>
                    <td>
                        Permanent address:
                    </td>
                    <td>
                        <textarea onChange={(event)=>{setPeaddress(event.target.value)}} value={peaddress}></textarea>
                    </td>
                    <td>
                        {validatepeaddress}
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="submit" value="Submit"></input>
                    </td>
                </tr>
            </table>
        </form>
    )
}
export default Register;