import {
    FaGithub, FaLinkedin, FaEnvelope, FaUser
} from 'react-icons/fa';

const ContactSection = () => {
    return (
        <section className="py-16 bg-saffron-800 bg-[url(/images/bg.png)] bg-center" id={'contact'}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold text-gray-800 mb-4">Let's Connect</h2>
                    <p className="text-gray-800 max-w-2xl mx-auto">
                        Feel free to reach out for collaborations, project works, or just to say hello!
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {/* Social Links Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                        {/* GitHub */}
                        <a
                            href="https://github.com/abhaylonkar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-6 bg-white rounded-lg border shadow-[3px_3px_0_#000] active:translate-1 active:shadow     transition-shadow duration-300"
                        >
                            <FaGithub className="text-3xl text-gray-800" />
                            <div className="ml-4">
                                <h3 className="font-semibold text-gray-800">GitHub</h3>
                                <p className="text-sm text-gray-600">Check out my projects</p>
                            </div>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com/in/abhaylonkar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-6 bg-white rounded-lg border shadow-[3px_3px_0_#000] active:translate-1 active:shadow transition-shadow duration-300"
                        >
                            <FaLinkedin className="text-3xl text-blue-600" />
                            <div className="ml-4">
                                <h3 className="font-semibold text-gray-800">LinkedIn</h3>
                                <p className="text-sm text-gray-600">Professional network</p>
                            </div>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:abhaylonkar9@gmail.com"
                            className="flex items-center p-6 bg-white rounded-lg border shadow-[3px_3px_0_#000] active:translate-1 active:shadow transition-shadow duration-300"
                        >
                            <FaEnvelope className="text-3xl text-red-500" />
                            <div className="ml-4">
                                <h3 className="font-semibold text-gray-800">Email</h3>
                                <p className="text-sm text-gray-600">Direct contact</p>
                            </div>
                        </a>

                        {/* Visit Portfolio */}
                        <a
                            href="https://abhaylonkar.github.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-6 bg-white rounded-lg border shadow-[3px_3px_0_#000] active:translate-1 active:shadow transition-shadow duration-300"
                        >
                            <FaUser className="text-3xl text-indigo-600" />
                            <div className="ml-4">
                                <h3 className="font-semibold text-gray-800">Portfolio</h3>
                                <p className="text-sm text-gray-600">View my work</p>
                            </div>
                        </a>

                    </div>

                    {/* Additional Contact Info */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-800">
                            Currently available for new opportunities and collaborations
                        </p>
                        <p className="text-gray-800 mt-2">
                            Response time: Within 24-48 hours
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;