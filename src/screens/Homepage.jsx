// pls read the readme file to understand how 
// data is collected for the pricing card and Faqs, feedback and rating


import React, { useState } from 'react';
import axios from 'axios';


// React icons import
import {FaAngleUp, FaAngleDown, FaRegStar } from "react-icons/fa6";
import { GoThumbsup } from "react-icons/go";

// Component import
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';

// image import
import HeroImage from "../assets/images/image.png"
import feature1 from "../assets/images/featureSection/feature1.png"
import feature2 from "../assets/images/featureSection/feature2.png"
import feature3 from "../assets/images/featureSection/feature3.png"
import feature4 from "../assets/images/featureSection/feature4.png"
import feature5 from "../assets/images/featureSection/feature5.png"
import about1 from "../assets/images/aboutSection/about1.png"
import about2 from "../assets/images/aboutSection/about2.png"
import about3 from "../assets/images/aboutSection/about3.png"
import testimonial from "../assets/images/testimonialSection/testimonial.png"
import testimonial2 from "../assets/images/testimonialSection/testimonial2.png"
import testimonial3 from "../assets/images/testimonialSection/testimonial3.png"


// data imports

import pricingData from '../assets/data/pricingData.json';

function Homepage() {
  const featureCardsData = [
    {
      fCardImage: feature1,
      fCardUpperText: "User & task management",
      fCardLowerText: "Create user groups, assign tasks and manage permissions"
    },
    {
      fCardImage: feature2,
      fCardUpperText: "Scheduling",
      fCardLowerText: "Scheduling recurring tasks set reminders and due dates."
    },
    {
      fCardImage: feature3,
      fCardUpperText: "Reporting & analytics",
      fCardLowerText: "Generate reports, track performance and identity trends"
    },
    {
      fCardImage: feature4,
      fCardUpperText: "Issue reporting",
      fCardLowerText: "Report issues, attach photos and assign tasks"
    },
    {
      fCardImage: feature5,
      fCardUpperText: "Notifications",
      fCardLowerText: "Receive instant notifications, view task updates and more"
    },
  ];

  const aboutCardData = [
    { aCardImage: about1, aCardText: "Home Cleaning" },
    { aCardImage: about2, aCardText: "Office Cleaning" },
    { aCardImage: about3, aCardText: "Medical Cleaning" },
  ];

  const faqData = [
    {
      question: "What is Jumbly?",
      answer: "Jumbly is a facility management software designed to streamline your property operations with our powerful, easy-to-use platform."
    },
    {
      question: "Can I use it for free? ",
      answer: ""
    },
    {
      question: "People that can use it?",
      answer: ""
    }
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const rating = 4; // Adjust this value to get different ratings for different feedbacks by users

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaRegStar key={`full-${i}`} className="text-themeColor2" />
        ))}
        {halfStar && <FaRegStar className="text-themeColor2 opacity-50" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-themeColor3" />
        ))}
      </>
    );
  };

  

  function PricingCard() {
    const [pricingData, setPricingData] = useState([]);
  
    useEffect(() => {
      axios.get('/assets/pricingData.json')
        .then((response) => setPricingData(response.data))
        .catch((error) => console.error('Error fetching pricing data:', error));
    }, []);
  }
  return (
    <div>
      <Navbar/>
      {/* Hero Section */}
      <div className='pt-10 flex flex-col-reverse lg:flex-row bg-themeBg1 pb-16'>
  <div className='lg:w-1/2 w-full flex justify-center lg:justify-end'>
    <div className='w-[300px] h-[240px] lg:w-[400px] lg:h-[320px] lg:mr-14 mb-8 lg:mb-0'>
      <img src={HeroImage} alt="" className='w-full h-full rounded-tl-[40px] rounded-br-[40px] lg:rounded-tl-[80px] lg:rounded-br-[80px]' />
    </div>
  </div>
  <div className='lg:w-1/2 w-full flex justify-center lg:justify-start'>
    <div className='w-4/5 lg:w-full h-auto lg:h-[320px] flex flex-col justify-between items-center lg:items-start text-center lg:text-left'>
      <p className='font-bold text-3xl lg:text-5xl mb-4 lg:mb-0 '>Facility Management <br /> software for the<br /> modern world</p>
      <p className='text-[14px] lg:text-[16px] font-semibold text-themeColor3 mb-6 lg:mb-0'>
        Manage tasks, Schedule, and more with Jumbly, Streamline your facility operations with our powerful, easy-to-use platform.
      </p>
      <button className="bg-themeColor2 text-white w-3/5 lg:w-4/5 py-3 lg:py-[18px] mb-5 lg:mb-0 rounded-2xl">
        <a href="#">Get Started</a>
      </button>
    </div>
  </div>
</div>


      {/* Features Section */}
      <div className='bg-themeBg2 '>
        <div className='md:mx-20 mx-10'>
          <div>
            <p className='font-bold text-[24px] '>Features</p>
            <p className='font-bold lg:text-[32px] lg:w-[700px] lg:h-[180px]
            w-fit h-fit mt-5'>Here are some of the key features that make Jumbly an essential tool for modern facilities management.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featureCardsData.map((card, index) => (
              <div key={index} className="lg:w-[320px] lg:h-[276px] hover:shadow-lg rounded-lg p-4">
                <div className="mb-4">
                  <img src={card.fCardImage} alt={card.fCardUpperText} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="feature-card-text-1 font-bold">{card.fCardUpperText}</p>
                  <p className="feature-card-text-2">{card.fCardLowerText}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className='bg-themeBg1 '>
        <div className='mx-10 md:mx-20 lg:mx-20'>
          <div>
            <p className='font-bold text-[24px] pt-6 pb-4 '>About us</p>
            <p className='text-themeColor3 w-[960px] text-[18px] font-semibold max-w-[100%] md:max-w-[80%] lg:max-w-[1024px] pb-8'>Jumbly is a standalone application designed for cleaning companies and their clients. It seamlessly integrates into their existing workflow, allowing for easy management of bookings, communication, and service tracking. Overall, Jumbly aims to simplify operations, improve efficiency, and enhance overall client experience!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {aboutCardData.map((card, index) => (
              <div key={index} className='w-[280px] h-[200px]'>
                <img src={card.aCardImage} alt={card.aCardText} />
                <p className='text-center sm:text-left font-semibold pt-3'>{card.aCardText}</p>
              </div>
            ))}
          </div>
          <div className='pb-6'>
            <div className='pb-8 font-bold text-[24px]'>Pricing Packages</div>
            {/* Pricing Card */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
      {pricingData.map((pkg, index) => (
        <div
          key={index}
          className='border-themeColor3 border-2 rounded-lg w-full max-w-[320px] h-auto md:h-[280px] px-4 py-2 bg-white'
        >
          <div>
            <p className={`bg-${pkg.badge === 'Most Affordable' ? 'themeColor3' : pkg.badge === 'Best Seller' ? '[rgba(229,109,93,1)]' : '[rgba(245,240,229,1)]'} text-white w-3/4 sm:w-[150px] text-center rounded-xl text-xs sm:text-sm md:text-base lg:text-lg mx-auto`}>
              {pkg.badge}
            </p>
            <p className='font-extrabold text-lg sm:text-xl md:text-2xl mt-[-10px] md:mt-[-22px] mb-2'>
              {pkg.packageName}
            </p>
            <p className='font-extrabold text-3xl sm:text-4xl'>
              ${pkg.price}
              <span className='text-[12px] sm:text-[16px]'>/ {pkg.frequency}</span>
            </p>
            <p className='bg-themeColor2 text-white text-center w-3/4 sm:w-[230px] rounded-xl py-1 text-sm sm:text-base md:text-lg mx-auto'>
              Choose {pkg.packageName}
            </p>
          </div>
          <div className='mt-2 md:mt-3'>
            <ul className='font-bold text-xs sm:text-sm md:text-[14px]'>
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="before:content-['•'] before:text-black before:mr-2">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>


          </div>
        </div>
      </div>


      {/* FAQ Section */}
      <div className=' bg-[rgba(239,239,239,1)] py-6'>
        <div className='md:mx-20 mx-10'>
        <div className=' font-bold text-[24px] pb-6'>FAQ</div>
        {faqData.map((faq, index) => (
          <div key={index} className="rounded-lg border-2 border-themeColor3 bg-[rgba(255,255,255,1)] mb-4 p-4">
            <p onClick={() => toggleFaq(index)} className="font-bold text-[24px] flex justify-between cursor-pointer">
              {faq.question}
              <span>{openFaqIndex === index ? <FaAngleUp /> : <FaAngleDown />}</span>
            </p>
            {openFaqIndex === index && <p className="text-themeColor3 text-[16px] mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
      </div>

      {/* Testimonial Section */}
      <div className='md:mx-20 mx-10 py-5'>
        <div><p className='font-bold text-2xl mb-5'>Hear What Our Clients Say</p></div>
        <div>
          <div className='mb-5'>
            <div className='flex h-[150px] items-center text-xl  font-bold mb-2'>
              <div className='w-[150px] h-[150px]'>
              <img src={testimonial} alt="" />
              </div>
              <div className='pl-3'>
                <p>Rob Dean</p>
                <p>Oct 2, 2024</p>
              </div>
            </div>
          <div className=' flex flex-col gap-1'>
          <div className='flex text-2xl'>
              {renderStars(rating)}
            </div>
            <p className='font-bold'>Great Service, the team was efficient</p>
            <p className='flex items-center gap-1'><GoThumbsup className='text-themeColor3'/><span>5</span></p>
            </div>

            
          </div>

          <div className='mb-5'>
            <div className='flex h-[150px] items-center text-xl  font-bold mb-2'>
              <div className='w-[150px] h-[150px]'>
              <img src={testimonial2} alt="" />
              </div>
              <div className='pl-3'>
                <p>Rob Dean</p>
                <p>Oct 2, 2024</p>
              </div>
            </div>
          <div className=' flex flex-col gap-1'>
          <div className='flex text-2xl'>
              {renderStars(rating)}
            </div>
            <p className='font-bold'>Great Service, the team was efficient</p>
            <p className='flex items-center gap-1'><GoThumbsup className='text-themeColor3'/><span>5</span></p>
            </div>
          
            
          </div>

          <div className='mb-5'>
            <div className='flex h-[150px] items-center text-xl  font-bold mb-2'>
              <div className='w-[150px] h-[150px]'>
              <img src={testimonial3} alt="" />
              </div>
              <div className='pl-3'>
                <p>Rob Dean</p>
                <p>Oct 2, 2024</p>
              </div>
            </div>
          <div className=' flex flex-col gap-1'>
          <div className='flex text-2xl'>
              {renderStars(rating)}
            </div>
            <p className='font-bold'>Great Service, the team was efficient</p>
            <p className='flex items-center gap-1'><GoThumbsup className='text-themeColor3'/><span>5</span></p>
            </div>

            
          </div>
        </div>

        
      </div>

      {/* Sign-up Section */}
      <div className='bg-themeBg2'>
        <div className='justify-self-center pb-10 '>
          <p className='lg:text-4xl lg:w-[750px] lg:h-[100px] text-2xl font-bold text-center pt-12 lg:mb-14 mb-6'>Ready to take your facility management to the next level?</p>
          <button className=' bg-themeColor2 text-white p-2 rounded-2xl flex justify-self-center '>Sign up for free today!</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Homepage;
