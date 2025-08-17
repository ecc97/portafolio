'use client';

import { Project } from "@/interfaces/IProject";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css';

interface ProjectsCarouselProps {
    projects: Project[];
}

export default function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
    return (
        <div className="w-full max-w-7xl mx-auto">
            <Swiper
                grabCursor={true}
                centeredSlides={false}
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                pagination={{ clickable: true, dynamicBullets: true }}
                navigation={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    }
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                {projects.map((project, key) => (
                    <SwiperSlide key={key}>
                        <ProjectCard project={project} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}