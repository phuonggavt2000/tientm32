function SliderPlaybox({ img, title, desc }) {
    return (
        <div className="relative rounded-xl overflow-hidden w-full">
            <img src={img} alt="fpt play" className="w-full" />
            <span className="absolute top-1/2 translate-x-1/2 w-full flex justify-center items-center right-1/2 font-semibold text-white text-2xl px-4">
                {title}
            </span>

            <div className="absolute bottom-0 px-6 py-4 rounded-xl w-full">
                <div className="absolute bg-[rgba(220,218,218,0.5)]  inset-0"></div>
                <span className="text-white relative z-10 text-sm">{desc}</span>
            </div>
        </div>
    );
}

export default SliderPlaybox;
