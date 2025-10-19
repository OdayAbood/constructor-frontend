import React , {useState} from 'react'

export const LeaveHook = () => {
     const [isLoading , setLoading] = useState(false);
     const [leaves , setLeaves] = useState([]);
            const [recentLeave , setRecent] = useState(null);

     const newLeave = async (leave , setError)=>{
            setLoading(true);
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/leave/newleave`,{
            method : "POST",
            credentials : 'include',
            headers : {"Content-Type" : "application/json"} ,
            body : JSON.stringify(leave)
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
     const deleteLeave = async (id)=>{
        setLoading(true);
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/leave/delete/${id}`,{
            method : "DELETE",
            headers : {
                'Content-Type' : 'application/json'
            },
            credentials : 'include',
        })
        const json = await res.json();

      

        if(json.succeed){
           
            setLoading(false);
            // Navigate("/signin");
        }
        if(json.succeed === false){
            setLoading(false);
            if(json.mess) 
            if(json.err) ;
        }
     }
     const acceptLeave = async (id)=>{
        setLoading(true);

        
           const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/leave/accept/${id}`,{
            method : "PATCH",
               headers : {
                'Content-Type' : 'application/json'
            },
            credentials : 'include',
        })
        const json = await res.json();

       

        if(json.succeed){
           
            setLoading(false);
            // Navigate("/signin");
        }
        if(json.succeed === false){
            setLoading(false);
            if(json.mess) 
            if(json.err) ;
        }
         
     }
     const refuseLeave = async (id)=>{
         setLoading(true)
           const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/leave/refuse/${id}`,{
            method : "PATCH",
               headers : {
                'Content-Type' : 'application/json'
            },
            credentials : 'include',
        })
        const json = await res.json();

        

        if(json.succeed){
           
            setLoading(false);
            // Navigate("/signin");
        }
        if(json.succeed === false){
            setLoading(false);
            if(json.mess) 
            if(json.err) ;
        }
     }
     const showDetailLeave = async (id)=>{
         setLoading(true)
           const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/leave/${id}`,{
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
            // Navigate("/signin");
        }
        if(json.succeed === false){
            setLoading(false);
            if(json.mess) 
            if(json.err) ;
        }
    }
    const getAllLeaves = async ()=>{
         setLoading(true)
           const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/leave/allleavess`,{
            method : "GET",
               headers : {
                'Content-Type' : 'application/json'
            },
            credentials : 'include',
        })
        const json = await res.json();
     
     
        if(json.succeed){
           
            setLoading(false);
            setLeaves(json.leaves);
            // Navigate("/signin");
        }
        if(json.succeed === false){
            setLoading(false);
            if(json.mess) 
            if(json.err) ;
        }

     }
     const getLeaveUser = async ()=>{
        setLoading(true)
           const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/leave/leaves/user`,{
            method : "GET",
               headers : {
                'Content-Type' : 'application/json'
            },
            credentials : 'include',
        })
        const json = await res.json();
     
     
        if(json.succeed){
           
            setLoading(false);
            setLeaves(json.leaves);
            // Navigate("/signin");
        }
        if(json.succeed === false){
            setLoading(false);
            if(json.mess) 
            if(json.err) ;
        }

     }
         const recentLeaves = async ()=>{
        
        // setLoading(true);
         const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/leave/recent`,{
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

     return {newLeave , isLoading , leaves , deleteLeave , acceptLeave , refuseLeave , showDetailLeave , getAllLeaves , getLeaveUser , recentLeaves , recentLeave}
    }


