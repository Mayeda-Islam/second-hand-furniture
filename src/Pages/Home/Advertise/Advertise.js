import React from "react";
import img1 from '../../../assests/advertise/img-1.jpg'
import img2 from '../../../assests/advertise/img-2.jpg'
import img3 from '../../../assests/advertise/img-3.jpg'
import img4 from '../../../assests/advertise/img-4.jpg'
import img5 from '../../../assests/advertise/img-5.jpg'
import img6 from '../../../assests/advertise/img-6.jpg'
import img7 from '../../../assests/advertise/img-7.jpg'
import img8 from '../../../assests/advertise/img-8.jpg'

const Advertise = () => {

  return (
    <div className="">
      
      <h1 className="text-center font-bold py-10 mt-5 text-3xl dark:text-white">
        Our Product Gallery
      </h1>
      <div className="container lg:px-32 px-4 py-8 mx-auto items-center ">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-4 lg:grid-flow-col gap-2">
          <div className="w-full row-span-2">
            <img
              src={img8}
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100"
            />
          </div>
          <div className="w-full col-span-2 row-span-2">
            <img
              src={img1}
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full ">
            <img
              src={img4}
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full">
            <img
              src={img5}
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full col-span-2 row-span-2">
            <img
              src={img3}
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>

          <div className="w-full col-span-2">
            <img
              src={img2}
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full">
            <img
              src={img6}
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full">
            <img
              src={img7}
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Advertise;
