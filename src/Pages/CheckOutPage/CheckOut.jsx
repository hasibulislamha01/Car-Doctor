import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const data = useLoaderData();
    const service = data[0]


    const handleCheckOut = (event) => {
        event.preventDefault()
        const form = event.target;
        const buyerName = form.name.value;
        const buyerEmail = form.email.value;
        const orderDate = form.date.value;
        const paidAmount = service?.price;
        const order = {
            buyerName,
            buyerEmail,
            orderDate,
            paidAmount,
            service_id: service?._id
        }
        console.log(order)

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(order)

        })
        .then(res => res.json())
        .then(data => console.log(data))
        toast.success('CheckOut Successful')
    }


    return (
        <div className="bg-[#F3F3F3] rounded-xl mt-12 px-28 py-24">
            <form onSubmit={handleCheckOut}>
                <div className="grid grid-cols-2 gap-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="input w-full"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="input w-full"
                    />
                    <input
                        type="datetime-local"
                        placeholder="Date"
                        name="date"
                        // defaultValue={}
                        className="input w-full"
                    />
                    <div className="bg-white input flex items-center text-rose-500 font-medium">
                        {`Amount to be paid ${service?.price} $`}
                    </div>

                </div>

                <div className="space-y-6 mt-6">
                    <textarea
                        className="textarea w-full"
                        placeholder="Your Message">
                            
                    </textarea>
                    <button className="btn btn-block bg-[#FF3811] text-white">Confirm Order</button>
                </div>
            </form>

        </div>
    );
};

export default CheckOut;