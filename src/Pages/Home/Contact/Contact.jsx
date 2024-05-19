
import { Slide, Zoom } from "react-awesome-reveal";
import { FaAngleRight } from "react-icons/fa";
// import { FaAngleRight } from "react-icons/fa";

const Contact = () => {
  return (



    <div className="bg-slate-100 grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:text-gray-100">
      <div className="flex flex-col justify-between">
        <Zoom>
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leadi lg:text-5xl dark:text-[#00aaff]">Let's talk!</h2>
            <div className="dark:text-black">Vivamus in nisl metus? Phasellus.</div>
          </div>
        </Zoom>
        <Slide direction="left">
        <img src="https://i.ibb.co/SrK76xq/13184991-5138237.jpg" alt="" className="p-6 h-52 w-96 md:h-72 " />
        </Slide>
      </div>
     <Slide direction={"up"}>
     <form novalidate="" className="space-y-6 ">
        <div>
          <label for="name" className="text-sm dark:text-black">Full name</label>
          <input id="name" type="text" placeholder="" className="w-full p-3 rounded border border-blue-400" />
        </div>
        <div>
          <label for="email" className="text-sm dark:text-black">Email</label>
          <input id="email" type="email" className="w-full p-3 rounded border border-blue-400" />
        </div>
        <div>
          <label for="message" className="text-sm dark:text-black">Message</label>
          <textarea id="message" rows="3" className="w-full p-3 rounded border border-blue-400"></textarea>
        </div>
        <button className="btn btn-outline btn-sm py-2 px-4 mt-4 text-black">Send Message<FaAngleRight /></button>
      </form>
     </Slide>
    </div>

    // <section className="  flex flex-col justify-center items-center mt-4">
    //   <Zoom>
    //     <h2 className="text-3xl text-orange-400 font-bold my-8 ">
    //       If any query, please inform us
    //     </h2>
    //   </Zoom>
    //   <div className="w-3/4 md:w-1/2 mt-5">
    //     <Slide direction={"up"}>
    //       <form>
    //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //           <input
    //             placeholder="First Name"
    //             className="rounded px-2 py-4 form-control"
    //             type="text"
    //             name="firstName"
    //           />
    //           <input
    //             placeholder="Last Name"
    //             className="rounded px-2 py-4 form-control"
    //             type="text"
    //             name="lastName"
    //           />
    //           <input
    //             placeholder="Email"
    //             className="rounded px-2 py-4 form-control"
    //             type="text"
    //             name="email"
    //           />
    //           <input
    //             placeholder="Phone Number"
    //             className="rounded px-2 py-4 form-control"
    //             type="text"
    //             name="phoneNumber"
    //           />
    //         </div>
    //         <textarea
    //           placeholder="Your message..."
    //           className="rounded w-full px-2 py-4 form-control mt-4"
    //           type="text"
    //           name="message"
    //         />
    //         <div className="text-center mb-8">
    //           <Zoom>
    //             <button className="btn btn-outline btn-sm py-2 px-4 mt-4">
    //               Send Message <FaAngleRight />
    //             </button>
    //           </Zoom>
    //         </div>
    //       </form>
    //     </Slide>
    //   </div>
    // </section>
  );
};

export default Contact;