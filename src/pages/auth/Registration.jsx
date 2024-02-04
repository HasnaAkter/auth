
import { useRef,useState,useEffect } from "react";
const Registration = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState('false');
    const [userFocus, setUserFocus] = useState('false');

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState('false');
    const [pwdFocus, setPwdFocus] = useState('false');

    const [matchPwd, setMatch] = useState('');
    const [validMatch, setValidMatch] = useState('false');
    const [matchFocus, setMatchFocus] = useState('false');

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState('false');

    useEffect(() =>{
        useRef.current.focus();
    }, [])

    useEffect(() =>{
        const result = USER_REGEx.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);

    },[user])
    useEffect(() =>{
        const result = USER_REGEx.test(upwd);
        console.log(result);
        console.log(pwd);
        setValidName(result);
      const 
    },[user])
    

    return (
        <div>
            
        </div>
    );
};

export default Registration;