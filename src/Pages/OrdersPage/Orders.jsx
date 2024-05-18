import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/UserManagement/AuthProvider";
// import axios from "axios";
import OrderCard from "./OrderCard";

const Orders = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    // const data = useLoaderData()
    console.log(user?.email)
    const url = `http://localhost:5000/orders?buyerEmail=${user?.email}`;

    useEffect(() => {
        fetch(`http://localhost:5000/orders?buyerEmail=${user?.email}`, {
            method: 'GET',
            credentials: 'include'
        })
            .then(response => {
                // Check response headers for Set-Cookie
                const cookieHeader = response.headers.get('Set-Cookie');
                console.log('Set-Cookie header:', cookieHeader);
                return response.json();
            })
            .then(data => {
                setOrders(data)
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, [url])

    console.log('Orders are:',orders)
    return (
        <div className="mt-12">
            <p className="text-3xl text-center font-semibold text-orange-500">
                You have {orders.length} orders to recieve
            </p>
            <div className="space-y-6 mt-12">
                {
                    orders?.map(order =>
                        <OrderCard
                            key={order._id}
                            order={order}
                        ></OrderCard>
                    )
                }
            </div>
        </div>
    );
};

export default Orders;