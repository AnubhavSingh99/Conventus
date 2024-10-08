import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const VIPLeadershipCard = ({ name, role, image, description }) => (
    <motion.div
        className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 w-full max-w-md mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className="relative h-80 w-80 sm:h-88 sm:w-88 mx-auto mt-8 rounded-full overflow-hidden border-4 border-red-400">
            <Image
                src={image}
                alt={name}
                layout="fill"
                objectFit="cover"
                objectPosition="center 30%"
                className="transition-transform duration-300 hover:scale-110"
            />
        </div>
        <div className="p-6 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-1">{name}</h3>
            <p className="text-xl sm:text-2xl font-semibold text-red-400 mb-4">{role}</p>
            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">{description}</p>
        </div>
    </motion.div>
);

const LeadershipCard = ({ name, role, image, description }) => (
    <motion.div
        className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 w-full max-w-sm mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className="relative h-72 w-72 mx-auto mt-8 rounded-full overflow-hidden">
            <Image
                src={image}
                alt={name}
                layout="fill"
                objectFit="cover"
                objectPosition="center 30%"
                className="transition-transform duration-300 hover:scale-110"
            />
        </div>
        <div className="p-6 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-1">{name}</h3>
            <p className="text-lg sm:text-xl font-semibold text-red-400 mb-4">{role}</p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{description}</p>
        </div>
    </motion.div>
);

const Leadership = () => {
    const vipLeaders = [
        {
            name: "Dr. Jane Smith",
            role: "Faculty Advisor",
            image: "/images/President.jpg",
            description: "Dr. Smith brings decades of academic experience and guidance to Conventus, ensuring our activities align with educational goals and professional development."
        },
        {
            name: "John Doe",
            role: "Executive Director",
            image: "/images/Vice President.jpg",
            description: "John oversees the strategic direction of Conventus, leveraging his extensive background in student organizations and leadership development."
        },
    ];

    const leaders = [
        {
            name: "Manas Gupta",
            role: "President",
            image: "/images/President.jpg",
            description: "Manas is a visionary leader with a passion for innovation and community building. With his strategic mindset and inclusive approach, he's driving Conventus to new heights."
        },
        {
            name: "Pragya Singh",
            role: "Vice President",
            image: "/images/Vice President.jpg",
            description: "Pragya brings years of experience in event management and student engagement. Her creativity and dedication ensure that every Conventus event is a memorable success."
        },
        {
            name: "Yashraj Ranjan",
            role: "Vice President",
            image: "/images/Vice President2.jpg",
            description: "Yashraj excels in operations and logistics. His attention to detail and problem-solving skills help streamline Conventus's processes and enhance member experiences."
        }
    ];

    return (
        <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 text-gray-800"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Our Leadership
                </motion.h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
                    {vipLeaders.map((leader, index) => (
                        <VIPLeadershipCard key={index} {...leader} />
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                    {leaders.map((leader, index) => (
                        <LeadershipCard key={index} {...leader} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;