import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import products1 from '../assets/img/products1.png'
import products2 from '../assets/img/products2.png'
import products3 from '../assets/img/products3.png'
import products4 from '../assets/img/products4.png'
const products = [
  {
    id: 1,
    image: products1,
    title: 'AfroHydra Daily Leave-In Mist..',
    description: 'This amazing accent Pot is hand-crafted with a solid Stone and upper wood frame.',
  },
  {
    id: 2,
    image: products2,
    title: 'KinkSoft Curl Cream Butter',
    description: 'A triumph of minimalist design that combines natural and man made materials for a ...',
  },
  {
    id: 3,
    image: products3,
    title: 'CurlNest Deep Nourish Conditioner',
    description: 'A triumph of minimalist design that combines natural and man made materials for a ...',
  },
  {
    id: 4,
    image: products4,
    title: 'RootRich Growth Oil Blend...',
    description: 'Experience modern art with this beautiful mid-century table.',
  },
];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-0 -bottom-[60px] transform -translate-y-1/2 z-10 cursor-pointer bg-white p-3 rounded-full shadow hover:bg-red-100"
    >
      <FaArrowRight className="text-[#FF6F61]" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute left-0 -bottom-[60px] transform -translate-y-1/2 z-10 cursor-pointer bg-white p-3 rounded-full shadow hover:bg-red-100"
    >
      <FaArrowLeft className="text-[#FF6F61]" />
    </div>
  );
};

const ProductSuggestions = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id='Recommendation' className=' bg-[#fffaf6]'>
        <div className="py-20 px-4 max-w-6xl mx-auto  relative">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900">Product Suggestions</h2>
        <p className="mt-2 text-gray-600">
          “We recommend the perfect natural products for your hair— because great care begins with the right match.”
        </p>
      </div>

      <div className="relative">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={product.id} className="px-4 h-[368px]">
              <div
                className={`bg-white rounded-xl shadow-md overflow-hidden h-full  `}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-contain p-4"
                />
                <div className="px-4 pb-6">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </section>
    
  );
};

export default ProductSuggestions;
