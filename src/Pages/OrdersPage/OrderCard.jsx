
const OrderCard = ({ order }) => {
    return (
        <div className="card bg-orange-200 shadow-xl">
            {/* <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
            <div className="card-body flex flex-row gap-6">
                <div>
                    <h2 className="card-title">Order Details</h2>
                    <p>Service Id: {order?.service_id}</p>
                    <p>Paid Amount: {order?.paidAmount}</p>
                    <p>Date of Order: {order?.orderDate}</p>
                </div>
                <div className="">
                    <h1 className="text-2xl">Buyer Details</h1>
                    <p>Buyer Name: {order?.buyerName}</p>
                    <p>Buyer Email: {order?.buyerEmail}</p>
                    <p>Buyer Id: {order?._id}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;