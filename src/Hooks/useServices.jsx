import axios from "axios";
import { useEffect, useState } from "react";

const useServices = (ascending) => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/services?sort=${ascending ? 'asc' : 'desc'}`)
        .then(response => {
            console.log(response.data)
            setServices(response?.data)
        }).catch(error=> {
            console.error(error.message)
        })
    },[ascending])
    console.log(services)

    return services
};

export default useServices;