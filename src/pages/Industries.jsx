import React from "react";

const Industries = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-[radial-gradient(circle_at_top_left,#3c3f2d_0%,#121310_70%)] text-white py-20 pt-23 w-full h-auto flex lg:flex-row flex-col justify-center items-center gap-5 lg:gap-0  ">
        {/* div that contain contant of the hero section */}
        <div className="lg:w-1/2  p-10 lg:pl-50  lg:pr-30 flex flex-col lg:justify-start justify-center gap-4 ">
          <h1 className="lg:text-6xl text-5xl font-extrabold leading-none">
            Verticals
          </h1>
          <p className="text-lg font-normal">
            Zeta’s combined dataset and dedicated industry experts ensure that
            we can deliver purpose-built marketing strategies that exceed your
            goals.
          </p>
        </div>
        <div className="lg:w-1/2 w-full">
          <img
            src="industries_hero.webp
        "
            alt=""
            className="lg:max-w-[650px] w-full lg:max-h-[500px] h-full object-cover"
          />
        </div>
      </div>

      {/* paragraph  */}

      <p className="px-22 lg:px-80 lg:py-23 py-15 text-lg text-center ">
        Zeta’s industry-leading data set and unparalleled arsenal of industry
        experts combine to ensure purpose-built marketing strategies that exceed
        the goals of any business.
      </p>

      {/*--------------------------------- retail  -----------------------------------*/}
      <div className="bg-[#121310] rounded-2xl text-white max-w-[1150px] mx-auto py-5 w-full h-auto flex lg:flex-row flex-col justify-center items-center gap-5 lg:gap-0  ">
        {/* image */}
        <div className="lg:w-1/2 w-full flex items-center">
          <img
            src="industries_retail.webp
        "
            alt=""
            className="lg:max-w-[550px] w-full lg:max-h-[500px] h-full object-cover"
          />
        </div>
        {/* wrapper  */}
        <div className="lg:w-1/2  p-10 lg:pl-20  lg:pr-30 flex flex-col lg:justify-start justify-center gap-4 text-[#F5F5F5]">
          <h1 className="lg:text-6xl text-white text-5xl font-extrabold leading-none">
            Retail
          </h1>
          <p className="text-lg font-normal">
            The Zeta Marketing Platform enables retailers of all shapes and
            sizes—brick and mortar, e-commerce, and direct-to-consumer—to make
            every consumer feel like your best customer. Deliver meaningful
            content and offers based on insights only Zeta can provide. Add
            decades of expertise and it’s easy to see how Zeta has helped top
            retailers achieve their top goals.
          </p>
          {/* div 1 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
              Acquire new customers
            </h1>
            <p className="text-lg">
              Leverage Zeta’s proprietary database of 235+ million U.S.
              consumers to identify and target new buyers in market for your
              products.
            </p>
          </div>
          {/* div 2 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
              Acquire new customers
            </h1>
            <p className="text-lg">
              Leverage Zeta’s proprietary database of 235+ million U.S.
              consumers to identify and target new buyers in market for your
              products.
            </p>
          </div>
          {/* div 3 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
              Acquire new customers
            </h1>
            <p className="text-lg">
              Leverage Zeta’s proprietary database of 235+ million U.S.
              consumers to identify and target new buyers in market for your
              products.
            </p>
          </div>
        </div>
      </div>
      {/*------------------------------- Travel & Hospitality -------------------------*/}
      <div className=" lg:ml-20 my-10 py-20 w-full h-auto flex lg:flex-row flex-col justify-center items-center gap-5 lg:gap-0  ">
        {/* wrapper  */}
        <div className="lg:w-1/2  p-10 lg:pl-20  lg:pr-30 flex flex-col lg:justify-start justify-center gap-4 text-[#66668B]">
          <h1 className="lg:text-5xl text-black text-5xl font-extrabold leading-none">
            Travel & Hospitality
          </h1>
          <p className="text-lg font-normal">
            The modern traveler expects a seamless shopping experience from
            initial research to final booking and beyond. This means marketers
            need to deliver connected, personalized experiences in order to woo
            and win this target audience. With Zeta, travel and hospitality
            clients can find one unified platform that recognizes customers and
            prospects, curates a compelling message, and reaches the right
            consumer on the right channel at the right time.
          </p>
          {/* div 1 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
              Increase bookings
            </h1>
            <p className="text-lg">
              Leverage Zeta’s industry leading, proprietary identity graph to
              reach millions of net-new, high-intent customers.
            </p>
          </div>
          {/* div 2 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
              Improve experiences
            </h1>
            <p className="text-lg">
              Recognize your best customers and foster new connections to
              increase repeat customer rates. Hyper-personalized messaging to
              provide bespoke updates regarding travel times, gate assignments,
              vacation offers, and more.
            </p>
          </div>
          {/* div 3 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
              Manage against trends
            </h1>
            <p className="text-lg">
              Understand travel trends in real time through one centralized
              dashboard that can calculate tens of thousands of metrics
              instantaneously.
            </p>
          </div>
        </div>
        {/* image */}
        <div className="lg:w-1/2 w-full flex items-center">
          <img
            src="Travel_Hospitality.webp
        "
            alt=""
            className="lg:max-w-[550px] w-full lg:max-h-[500px] h-full object-cover"
          />
        </div>
      </div>

      {/*--------------------------- Consumer Packaged Goods  -------------------------*/}
      <div className="bg-[#121310] rounded-2xl text-white max-w-[1150px] mx-auto py-5 w-full h-auto flex lg:flex-row flex-col justify-center items-center gap-5 lg:gap-0  ">
        {/* image */}
        <div className="lg:w-1/2 w-full flex items-center">
          <img
            src="ConsumerPackagedGoods.webp
        "
            alt=""
            className="lg:max-w-[550px] w-full lg:max-h-[500px] h-full object-cover"
          />
        </div>
        {/* wrapper  */}
        <div className="lg:w-1/2  p-10 lg:pl-20  lg:pr-30 flex flex-col lg:justify-start justify-center gap-4 text-[#F5F5F5]">
          <h1 className="lg:text-4xl text-white text-5xl font-extrabold leading-none">
            Consumer Packaged Goods
          </h1>
          <p className="text-lg font-normal">
            Improve customer experiences, elevate your brand affinity, drive
            growth. Zeta’s industry-leading identity graph gives CPG marketers
            unparalleled access to reach millions of net new, high-intent
            consumers. Additionally, the Zeta Marketing Platform provides unique
            data points giving CPG firms the ability to understand where
            prospects and customers are most likely to shop, fusing together
            in-store and online shopping like never before.
          </p>
          {/* div 1 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
              Proprietary intender audiences
            </h1>
            <p className="text-lg">
              Leverage real-time behavioral intent signals to create first-party
              and prospect universes. Understand how to create in-store and
              online shopping experiences that capture consumers no matter where
              they are or how they shop.
            </p>
          </div>
          {/* div 2 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
              Increase competitiveness
            </h1>
            <p className="text-lg">
              Visualize mission-critical shopper intelligence to inform fast
              decisions.
            </p>
          </div>
          {/* div 3 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
              Continuous optimization
            </h1>
            <p className="text-lg">
              Measure and improve the performance of your digital marketing
              campaigns to increase average order value and grow your repeat
              customer base.
            </p>
          </div>
        </div>
      </div>

      {/*--------------------------------------------- Automotive --------------------------------------*/}
      <div className="lg:ml-20 my-10 py-20 w-full h-auto flex lg:flex-row flex-col justify-center items-center gap-5 lg:gap-0  ">
        {/* wrapper  */}
        <div className="lg:w-1/2  p-10 lg:pl-20  lg:pr-30 flex flex-col lg:justify-start justify-center gap-4 text-[#66668B]">
          <h1 className="lg:text-5xl text-black text-5xl font-extrabold leading-none">
            Automotive
          </h1>
          <p className="text-lg font-normal">
            The road to buying a car is a long and winding one. Marketers need
            to understand how consumers shop to serve messages that keep your
            brand top of mind without annoying them. By leveraging data-powered
            intelligence and smarter technology, you’ll be able to create
            personalized messages that surprise and delight your customers at
            every pitstop along the way.
          </p>
          {/* div 1 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
              Market activation
            </h1>
            <p className="text-lg">
              Employ look-a-like modeling to target buyer segments using
              omnichannel media.
            </p>
          </div>
          {/* div 2 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
              Foster loyalty
            </h1>
            <p className="text-lg">
              Utilize data that looks at consumers’ previously unknown likes and
              preferences to target with uniquely relevant offers.
            </p>
          </div>
          {/* div 3 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
              Increase revenue
            </h1>
            <p className="text-lg">
              Achieve better results using unique insights derived from campaign
              behavior fused with offline purchase habits.
            </p>
          </div>
        </div>
        {/* image */}
        <div className="lg:w-1/2 w-full flex items-center">
          <img
            src="Automotive.webp
        "
            alt=""
            className="lg:max-w-[550px] w-full lg:max-h-[500px] h-full object-cover"
          />
        </div>
      </div>

      {/*--------------------------- Financial & Insurance  -------------------------*/}
      <div className="bg-[#121310] rounded-2xl text-white max-w-[1150px] mx-auto py-5 w-full h-auto flex lg:flex-row flex-col justify-center items-center gap-5 lg:gap-0  ">
        {/* image */}
        <div className="lg:w-1/2 w-full flex items-center">
          <img
            src="Financial_Insurance.webp
        "
            alt=""
            className="lg:max-w-[550px] w-full lg:max-h-[500px] h-full object-cover"
          />
        </div>
        {/* wrapper  */}
        <div className="lg:w-1/2  p-10 lg:pl-20  lg:pr-30 flex flex-col lg:justify-start justify-center gap-4 text-[#f5f5f5]">
          <h1 className="lg:text-4xl text-white text-5xl font-extrabold leading-none">
            Financial & Insurance
          </h1>
          <p className="text-lg font-normal">
            Customers’ financial journeys are deeply personal, as the messaging
            they receive should be. Capitalize on Zeta’s robust interest- and
            demographic-based segmentation capabilities to offer 1:1 content
            experiences, driving more engagement with your brand.
          </p>
          {/* div 1 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
              Acquire ideal customers
            </h1>
            <p className="text-lg">
              Tap into Zeta’s intent- and demographic-based signals to enhance
              segmentation and refine messaging strategy based on where each
              audience member is in their financial journey.
            </p>
          </div>
          {/* div 2 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
              Adopt a customer-centric approach
            </h1>
            <p className="text-lg">
              Influence customer preferences for digital channels, increase
              stickiness, and strengthen relationships.
            </p>
          </div>
          {/* div 3 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
              Improve intent prediction
            </h1>
            <p className="text-lg">
              Deliver personalized, relevant customer experiences based on your
              account holder’s products, channels, and other lifestyle
              indicators.
            </p>
          </div>
        </div>
      </div>

      {/*---------------------------------------- Media & Entertainment --------------------------------------*/}
      <div className="lg:ml-20 my-10 py-20 w-full h-auto flex lg:flex-row flex-col justify-center items-center gap-5 lg:gap-0  ">
        {/* wrapper  */}
        <div className="lg:w-1/2  p-10 lg:pl-20  lg:pr-30 flex flex-col lg:justify-start justify-center gap-4 text-[#66668B]">
          <h1 className="lg:text-5xl text-black text-5xl font-extrabold leading-none">
            Media & Entertainment
          </h1>
          <p className="text-lg font-normal">
            With thousands of hours of entertainment options at consumers’
            fingertips, here’s how to make them take action with your brand.
            Stand out in a sea of options by creating unique and engaging
            experiences for your customers that are tailored to their
            consumption habits.
          </p>
          {/* div 1 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
              Acquire net new subscribers
            </h1>
            <p className="text-lg">
              Reach prospective customers with personalized messaging where they
              are to influence where they’re going next.
            </p>
          </div>
          {/* div 2 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
              Retain more customers
            </h1>
            <p className="text-lg">
              Nurture and grow current relationships by leveraging real-time
              intent signals, meeting your most valued customers with the right
              message at the right time.
            </p>
          </div>
          {/* div 3 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
              Cost-effective strategy
            </h1>
            <p className="text-lg">
              Combining Zeta’s industry-leading AI with integrated technology
              means you’ll get the most bang for your marketing buck.
            </p>
          </div>
        </div>
        {/* image */}
        <div className="lg:w-1/2 w-full flex items-center">
          <img
            src="Media_Entertainment.webp
        "
            alt=""
            className="lg:max-w-[550px] w-full lg:max-h-[500px] h-full object-cover"
          />
        </div>
      </div>

      {/*-------------------------- Telecommunication -----------------------------------*/}
      <div className="bg-[#121310] rounded-2xl text-white max-w-[1150px] mx-auto py-5 w-full h-auto flex lg:flex-row flex-col justify-center items-center gap-5 lg:gap-0  ">
        {/* image */}
        <div className="lg:w-1/2 w-full flex items-center">
          <img
            src="telecommunication.webp
        "
            alt=""
            className="lg:max-w-[550px] w-full lg:max-h-[500px] h-full object-cover"
          />
        </div>
        {/* wrapper  */}
        <div className="lg:w-1/2 p-10 lg:pl-20  lg:pr-30 flex flex-col lg:justify-start justify-center gap-4 text-[#f5f5f5]">
          <h1 className="lg:text-4xl text-white text-4xl font-extrabold leading-none">
            Telecommunications
          </h1>
          <p className="text-lg font-normal">
            Cord cutters, meet your match. With Zeta, you can identify customers
            most likely to be switching service providers (think: those
            preparing for a move or researching other vendors) and reach them
            with incentivizing messaging, like money-saving bundling packages.
          </p>
          {/* div 1 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
              Acquire net-new subscribers
            </h1>
            <p className="text-lg">
              Identify customers in-market for telecom services, like those
              preparing for a move.
            </p>
          </div>
          {/* div 2 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
              Grow average revenue
            </h1>
            <p className="text-lg">
              Target current customers with materials promoting bundling offers or adding extensions to their current packages.
            </p>
          </div>
          {/* div 3 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
              Reduce churn
            </h1>
            <p className="text-lg">
              Zeta can identify churn signals in enough time for you to intercept and reach your subscriber with engaging messaging.
            </p>
          </div>
        </div>
      </div>

       {/*---------------------------------------- Healthcare--------------------------------------*/}
      <div className="lg:ml-20 my-10 py-20 w-full h-auto flex lg:flex-row flex-col justify-center items-center gap-5 lg:gap-0  ">
        {/* wrapper  */}
        <div className="lg:w-1/2  p-10 lg:pl-20  lg:pr-30 flex flex-col lg:justify-start justify-center gap-4 text-[#66668B]">
          <h1 className="lg:text-5xl text-black text-5xl font-extrabold leading-none">
            Healthcare
          </h1>
          <p className="text-lg font-normal">
            As patients, we put a lot of trust in our healthcare providers, and they deserve that same level of trust in a marketing partner. Engage anyone from practitioners to patients with relevant, personalized messaging and watch your relationships flourish.
          </p>
          {/* div 1 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
              Understand the full patient journey
            </h1>
            <p className="text-lg">
              Better track your patient lifecycle to improve their experiences and facilitate time-sensitive speed to payment.
            </p>
          </div>
          {/* div 2 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
              Individualize experiences
            </h1>
            <p className="text-lg">
             Show prospective and long-time patients that you care by individualizing your messaging. Improve average patient rating and foster satisfaction with seamless follow-ups and check-ins.
            </p>
          </div>
          {/* div 3 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
              Lower acquisition costs
            </h1>
            <p className="text-lg">
             Utilize the Zeta Marketing Platform to understand where prospective patients and long-term care recipients are located. Target based on location to increase in-person visits.
            </p>
          </div>
        </div>
        {/* image */}
        <div className="lg:w-1/2 w-full flex items-center">
          <img
            src="Healthcare.webp
        "
            alt=""
            className="lg:max-w-[550px] w-full lg:max-h-[500px] h-full object-cover"
          />
        </div>
      </div>

      {/*----------------------------- Education ---------------------------------------*/}
      <div className="bg-[#121310] rounded-2xl text-white max-w-[1150px] mx-auto py-5w-full h-auto flex lg:flex-row flex-col justify-center items-center gap-5 lg:gap-0  ">
        {/* image */}
        <div className="lg:w-1/2 w-full flex items-center">
          <img
            src="Education.webp
        "
            alt=""
            className="lg:max-w-[550px] w-full lg:max-h-[500px] h-full object-cover"
          />
        </div>
        {/* wrapper  */}
        <div className="lg:w-1/2  p-10 lg:pl-20  lg:pr-30 flex flex-col lg:justify-start justify-center gap-4 text-[#f5f5f5]">
          <h1 className="lg:text-4xl text-white text-5xl font-extrabold leading-none">
            Education
          </h1>
          <p className="text-lg font-normal">
            Zeta’s there for you even after the final bell. With economic uncertainty driving people to look for new and more fulfilling careers, now is the time for capturing audiences looking to further their education. We’ll help you develop and execute campaigns that optimize your spend and achieve real results.
          </p>
          {/* div 1 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
             Optimize your website traffic
            </h1>
            <p className="text-lg">
             Remove the black box that surrounds your site visitors by better identifying each user and the actions they take on your pages.
            </p>
          </div>
          {/* div 2 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
              Drive net-new inquiries and applicants
            </h1>
            <p className="text-lg">
              Personalize each message to prospective students based on where they are in the application funnel. Lower acquisition costs by serving application discounts and tuition information to the right individual at the right time.
            </p>
          </div>
          {/* div 3 with blue border at left  */}
          <div className=" border-l border-[#D9F45F] flex flex-col gap-6 pl-[60px] text-lg my-3">
            <h1 className="text-[#D9F45F] text-xl font-extrabold">
              Boost enrollment, reduce churn
            </h1>
            <p className="text-lg">
              Leverage the Zeta Marketing Platform to look at all prospects and current students in one unified platform to boost overall enrollment and increase school engagement for current students to reduce churn.
            </p>
          </div>
        </div>
      </div>

      <div className="my-20">
        <h1 className="text-center font-extrabold text-3xl py-10">Explore Others We Help</h1>
        <div className="flex items-center justify-center lg:space-x-10 space-x-4">
          <div className="p-4 bg-[#F5F5F5] flex flex-col gap-4 justify-center items-center w-40 h-auto hover:bg-[#EBEBEB] transition-all duration-300 cursor-pointer rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.25)] hover:shadow-[0_1px_10px_rgba(0,0,0,0.25)]">
            <svg className="style-svg replaced-svg svg-replaced-0" id="svg-replaced-0" fill="none" viewBox="0 0 80 76" height="76" width="80" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1118_6710)"><path stroke-linecap="round" stroke-width="1.11664" stroke="#252626" d="M40.1067 48.7209C28.1843 48.7209 18.5192 38.9707 18.5192 26.9431C18.5192 14.9156 28.1843 5.16534 40.1067 5.16534C44.9911 5.16534 49.4966 6.80181 53.1139 9.5609M40.1067 48.7209C58.7385 48.7209 72.5764 59.4747 79.1067 75.1653H1.10669C7.63696 59.4747 21.4749 48.7209 40.1067 48.7209ZM40.1067 48.7209C51.6046 48.7209 61.003 39.6526 61.6577 28.2188M53.1139 9.5609C52.4647 11.1433 52.1067 12.8759 52.1067 14.6922C52.1067 18.0591 53.3368 21.1387 55.3721 23.5061C55.62 23.7944 55.6336 24.2216 55.3876 24.5115L53.2811 26.9926C52.8705 27.4762 53.2142 28.2188 53.8486 28.2188H61.6577M53.1139 9.5609C55.135 4.63473 59.9791 1.16534 65.6335 1.16534C73.1042 1.16534 79.1604 7.22152 79.1604 14.6922C79.1604 22.0962 73.2118 28.1108 65.8332 28.2176L65.8326 28.2188H65.7035C65.6802 28.219 65.6569 28.219 65.6335 28.219C65.6102 28.219 65.5868 28.219 65.5635 28.2188H61.6577M59.1067 11.1653H73.1067M59.1067 15.223H71.1262M59.1067 19.1653H68.736"></path><path stroke-linecap="round" stroke-width="1.11664" stroke="url(#paint0_linear_1118_6710)" d="M40.1067 48.7209C28.1843 48.7209 18.5192 38.9707 18.5192 26.9431C18.5192 14.9156 28.1843 5.16534 40.1067 5.16534C44.9911 5.16534 49.4966 6.80181 53.1139 9.5609M40.1067 48.7209C58.7385 48.7209 72.5764 59.4747 79.1067 75.1653H1.10669C7.63696 59.4747 21.4749 48.7209 40.1067 48.7209ZM40.1067 48.7209C51.6046 48.7209 61.003 39.6526 61.6577 28.2188M53.1139 9.5609C52.4647 11.1433 52.1067 12.8759 52.1067 14.6922C52.1067 18.0591 53.3368 21.1387 55.3721 23.5061C55.62 23.7944 55.6336 24.2216 55.3876 24.5115L53.2811 26.9926C52.8705 27.4762 53.2142 28.2188 53.8486 28.2188H61.6577M53.1139 9.5609C55.135 4.63473 59.9791 1.16534 65.6335 1.16534C73.1042 1.16534 79.1604 7.22152 79.1604 14.6922C79.1604 22.0962 73.2118 28.1108 65.8332 28.2176L65.8326 28.2188H65.7035C65.6802 28.219 65.6569 28.219 65.6335 28.219C65.6102 28.219 65.5868 28.219 65.5635 28.2188H61.6577M59.1067 11.1653H73.1067M59.1067 15.223H71.1262M59.1067 19.1653H68.736"></path></g><defs><linearGradient gradientUnits="userSpaceOnUse" y2="60.232" x2="45.8837" y1="-1.11102" x1="1.10669" id="paint0_linear_1118_6710"><stop stop-color="#0905AF"></stop><stop stop-color="#035CD4" offset="1"></stop></linearGradient><clipPath id="clip0_1118_6710"><rect fill="white" height="76" width="80"></rect></clipPath></defs></svg>
            <h1 className="text-lg font-extrabold">Publishers</h1>
          </div>
          <div className="px-4 py-3.5 bg-[#F5F5F5] flex flex-col gap-4 justify-center items-center w-40 h-auto hover:bg-[#EBEBEB] transition-all duration-300 cursor-pointer rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.25)] hover:shadow-[0_1px_10px_rgba(0,0,0,0.25)]">
            <svg class="style-svg replaced-svg svg-replaced-1" id="svg-replaced-1" fill="none" viewBox="0 0 82 82" height="82" width="82" xmlns="http://www.w3.org/2000/svg"><path stroke="url(#paint0_linear_1118_6648)" d="M17.534 21.878H32.4364C34.5366 21.878 36.2392 20.1754 36.2392 18.0752V9.31381C36.2392 7.21357 34.5366 5.51099 32.4364 5.51099H4.80282C2.70258 5.51099 1 7.21357 1 9.31381V18.0752C1 20.1754 2.70258 21.878 4.80282 21.878H12.4402"></path><path stroke-linecap="round" stroke="url(#paint1_linear_1118_6648)" d="M27.8889 37.744V33.8129C27.8889 32.0724 29.572 30.8279 31.236 31.3378V31.3378C32.3236 31.6711 33.0662 32.6753 33.0662 33.8129V41.9009C33.0662 44.0925 32.4284 46.2368 31.2306 48.0722V48.0722C29.1458 51.2666 25.5891 53.1925 21.7745 53.1925H14.8956C12.9568 53.1925 10.9652 52.7639 9.66497 51.3258C7.76632 49.2257 5.76001 45.422 5.76001 38.9967V35.6564C5.76001 34.3651 6.80683 33.3183 8.09816 33.3183V33.3183C9.38948 33.3183 10.4363 34.3651 10.4363 35.6564V39.7064C10.4363 40.2368 10.8662 40.6667 11.3966 40.6667V40.6667C11.927 40.6667 12.3569 40.2368 12.3569 39.7064V38.6626"></path><path stroke="url(#paint2_linear_1118_6648)" d="M27.8249 51.6104L30.978 57.2262C31.2973 57.7948 31.4649 58.436 31.4649 59.088V67.8784C31.4649 69.9787 29.7624 71.6812 27.6621 71.6812H11.9713C9.87104 71.6812 8.16846 69.9787 8.16846 67.8784V59.088C8.16846 58.436 8.33613 57.7948 8.65538 57.2262L11.3054 52.5064"></path><path stroke-linecap="round" stroke="url(#paint3_linear_1118_6648)" d="M27.8888 38.9137V32.1056C27.8888 31.0214 27.213 30.052 26.1957 29.6768V29.6768C24.5056 29.0536 22.7114 30.3043 22.7114 32.1056V37.2436"></path><path stroke-linecap="round" stroke="url(#paint4_linear_1118_6648)" d="M22.7114 38.9134V30.4353C22.7114 29.351 22.0356 28.3816 21.0183 28.0065V28.0065C19.3282 27.3833 17.5341 28.6339 17.5341 30.4353V38.9134"></path><path stroke-linecap="round" stroke="url(#paint5_linear_1118_6648)" d="M17.5344 38.9134V22.0847C17.5344 21.0004 16.8586 20.031 15.8413 19.6559V19.6559C14.1512 19.0327 12.3571 20.2833 12.3571 22.0847V38.9134"></path><circle stroke="url(#paint6_linear_1118_6648)" r="13.0279" cy="13.5279" cx="68.4723"></circle><circle stroke="url(#paint7_linear_1118_6648)" r="5.17836" cy="11.357" cx="68.4722"></circle><path stroke="url(#paint8_linear_1118_6648)" d="M78.3651 22.4165C76.2922 18.9645 72.5119 16.6547 68.1922 16.6547C64.1575 16.6547 60.5934 18.6698 58.4515 21.7485"></path><circle stroke="url(#paint9_linear_1118_6648)" r="13.0279" cy="40.9167" cx="54.2764"></circle><circle stroke="url(#paint10_linear_1118_6648)" r="5.17836" cy="38.7457" cx="54.2764"></circle><path stroke="url(#paint11_linear_1118_6648)" d="M64.1693 49.8052C62.0964 46.3532 58.3161 44.0433 53.9964 44.0433C49.9617 44.0433 46.3976 46.0585 44.2557 49.1372"></path><circle stroke="url(#paint12_linear_1118_6648)" r="13.0279" cy="67.9728" cx="67.8041"></circle><circle stroke="url(#paint13_linear_1118_6648)" r="5.17836" cy="65.8022" cx="67.8038"></circle><path stroke="url(#paint14_linear_1118_6648)" d="M77.6968 76.8617C75.6238 73.4097 71.8436 71.0999 67.5239 71.0999C63.4891 71.0999 59.9251 73.115 57.7832 76.1937"></path><path stroke="url(#paint15_linear_1118_6648)" d="M54.2762 67.8063H31.1453M40.8319 40.9176H33.2329M55.0278 13.1938H35.9886"></path><defs><linearGradient gradientUnits="userSpaceOnUse" y2="23.4463" x2="7.59368" y1="5.00751" x1="1" id="paint0_linear_1118_6648"><stop stop-color="#0905AF"></stop><stop stop-color="#035CD4" offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="50.137" x2="19.004" y1="29.6082" x1="5.76001" id="paint1_linear_1118_6648"><stop stop-color="#0905AF"></stop><stop stop-color="#035CD4" offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="68.7033" x2="19.9162" y1="50.993" x1="8.16846" id="paint2_linear_1118_6648"><stop stop-color="#0905AF"></stop><stop stop-color="#035CD4" offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="31.9455" x2="28.7779" y1="28.0684" x1="22.7114" id="paint3_linear_1118_6648"><stop stop-color="#0905AF"></stop><stop stop-color="#035CD4" offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="29.9601" x2="24.0854" y1="26.3466" x1="17.5341" id="paint4_linear_1118_6648"><stop stop-color="#0905AF"></stop><stop stop-color="#035CD4" offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="20.2654" x2="20.0744" y1="17.7392" x1="12.3571" id="paint5_linear_1118_6648"><stop stop-color="#0905AF"></stop><stop stop-color="#035CD4" offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="20.7513" x2="71.5623" y1="-0.83228" x1="54.9445" id="paint6_linear_1118_6648"><stop stop-color="#0905AF"></stop><stop stop-color="#035CD4" offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="14.3891" x2="69.7692" y1="5.3293" x1="62.7938" id="paint7_linear_1118_6648"><stop stop-color="#0905AF"></stop><stop stop-color="#035CD4" offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="23.4525" x2="60.0054" y1="16.4774" x1="58.4515" id="paint8_linear_1118_6648"><stop stop-color="#0905AF"></stop><stop stop-color="#035CD4" offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="48.1402" x2="57.3664" y1="26.5566" x1="40.7485" id="paint9_linear_1118_6648"><stop stop-color="#0905AF"></stop><stop stop-color="#035CD4" offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="41.7777" x2="55.5734" y1="32.718" x1="48.598" id="paint10_linear_1118_6648"><stop stop-color="#0905AF"></stop><stop stop-color="#035CD4" offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="50.8412" x2="45.8096" y1="43.8661" x1="44.2557" id="paint11_linear_1118_6648"><stop stop-color="#0905AF"></stop><stop stop-color="#035CD4" offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="75.1963" x2="70.8941" y1="53.6127" x1="54.2762" id="paint12_linear_1118_6648"><stop stop-color="#0905AF"></stop><stop stop-color="#035CD4" offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="68.8343" x2="69.1009" y1="59.7745" x1="62.1255" id="paint13_linear_1118_6648"><stop stop-color="#0905AF"></stop><stop stop-color="#035CD4" offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="77.8977" x2="59.3371" y1="70.9226" x1="57.7832" id="paint14_linear_1118_6648"><stop stop-color="#0905AF"></stop><stop stop-color="#035CD4" offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="28.44" x2="60.9456" y1="11.5139" x1="31.1453" id="paint15_linear_1118_6648"><stop stop-color="#0905AF"></stop><stop stop-color="#035CD4" offset="1"></stop></linearGradient></defs></svg>
            <h1 className="text-lg font-extrabold">Agencies</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
