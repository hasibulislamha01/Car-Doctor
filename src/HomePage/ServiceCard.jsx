import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ServiceCard = ({ service }) => {
    console.log(typeof service?._id);
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={service?.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{service?.title}</h2>
                    <p>{service?.price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/checkout/${service?._id}`}>
                            <button className="btn btn-ghost text-orange-500 text-3xl"><GoArrowRight /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object
}

export default ServiceCard;