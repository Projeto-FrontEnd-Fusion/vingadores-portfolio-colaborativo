import { useMemberStore } from "../../store/useMemberStore";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "../ProjectCard/ProjectCard";
import CarouselNavigation from "../CarouselNavigation/CarouselNavigation";
import "swiper/swiper-bundle.css";
import clsx from "clsx";

const MemberProjects = () => {
  const selectedMember = useMemberStore((state) => state.selectedMember);
  const projectsExist = selectedMember !== null && selectedMember.projects && selectedMember.projects.length > 0

  if (projectsExist) {
    return (
      <section
        className={clsx('mt-20 transition-all duration-500', { "max-h-0 opacity-0": !projectsExist, "max-h-[1000px] opacity-1": projectsExist })}
        aria-hidden={!projectsExist}
        id="Projetos"
      >
        <h3 className="text-white font-normal text-4xl text-center">Meus Projetos</h3>
        <div className="mt-16 font-fusion">

          <Swiper
            loop={true}
            centeredSlides={true}
            slidesPerView={1}
          >
            {selectedMember?.projects.map((project) => (
              <SwiperSlide key={project.id} >
                <ProjectCard project={project} />
              </SwiperSlide>

            ))}
            <CarouselNavigation margin={true} label="projeto" />
          </Swiper>
        </div>
      </section>
    );
  }
};

export default MemberProjects;
