import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
                    spaceBetween={30}
                    centeredSlides={false}
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 15 },
                        480: { slidesPerView: 3, spaceBetween: 20 },
                        768: { slidesPerView: 4, spaceBetween: 25 },
                        1024: { slidesPerView: 5, spaceBetween: 30 },
                        1440: { slidesPerView: 6, spaceBetween: 35 },
                        1920: { slidesPerView: 7, spaceBetween: 40 },
                    }}
                    aria-label="Carrossel de tecnologias utilizadas no projeto"
                >
                    {techs.map((tech) => (
                        <SwiperSlide key={tech} className="flex justify-center border-none">
                            <div className="relative flex items-center justify-center w-[150px] h-[150px]">
                                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(100,109,240,0.5)_8%,_rgba(30,30,80,0.3)_60%,_rgba(10,9,32,0)_70%)] shadow-[0_0_20px_8px_rgba(100,109,240,0.5)])]"></div>
                                <p className="relative text-lg font-semibold text-white">{tech}</p>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TechStack;