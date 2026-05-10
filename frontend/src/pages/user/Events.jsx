import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/layout/loading";

const Events = () => {
    const [event, setEvent] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
            return;
        }

        axios.get("http://localhost:8000/api/events", {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json"
            }
        })
        .then(res => {
            setEvent(res.data);
            console.log(res.data)
        })
        .catch(er => {
            console.log("Error:", er.response?.status);

            if (er.response?.status === 401) {
                localStorage.removeItem("token");
                navigate("/login");
            }
        });

    }, [navigate]);

    if (!event.length) {
        return (
            <Loading/>
        );
    }

    return (
        <div>Events</div>
    );
};

export default Events;