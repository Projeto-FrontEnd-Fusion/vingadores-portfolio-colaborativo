import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const techs = [
    "HTML", "CSS", "JavaScript", "React", "Tailwind", "TypeScript", "Zustand",
    "Node.js", "Next.js", "PostgreSQL", "Prisma ORM", "MongoDB"
];

const TechStack: React.FC = () => {
    return (
        <section className="py-16 text-center bg-[#0a0a23] text-white">
            <h2 className="text-3xl font-bold">Impulsionados por tecnologia</h2>
            <p className="text-lg text-gray-400 mt-2">
                As linguagens de programação que fazem nosso projeto ganhar vida
            </p>

            <div className="mt-8">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    slidesPerView={"auto"}
                    spaceBetween={20}
                    centeredSlides={false}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        480: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 6 }
                    }}
                    aria-label="Carrossel de tecnologias utilizadas no projeto"
                >
                    {techs.map((tech) => (
                        <SwiperSlide key={tech} className="flex justify-center">
                            <div className="w-32 h-32 flex items-center justify-center rounded-full bg-[radial-gradient(circle,_rgba(10,9,32,0.5)_0%,_rgba(100,109,240,0.8)_100%)] shadow-[0_0_15px_rgba(100,109,240,0.6)]">
                                <p className="text-lg font-semibold">{tech}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TechStack;