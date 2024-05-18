import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import axios from 'axios';
import { FaSort } from 'react-icons/fa';
import useServices from '../Hooks/useServices';

const Services = () => {

    const [ascending, setAscending] = useState(true)
    useEffect(() => {
        // axios.get('http://localhost:5000/services')
        // fetch('http://localhost:5000/services', )
        // .then(res => { setServices(res.data) })
        // .then(data => setServices(data))
    }, [])
    // console.log(services)
    const services = useServices(ascending)

    return (
        <div className='mt-24 space-y-6'>
            <div className='text-center'>
                <h1 className="text-orange-500 text-center text-3xl">Our services</h1>
                <p>
                    the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable.
                </p>
            </div>
            <div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By<FaSort /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Price high to low</a></li>
                        <li><a>Price low to high</a></li>
                    </ul>
                </div>
                <button className='btn btn-accent' onClick={()=>setAscending(!ascending)}>Price 
                    {
                        ascending? ' high to low'
                        : ' low to high'
                    }
                </button>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        services?.map(service =>
                            <ServiceCard
                                key={service?._id}
                                service={service}
                            ></ServiceCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Services;