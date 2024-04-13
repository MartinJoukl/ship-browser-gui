// import Swiper core and required modules
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import DataContext from "../context/dataContext";
import {useContext} from "react";
import SkinCarouselBody from "./SkinCarouselSwiperBody";

function ShipSkinCarousel() {
    const skins = useContext(DataContext);
    console.log(skins);

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            zoom
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
        >
            {
                skins.map(skin => {
                    return (
                        <SwiperSlide key={skin.id}>{
                            <SkinCarouselBody skin={skin}/>
                        }</SwiperSlide>
                    );
                })
            }
        </Swiper>
    );
}

export default ShipSkinCarousel;