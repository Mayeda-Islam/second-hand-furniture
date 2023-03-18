import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { ImLocation, ImPhone } from "react-icons/im";
import { SiMinutemailer } from "react-icons/si";
import aboutUsImg from "../../../assests/aboutus/about us.png";
import AOS from "aos";
import "aos/dist/aos.css";
const ContactMe = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_qc8bgxp",
    //     "template_8csnen5",
    //     form.current,
    //     "0VgFfJkeFLFxThSn3"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       console.log("successful");
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container mx-auto mb-28 ">
      <h1 className="text-center font-bold py-4 my-5 text-3xl dark:text-white">
        Contact Us
      </h1>
      <hr className="mb-12" />

      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        style={{
          backgroundColor: "#0c0c0c",
          background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('${aboutUsImg}')`,
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
        }}
        className=" lg:flex  flex-row-reverse  p-20"
      >
        <div className="w-full lg:w-2/3  backdrop-opacity-30 ">
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              id="contact"
              className="p-12"
              action=""
              method="post"
            >
              <div className="row">
                <div>
                  <fieldset>
                    <input
                      {...register("user_name")}
                      style={{
                        backgroundColor: "rgba(250, 250, 250, 0.15)",
                      }}
                      name="user_name"
                      type="text"
                      className="pl-4 placeholder-white font-medium w-full h-10 mb-6 text-white text-md border-none rounded-none text-md"
                      id="name"
                      placeholder="Your name..."
                      required=""
                    />
                  </fieldset>
                </div>
                <div>
                  <fieldset>
                    <input
                      {...register("user_email")}
                      name="user_email"
                      type="email"
                      style={{
                        backgroundColor: "rgba(250, 250, 250, 0.15)",
                      }}
                      className="pl-4 placeholder-white font-medium w-full h-10 mb-6 text-white text-md border-none rounded-none text-md"
                      id="email"
                      placeholder="Your email..."
                      required=""
                    />
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <input
                      {...register("subject")}
                      name="subject"
                      type="text"
                      style={{
                        backgroundColor: "rgba(250, 250, 250, 0.15)",
                      }}
                      className="pl-4 placeholder-white font-medium w-full  h-10 mb-6 text-white text-md border-none rounded-none text-md"
                      id="subject"
                      placeholder="Subject..."
                      required=""
                    />
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <textarea
                      {...register("message")}
                      name="message"
                      style={{
                        backgroundColor: "rgba(250, 250, 250, 0.15)",
                      }}
                      rows="6"
                      className="pl-4 placeholder-white font-medium w-full pt-2 h-40 max-h-56 mb-6 text-white text-md border-none rounded-none text-md"
                      id="message"
                      placeholder="Your message..."
                      required=""
                    ></textarea>
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <button
                      style={{
                        backgroundColor: "#bc9864",
                        border: "#bc9864",
                      }}
                      type="submit"
                      id="form-submit"
                      className="max-w-full text-white w-full inline-block text-md decoration-none no-underline uppercase bg-transparent transition-all px-4 py-2 border-2 font-semibold"
                    >
                      Send Now
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full flex  items-start  flex-col lg:w-1/3">
          <div className="text-start mt-14 mb-4 px-12 text-white">
            <div className="flex items-center  ">
              {" "}
              <ImLocation className="text-xl -mt-14"></ImLocation>
              <h1
                style={{ color: "#bc9864" }}
                className=" -mt-14 text-xl font-medium"
              >
                Address :
              </h1>
              <div className=" text-xl">
                <p>198 West 21th Street,</p>
                <p>New York</p>
                <p>House:03 </p>
              </div>
            </div>
          </div>
          <div className="text-start my-4 px-12 text-white ">
            <div className="flex items-center">
              {" "}
              <ImPhone className="text-xl"></ImPhone>
              <h1
                style={{ color: "#bc9864" }}
                className="mx-2 text-xl font-medium"
              >
                Phone :
              </h1>
              <div className="text-xl">
                <p>90354679570</p>
              </div>
            </div>
          </div>
          <div className="text-start my-4 px-12 text-white">
            <div className="flex items-center">
              {" "}
              <SiMinutemailer className="text-xl"></SiMinutemailer>
              <h1
                style={{ color: "#bc9864" }}
                className="mx-2 text-xl font-medium"
              >
                Email :
              </h1>
              <div>
                <p className="text-xl">iyoito@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
