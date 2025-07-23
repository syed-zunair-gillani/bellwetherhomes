"use client";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RxCross2 } from "react-icons/rx";
import ReactModal from 'react-modal';
import { urlFor } from "@/sanity/lib/image";

ReactModal.setAppElement('*');

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <div
    className="fixed right-20 top-1/2 mt-60 md:mt-0 transform -translate-y-1/2 z-10 cursor-pointer text-white bg-black bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="fixed left-20 mt-60  md:mt-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white bg-black bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </div>
);

const Gallery = ({data}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);


  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [modalIsOpen]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
  <section className="bg-[#FFFAE3] py-20">
    <div className="container mx-auto px-3">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#EF4F36] mb-8 max-w-[588px]">
        Recent Multifamily Siding Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer group"
            onClick={() => openModal(image)}
          >
            <Image
              src={urlFor(image.asset).url()}
              alt="Gallery Image"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></div>
          </div>
        ))}
      </div>
    </div>

    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      contentLabel="Image Modal"
      overlayClassName="fixed inset-0 bg-black/80 flex justify-center items-center z-50 px-4"
      className="w-full max-w-4xl p-4 md:p-6 rounded outline-none relative"
    >
      <div>
        <Slider {...settings}>
          {data?.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={urlFor(image.asset).url()}
                alt="Modal Image"
                width={800}
                height={600}
                className="max-w-full h-auto rounded"
              />
            </div>
          ))}
        </Slider>
        <button
          onClick={closeModal}
          className="fixed top-4 right-4 text-white text-3xl z-50"
        >
          <RxCross2 />
        </button>
      </div>
    </Modal>
  </section>
);

};

export default Gallery;
