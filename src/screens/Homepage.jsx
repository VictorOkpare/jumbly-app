import React, { useState } from 'react';
import { FaAngleUp, FaAngleDown, FaRegStar } from "react-icons/fa6";
import { GoThumbsup } from "react-icons/go";
import Navbar from "../components/Navbar"

function Homepage() {
  const featureCardsData = [
    {
      fCardImage: "./src/assets/images/featureSection/feature1.png",
      fCardUpperText: "User & task management",
      fCardLowerText: "Create user groups, assign tasks and manage permissions"
    },
    {
      fCardImage: "./src/assets/images/featureSection/feature2.png",
      fCardUpperText: "Scheduling",
      fCardLowerText: "Scheduling recurring tasks set reminders and due dates."
    },
    {
      fCardImage: "./src/assets/images/featureSection/feature3.png",
      fCardUpperText: "Reporting & analytics",
      fCardLowerText: "Generate reports, track performance and identity trends"
    },
    {
      fCardImage: "./src/assets/images/featureSection/feature4.png",
      fCardUpperText: "Issue reporting",
      fCardLowerText: "Report issues, attach photos and assign tasks"
    },
    {
      fCardImage: "./src/assets/images/featureSection/feature5.png",
      fCardUpperText: "Notifications",
      fCardLowerText: "Receive instant notifications, view task updates and more"
    },
  ];

  const aboutCardData = [
    { aCardImage: "./src/assets/images/aboutSection/about1.png", aCardText: "Home Cleaning" },
    { aCardImage: "./src/assets/images/aboutSection/about2.png", aCardText: "Office Cleaning" },
    { aCardImage: "./src/assets/images/aboutSection/about3.png", aCardText: "Medical Cleaning" },
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

  const rating = 4; // Adjust this value to test different ratings

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
  return (
    <div>
      <Navbar/>
      {/* Hero Section */}
      <div className='pt-10 flex bg-themeBg1 pb-16'>
        <div className='w-1/2 '>
          <div className='w-[400px] h-[320px] justify-self-end mr-14 '>
            <img src="./src/assets/images/image.png" alt="" className='w-full h-full rounded-tl-[80px] rounded-br-[80px]' />
          </div>
        </div>
        <div className='w-1/2'>
          <div className='w- h-[320px] flex flex-col justify-between'>
            <p className='font-[700] text-5xl'>Facility Management <br />software for the<br /> modern world</p>
            <p className='text-[16px] font-[700] text-themeColor3'>Manage tasks, Schedule, and more with Jumbly, Streamline your facility operations with our powerful, easy-to-use platform.</p>
            <button className="bg-themeColor2 text-white w-4/5 py-[18px] rounded-2xl">
              <a href="#">Get Started</a>
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className='bg-themeBg2'>
        <div className='mx-20'>
          <div>
            <p className='font-bold text-[24px]'>Features</p>
            <p className='font-bold text-[32px] w-[700px] h-[180px] mt-5'>Here are some of the key features that make Jumbly an essential tool for modern facilities management.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featureCardsData.map((card, index) => (
              <div key={index} className="w-[320px] h-[276px] hover:shadow-lg rounded-lg p-4">
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
        <div className='mx-20'>
          <div>
            <p className='font-bold text-[24px] pt-6 pb-4'>About us</p>
            <p className='text-themeColor3 w-[960px] text-[18px] font-semibold'>Jumbly is a standalone application designed for cleaning companies and their clients. It seamlessly integrates into their existing workflow, allowing for easy management of bookings, communication, and service tracking. Overall, Jumbly aims to simplify operations, improve efficiency, and enhance overall client experience!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {aboutCardData.map((card, index) => (
              <div key={index} className='w-[280px] h-[200px]'>
                <img src={card.aCardImage} alt={card.aCardText} />
                <p className='text-center font-semibold'>{card.aCardText}</p>
              </div>
            ))}
          </div>
          <div className='pb-6'>
            <div className='pb-8 font-bold text-[24px]'>Pricing Packages</div>
            {/* Pricing Card */}
            <div className='flex gap-5'>
            <div className='border-themeColor3 border-2 rounded-lg w-[300px] h-[256px] px-4  bg-white '>
              <div >
                
                <p className='bg-themeColor3 text-white w-[150px] text-center rounded-xl justify-self-end'>Most Affordable</p>
                <p className='font-extrabold text-2xl mt-[-22px] mb-4'>Basic</p>
                <p className='font-extrabold text-4xl justify-self-center'>$25<span className='text-[16px]'>Per month</span></p>
                <p className='bg-themeColor2 justify-self-center text-white text-center w-[230px] rounded-xl py-1'>Choose Basic</p>
              </div>
              <div className='mt-3' >
                <ul className='font-bold text-[14px]'>
                <li className="before:content-['•'] before:text-black before:mr-2">Company Registration</li>
                <li className="before:content-['•'] before:text-black before:mr-2">Basic Scheduling</li>
                <li className="before:content-['•'] before:text-black before:mr-2">Client Management (up to 30 client) </li>
                <li className="before:content-['•'] before:text-black before:mr-2">Email support</li>
                <li></li>
                </ul>
              </div>
            </div>

            <div className='border-themeColor3 border-2 rounded-lg w-[300px] h-[256px] px-4 bg-white'>
              <div >
                
                <p className='bg-[rgba(245,240,229,1)]  w-[150px] text-center rounded-xl justify-self-end'>Recommended</p>
                <p className='font-extrabold text-2xl mt-[-22px] mb-4'>Pro</p>
                <p className='font-extrabold text-4xl justify-self-center'>$55<span className='text-[16px]'>Per month</span></p>
                <p className='bg-themeColor2 justify-self-center text-white text-center w-[230px] rounded-xl py-1'>Choose Basic</p>
              </div>
              <div className='mt-3' >
                <ul className='font-bold text-[14px]'>
                <li className="before:content-['•'] before:text-black before:mr-2">All basic features</li>
                <li className="before:content-['•'] before:text-black before:mr-2">Advanced Scheduling</li>
                <li className="before:content-['•'] before:text-black before:mr-2">Invoicinf & payment processing </li>
                <li className="before:content-['•'] before:text-black before:mr-2">Performance </li>
                <li className="before:content-['•'] before:text-black before:mr-2"> Priority support</li>
                </ul>
              </div>
            </div>

            <div className='border-themeColor3 border-2 rounded-lg w-[300px] h-[256px] px-4  bg-white '>
              <div >
                
                <p className='bg-[rgba(229,109,93,1)] text-white w-[150px] text-center rounded-xl justify-self-end'>Best Seller</p>
                <p className='font-extrabold text-2xl mt-[-22px] mb-4'>Premium</p>
                <p className='font-extrabold text-4xl justify-self-center'>$99<span className='text-[16px]'>Per month</span></p>
                <p className='bg-themeColor2 justify-self-center text-white text-center w-[230px] rounded-xl py-1'>Choose Premium</p>
              </div>
              <div className='mt-3' >
                <ul className='font-bold text-[14px]'>
                <li className="before:content-['•'] before:text-black before:mr-2">All basic features</li>
                <li className="before:content-['•'] before:text-black before:mr-2">Advanced Scheduling</li>
                <li className="before:content-['•'] before:text-black before:mr-2">Invoicinf & payment processing </li>
                <li className="before:content-['•'] before:text-black before:mr-2">Performance </li>
                <li className="before:content-['•'] before:text-black before:mr-2"> Priority support</li>
                </ul>
              </div>
            </div>
            </div>

          </div>
        </div>
      </div>


      {/* FAQ Section */}
      <div className=' bg-[rgba(239,239,239,1)] py-6'>
        <div className='mx-20'>
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
      <div className='px-20 py-5'>
        <div><p className='font-bold text-2xl mb-5'>Hear What Our Clients Say</p></div>
        <div>
          <div className='mb-5'>
            <div className='flex h-[150px] items-center text-xl  font-bold mb-2'>
              <div className='w-[150px] h-[150px]'>
              <img src="./src/assets/images/testimonialSection/testimonial.png" alt="" />
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
              <img src="./src/assets/images/testimonialSection/testimonial2.png" alt="" />
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
              <img src="./src/assets/images/testimonialSection/testimonial3.png" alt="" />
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
          <p className='text-4xl w-[750px] h-[100px] font-bold text-center pt-12 mb-14'>Ready to take your facility management to the next level?</p>
          <button className=' bg-themeColor2 text-white p-2 rounded-2xl flex justify-self-center '>Sign up for free today!</button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
