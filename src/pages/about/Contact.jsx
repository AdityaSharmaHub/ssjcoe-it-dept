import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
    const notify = () => {
        toast.success("Thanks ! Your form has been submitted successfully", {
            position: toast.POSITION.TOP_CENTER
          });
    };
    const [state, handleSubmit] = useForm("xeqbnprr");
    if (state.succeeded) {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
    }
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100">
            <div className="bg-white rounded shadow-xl my-10 flex gap-10 flex-col md:flex-row justify-center container" style={{ padding: 20 }}>
                <div className="md:w-[50%] w-[100%]">
                    <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

                    <div className="mb-4">
                        <h3 className="font-semibold">Mobile Number:</h3>
                        <p>+91 1234567890</p>
                    </div>

                    <div className="mb-4">
                        <h3 className="font-semibold">Email:</h3>
                        <p>contactus@example.com</p>
                    </div>

                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Location:</h3>
                        <div className="w-full min-h-auto">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.9370329197936!2d73.10570917520839!3d19.197952382031914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795757569a46b%3A0x864b94d61f571b24!2sShivajirao%20S.%20Jondhale%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1697169250945!5m2!1sen!2sin" allowfullscreen="" loading="lazy" className="w-full h-[400px]" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>

                <div className="md:w-[50%] w-[100%]">
                    <h2 className="text-2xl font-bold">Send a message</h2>
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label
                                htmlFor="name"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Name
                            </label>
                            <input
                                name="name"
                                id="name"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-blue-900 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                required
                            />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                name="email"
                                id="email"
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-blue-900 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                required
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="subject"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Subject
                            </label>
                            <input
                                name="subject"
                                id="subject"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-blue-900 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                required
                            />
                            <ValidationError
                                prefix="Subject"
                                field="subject"
                                errors={state.errors}
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="message"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                className="block w-full px-4 py-2 mt-2 text-blue-900 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" rows={8} placeholder="Type your message here..." required>
                            </textarea>
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" disabled={state.submitting} onClick={notify}>
                                Send message
                            </button>
                            <ToastContainer />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
