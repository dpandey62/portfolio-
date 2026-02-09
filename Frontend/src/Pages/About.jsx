
function About() {


    return (
        <>
            <div className="flex items-center justify-center  bg-black p-6">
                <div className="text-center w-full md:max-w-[50%] text-gray-300">
                    <h1 className="text-4xl font-bold mb-4">About Me</h1>
                    <p className="text-xl mb-4 text-[#4FC3F7]">Get to Know Me</p>

                    <p className="mb-4">
                        Hi there! I'm Dev Pandey, a MERN Stack Developer specializing in MongoDB, Express.js,
                        React, and Node.js. With a passion for building scalable, high-performance web applications,
                        I help businesses create seamless digital experiences that drive growth.
                    </p>

                    <p className="mb-4">
                        From designing dynamic front-end interfaces with React to developing robust back-end solutions
                        with Node.js and Express, I bring a full-stack approach to modern web development. Whether it's
                        crafting RESTful APIs, integrating databases, or optimizing performance, I ensure that every project
                        is efficient, secure, and user-friendly.
                    </p>

                    <p className="mb-6">
                        Let's collaborate to build cutting-edge applications that elevate your business. Get in touch, and
                        let's turn your ideas into reality!
                    </p>

                    <button className="relative inline-flex items-center justify-center px-7 py-3 overflow-hidden font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <a
                            href="/Dev_PandeyME (1).pdf"
                            download="Dev_PandeyME (1).pdf"
                            className="flex items-center gap-2 text-white no-underline"
                        >
                            📄 Download Resume
                        </a>
                    </button>

                </div>
            </div>
        </>
    );
}

export default About;
