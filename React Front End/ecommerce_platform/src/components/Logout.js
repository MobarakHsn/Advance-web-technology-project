import {useEffect} from 'react';
const Logout=()=>{
    useEffect(function(){
        localStorage.clear();
        window.location.href="/";
    },[]);
}
export default Logout;