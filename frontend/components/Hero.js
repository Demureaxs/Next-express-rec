import React from 'react';

function Hero() {
  return (
    <div>
      {/* Hero Container */}
      <section className=" h-screen bg-slate-700 flex justify-center items-center text-slate-200 header-clip relative">
        {/* Text Box */}
        <div className="">
          <h1 className="text-4xl px-10 sm:text-5xl font-bold max-w-[600px] text-center pb-4">
            Say goodbye to endless resumes and interviews
          </h1>

          <h2 className="text-5xl px-8 sm:text-6xl font-extrabold max-w-[600px] text-center">
            Experience the future of hiring...
          </h2>
        </div>
        {/* <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-gray-200 to-transparent" /> */}
      </section>
    </div>
  );
}

export default Hero;
