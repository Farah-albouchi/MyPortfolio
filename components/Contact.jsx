import { useRef } from "react";
import { Button } from "@mui/material";
import { Phone, LocationOn, Email } from "@mui/icons-material";
import emailjs from "@emailjs/browser";


const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4igx6fi", 
        "template_xwme9rd", 
        form.current,
        "uzikqhMrBn8dpEgKy" 
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Your message has been sent successfully!");
          form.current.reset(); 
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("There was an error sending your message. Please try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className=" bg-Contact border-t  bg-cover min-h-screen flex flex-col justify-center items-center px-4"
      style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #331c52, #2b1b4d, #241948, #1d1742, #16153d, #101337, #0b0f31, #050b2b);' }}
    >
      {/* Header Section */}
      <h1 className=" text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-blue-500  bg-clip-text text-transparent" >Contact <span className=" bg-gradient-to-r to-pink-500  from-blue-500  bg-clip-text text-transparent">Me</span></h1>
      <h2 className="text-white text-center text-3xl font-semibold mb-10">
        Request Free Consultancy
      </h2>

      {/* Content */}
      <div className="flex flex-col sm:flex-row items-center w-full sm:w-3/4 lg:w-2/3 gap-10">
        {/* Contact Information Card */}
        <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-between w-full sm:w-1/3 text-left">
          <h3 className="text-lg font-bold text-gray-700 mb-4">Hotline 24/7</h3>
          <div className="flex items-center text-gray-600 mb-2">
            <Phone className="mr-2 text-purple0" /> (+216) 29790975
          </div>
          <div className="flex items-center text-gray-600 mb-2">
            <LocationOn className="mr-2 text-purple0" /> Monastir, Tunisia
          </div>
          <div className="flex items-center text-gray-600">
            <Email className="mr-2 text-purple0" /> farahalbouchi@gmail.com
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full sm:w-2/3">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col sm:flex-row gap-5 mb-5">
              <input
                className="rounded-lg w-full p-3 border border-gray-300 focus:border-purple0"
                type="text"
                placeholder="Your Name*"
                name="from_name"
                required
              />
              <input
                className="rounded-lg w-full p-3 border border-gray-300 focus:border-purple0"
                type="email"
                placeholder="Your Email Address*"
                name="mail"
                required
              />
            </div>
            <input
              className="rounded-lg w-full p-3 border border-gray-300 focus:border-purple0 mb-5"
              type="text"
              placeholder="Subject"
              name="subject"
              required
            />
            <textarea
              className="rounded-lg w-full p-3 border border-gray-300 focus:border-purple0 mb-5 h-36 resize-none"
              placeholder="Your Message*"
              name="message"
              required
            />
            {/* <div className="flex items-start mb-5">
              <input type="checkbox" id="agree" className="mt-1" required />
              <label htmlFor="agree" className="text-white ml-2 text-sm">
                By submitting, I agree to the{" "}
                <a href="#" className="text-purple-400 underline">
                  Terms & Conditions
                </a>
              </label>
            </div> */}
            <Button
              type="submit"
              className="text-[#ff00c3]"
              sx={{
                fontSize: 20,
                textTransform: "none",
                width: 200,
                height: 50,
                fontWeight: 700,
                borderRadius: 20,
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "#DCCFED",
                },
                color: "#ffffff",
              }}
            >
              Request Now
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
