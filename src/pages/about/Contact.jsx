import React from 'react';

const ContactUs = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100">
            <div className="p-4 bg-white rounded shadow-xl my-10">
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
                    <h3 className="font-semibold">Location:</h3>
                    <div className="w-full min-h-auto">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.9370329197936!2d73.10570917520839!3d19.197952382031914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795757569a46b%3A0x864b94d61f571b24!2sShivajirao%20S.%20Jondhale%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1697169250945!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
