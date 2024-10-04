import bannerImg from "../../../assets/image/Mask group.jpg";

const Banner = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className=" pt-10 flex items-center justify-between flex-col lg:flex-row sm:gap-20 md:gap-20 lg:gap-0">
          <div>
            <h2 className=" text-5xl font-bold max-w-xl pb-5 mx-auto">
              <span className="text-indigo-500">Welcome</span> To Our Website
              For <span className="text-indigo-500">Purches Products</span>
            </h2>
            <p className=" pt-5 max-w-md ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
              Lectus mauris eros in vitae .
            </p>
            <button>
              <a className=" mt-5 btn bg-gradient-to-r from-indigo-400 to-purple-400 rounded-xl hover:text-orange-600 semibold">
                Get More Access
              </a>
            </button>
          </div>
          <img className="pt-10 ps-7 pr-7 " src={bannerImg} alt="bannerImg" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
