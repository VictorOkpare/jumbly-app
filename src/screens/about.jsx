{/* About Section */}
<div className="bg-themeBg1">
  <div className="mx-4 md:mx-10 lg:mx-20">
    <div>
      <p className="font-bold text-[24px] pt-6 pb-4">About us</p>
      <p className="text-themeColor3 text-[18px] font-semibold max-w-[100%] md:max-w-[80%] lg:max-w-[960px]">
        Jumbly is a standalone application designed for cleaning companies and their clients. It seamlessly integrates into their existing workflow, allowing for easy management of bookings, communication, and service tracking. Overall, Jumbly aims to simplify operations, improve efficiency, and enhance overall client experience!
      </p>
    </div>

    {/* About Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
      {aboutCardData.map((card, index) => (
        <div key={index} className="w-full md:w-[280px] h-[200px] mx-auto">
          <img src={card.aCardImage} alt={card.aCardText} className="w-full h-full object-cover rounded-md" />
          <p className="text-center font-semibold mt-2">{card.aCardText}</p>
        </div>
      ))}
    </div>

    {/* Pricing Packages */}
    <div className="pb-6">
      <div className="pb-8 font-bold text-[24px]">Pricing Packages</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        
        {/* Basic Package */}
        <div className="border-themeColor3 border-2 rounded-lg px-4 py-4 bg-white flex flex-col items-center">
          <p className="bg-themeColor3 text-white text-center rounded-xl px-4 py-1 mb-2">Most Affordable</p>
          <p className="font-extrabold text-2xl mb-4">Basic</p>
          <p className="font-extrabold text-4xl mb-4">$25 <span className="text-[16px]">Per month</span></p>
          <p className="bg-themeColor2 text-white text-center rounded-xl py-1 w-full">Choose Basic</p>
          <ul className="mt-4 text-center font-bold text-[14px]">
            <li>Company Registration</li>
            <li>Basic Scheduling</li>
            <li>Client Management (up to 30 clients)</li>
            <li>Email support</li>
          </ul>
        </div>

        {/* Pro Package */}
        <div className="border-themeColor3 border-2 rounded-lg px-4 py-4 bg-white flex flex-col items-center">
          <p className="bg-[rgba(245,240,229,1)] text-center rounded-xl px-4 py-1 mb-2">Recommended</p>
          <p className="font-extrabold text-2xl mb-4">Pro</p>
          <p className="font-extrabold text-4xl mb-4">$55 <span className="text-[16px]">Per month</span></p>
          <p className="bg-themeColor2 text-white text-center rounded-xl py-1 w-full">Choose Pro</p>
          <ul className="mt-4 text-center font-bold text-[14px]">
            <li>All basic features</li>
            <li>Advanced Scheduling</li>
            <li>Invoicing & payment processing</li>
            <li>Performance tracking</li>
            <li>Priority support</li>
          </ul>
        </div>

        {/* Premium Package */}
        <div className="border-themeColor3 border-2 rounded-lg px-4 py-4 bg-white flex flex-col items-center">
          <p className="bg-[rgba(229,109,93,1)] text-white text-center rounded-xl px-4 py-1 mb-2">Best Seller</p>
          <p className="font-extrabold text-2xl mb-4">Premium</p>
          <p className="font-extrabold text-4xl mb-4">$99 <span className="text-[16px]">Per month</span></p>
          <p className="bg-themeColor2 text-white text-center rounded-xl py-1 w-full">Choose Premium</p>
          <ul className="mt-4 text-center font-bold text-[14px]">
            <li>All basic features</li>
            <li>Advanced Scheduling</li>
            <li>Invoicing & payment processing</li>
            <li>Performance tracking</li>
            <li>Priority support</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
