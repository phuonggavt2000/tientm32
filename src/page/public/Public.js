import { Link, Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import icons from "../../ultis/icons";
import img from "../../asset/imgs/img";
import DropForm from "../../components/DropForm";
import { useEffect, useState } from "react";

function Public() {
    const { BsFillTelephoneFill } = icons;
    const [showForm, setShowForm] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowForm(true);
        }, 15000);
    }, []);

    const toggleForm = () => {
        setShowForm(!showForm);
    };
    return (
        <div className="overflow-y-auto h-full w-screen overflow-hidden flex flex-col bg-[#F9F9F9]">
            <Header />
            <Outlet />
            <Footer />
            {showForm && <DropForm toggleForm={toggleForm} />}

            <div className="fixed bottom-[4%] right-[1%] flex flex-col gap-y-4 text-white z-50">
                <Link
                    to="https://zalo.me/0939834623"
                    target="_blank"
                    className="bg-[#0057ff] p-3 rounded-full text-3xl "
                >
                    <img
                        src={img.zalo}
                        className="h-[30px] w-[30px]"
                        alt="zalo"
                    />
                </Link>
                <Link
                    to="tel:0939834623"
                    className="bg-[#00d574] p-3 rounded-full text-3xl"
                >
                    <BsFillTelephoneFill />
                </Link>
            </div>
        </div>
    );
}

export default Public;
