import axios from 'axios';
import {useState,useEffect} from 'react';

const Profile=()=>{
    const [userinfo,setUserinfo]=useState({});
    const [usercred,setUsercred]=useState({});

    useEffect(function(){
        let x=localStorage.getItem("obj");
        x=JSON.parse(x);
        let adrss='http://localhost:8000/admin/api/profile/'+x.uc_id;
        axios.get(adrss).then(function(rsp){
            setUserinfo(rsp.data.user_info);
            setUsercred(rsp.data.user_cred);
        },function(err){

        });
    },[]);
    return(
        <div>
            <table>
                <tr>
                    <td>
                        Name:
                    </td>
                    <td>
                        {userinfo.name}
                    </td>
                </tr>
                <tr>
                    <td>
                        Email:
                    </td>
                    <td>
                        {usercred.email}
                    </td>
                </tr>
                <tr>
                    <td>
                        Gender:
                    </td>
                    <td>
                        {userinfo.gender}
                    </td>
                </tr>
                <tr>
                    <td>
                        Date of Birth:
                    </td>
                    <td>
                        {userinfo.dob}
                    </td>
                </tr>
                <tr>
                    <td>
                        Contact no:
                    </td>
                    <td>
                        {userinfo.contact_no}
                    </td>
                </tr>
                <tr>
                    <td>
                        Present address:
                    </td>
                    <td>
                        {userinfo.present_address}
                    </td>
                </tr>
                <tr>
                    <td>
                        Permamnent address:
                    </td>
                    <td>
                        {userinfo.permanent_address}
                    </td>
                </tr>
            </table>
        </div>
    )
}
export default Profile;