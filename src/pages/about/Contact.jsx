import React from 'react';

const ContactUs = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="p-4 bg-white rounded shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

                <div className="mb-4">
                    <h3 className="font-semibold">Mobile Number:</h3>
                    <p>+91 1234567890</p>
                </div>

                <div className="mb-4">
                    <h3 className="font-semibold">Email:</h3>
                    <p>contactus@example.com</p>
                </div>

                <div className="mb-4">
                    <h3 className="font-semibold">Location:</h3>
                    <div className="w-full h-64">
                        {/* Replace the iframe src with your Google Maps embed link */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.328411490491!2d77.21672131507853!3d28.613939082422132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1630493124388!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
