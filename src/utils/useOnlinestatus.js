import { useState, useEffect } from "react";
export default function useOnlinestatus() {
  const [status, setstatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", ()=>{
        setstatus(true)
    });
    window.addEventListener("offline", ()=>{
        setstatus(false)
    });
  },[]);

  return status;
}