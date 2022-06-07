import React from "react";
import { FaGithub, FaArrowAltCircleRight } from "react-icons/fa";
import { StyledDetails, TagNames } from "../styles/ProjectDetails.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const ProjectDetails = ({ projects }) => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },

          // 1024: {
          //   slidesPerView: 3,
          // },
        }}
        // loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        navigation={{ clickable: true }}
        pagination={{ clickabke: true }}
        modules={[Navigation, Autoplay, Pagination]}>
        {projects
          ? projects.map((project, index) => (
              <SwiperSlide key={index}>
                <StyledDetails>
                  <div>
                    <img src={project.image} alt="project pics" />
                    <div className="text">
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer">
                        <FaGithub></FaGithub>
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer">
                        <FaArrowAltCircleRight></FaArrowAltCircleRight>
                      </a>

                      <TagNames>Tags: {project.tags.toString()}</TagNames>
                    </div>
                  </div>
                </StyledDetails>
              </SwiperSlide>
            ))
          : ""}
      </Swiper>
    </>
  );
};

export default ProjectDetails;
