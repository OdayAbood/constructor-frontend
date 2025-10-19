import React , {useState} from 'react'
import { useNavigate } from "react-router-dom";

export const EmployeeHook = () => {
   const Navigate = useNavigate();
     const [isLoading , setLoading] = useState(false);
     const [employees , setEmployees] = useState([]);
       const [emp , setEmp] = useState({});
       const [recent , setRecent] = useState(null);
     const newEmployee = async (user , setError)=>{
        setLoading(true);
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/employee/newemployee`,{
            method : "POST",
            credentials : 'include',
            headers : {"Content-Type" : "application/json"} ,
            body : JSON.stringify(user)
        })
        const json = await res.json();

        console.log(json);

        if(json.succeed){
           
            setLoading(false);
            // Navigate("/signin");
        }
        if(json.succeed === false){
            setLoading(false);
            if(json.mess) setError(json.mess);
            if(json.err) ;
        }
    }
    const getALLEmployees = async ()=>{
           setLoading(true);
           
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/employee/employees`,{
            method:"GET",
            headers : {"Content-Type" : "application/json"},
            credentials : 'include'
        })
        // console.log(res)
        const json = await res.json();

        // console.log(json)

        if(json.succeed) {

            setEmployees(json.employees)
            setLoading(false);
        }
        if(json.succeed === false){
            setLoading(false);
            // console.log(json);
        }
    }
    const showDetailEmp = async (employeeid)=>{
        
        // setLoading(true);
         const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/employee/employee/${employeeid}`,{
            method:"GET",
            headers : {"Content-Type" : "application/json"},
            credentials : 'include'
        })
        const json = await res.json();

        setLoading(false);
        if(json.succeed){
            // console.log(json);
             setEmp(json) ;
            //  console.log(emp);
            }
        else console.log(json);
    }
    const recentEmployee = async ()=>{
        
        // setLoading(true);
         const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/employee/recent`,{
            method:"GET",
            headers : {"Content-Type" : "application/json"},
            credentials : 'include'
        })
        const json = await res.json();

        setLoading(false);
        if(json.succeed){
            // console.log(json);
             setRecent(json)
            //  console.log(emp);
            }
        else console.log(json);
    }
    const fireEmployee = async (employeeid)=>{
         const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/employee/fire/${employeeid}`,{
            method:"PATCH",
            headers : {"Content-Type" : "application/json"},
            credentials : 'include'
        }) ;
        const json = await res.json();

        setLoading(false);

        if(json) console.log(json);

    }
    const addEmployeeToTeam = async (teamid , employeeid)=>{
         const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/addemployeetoteam/${employeeid}`,{
            method:"PATCH",
            headers : {"Content-Type" : "application/json"},
            credentials : 'include' ,
            body : JSON.stringify(teamid)
        }) ;
         const json = await res.json();

        setLoading(false);

        if(json) console.log(json);

    }
  return {newEmployee , isLoading , employees , getALLEmployees , showDetailEmp , fireEmployee , addEmployeeToTeam , emp , recent , recentEmployee};
}
