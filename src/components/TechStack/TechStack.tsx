

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const techs = [
    "HTML", "CSS", "JavaScript", "React", "Tailwind", "TypeScript", "Zustand",
    "Node.js", "Next.js", "PostgreSQL", "Prisma ORM", "MongoDB"
];

const TechStack: React.FC = () => {
    return (
        <section className="py-16 text-center bg-[#0a0a23] text-white">
            <h2 className="text-3xl">Impulsionados por tecnologia</h2>
            <p className="text-lg text-gray-400">
                As linguagens de programação que fazem nosso projeto ganhar vida
            </p>


            <div className="mt-8">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    slidesPerView={6}
                    spaceBetween={20}
                    centeredSlides={false}
                >
                    {techs.map((tech, index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                            <div className="w-32 h-32 flex items-center justify-center rounded-full bg-[radial-gradient(circle,_#0A09207A_0%,_#646DF08F_100%)] shadow-[0_0_20px_#646DF08F]">
                                <p className="text-lg font-medium">{tech}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TechStack;
