import React , {useState} from 'react'

export const PayrollHook= () => {
     const [isLoading , setLoading] = useState(false);
     const [payrolls , setPayrolls] = useState([]);

     const addSalary = async (id , salary , setError)=>{
        setLoading(true)
        console.log("payroll hokk" , salary)

        console.log("id : " , id , salary)

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/payroll/update/salary/${id}`, {
            method : "PATCH",
            credentials : "include" ,
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(salary)
        })
console.log(res);
        const json = await res.json();

        console.log(json);

        setLoading(false);
    if(json.succeed){
        console.log(json);
         window.location.reload();
    }
     if(json.succeed === false){
            setLoading(false);
            if(json.mess) setError(json.mess);
            if(json.err) ;
        }
     }
     const addBounce = async (id , bounce , setError)=>{
        setLoading(true)

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/payroll/bounce/add/${id}`, {
            method : "POST",
            credentials : "include" ,
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(bounce)
        })

        const json = await res.json();

        setLoading(false);
    if(json.succeed){
        console.log(json);
        window.location.reload();
    }
     if(json.succeed === false){
            setLoading(false);
            if(json.mess) setError(json.mess);
            if(json.err) ;
        }
     }
     const addSalaryDeduction = async (id , salaryDeduction , setError)=>{
        setLoading(true);

        console.log(salaryDeduction);
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/payroll/deduction/add/${id}`, {
            method : "POST",
            credentials : "include" ,
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(salaryDeduction)
        })

        const json = await res.json();

        setLoading(false);
        console.log(json)
    if(json.succeed){
        console.log(json);
         window.location.reload();
    }
     if(json.succeed === false){
            setLoading(false);
            if(json.mess) setError(json.mess);
            if(json.err) ;
        }
     }
     const getAllPayroll = async ()=>{
          setLoading(true)
           const res = await await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/payroll/payrolls`,{
            method : "GET",
            headers : {
                'Content-Type' : 'application/json'
            },
            credentials : 'include',
        })
        const json = await res.json();
     
        console.log(json);
     
        if(json.succeed){
           
            setLoading(false);
            setPayrolls(json.pays);
            // Navigate("/signin");
        }
        if(json.succeed === false){
            setLoading(false);
                console.log(json);
            if(json.mess) 
            if(json.err) ;
        }
    }
    const getPayrollUser = async ()=>{
         setLoading(true)
          const res = await await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/payroll/payrolls/user`,{
           method : "GET",
           headers : {
                'Content-Type' : 'application/json'
            },
           credentials : 'include',
       })
       const json = await res.json();
     
       console.log(json);
     
       if(json.succeed){
          
           setLoading(false);
           setPayrolls(json.pays);
           // Navigate("/signin");
       }
       if(json.succeed === false){
            console.log(json);
           setLoading(false);
           if(json.mess) 
           if(json.err) ;
       }

     }

     return { isLoading , payrolls , addBounce , addSalary , addSalaryDeduction , getAllPayroll , getPayrollUser}
    }


