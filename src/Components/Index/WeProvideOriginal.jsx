import React from "react";

const WeProvide = () => {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <h2 className="text-[50px] text-[#5B2C4F] wix text-center mb-10">
        We Provide
      </h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {/* Box 1 */}
        <div className="w-full md:w-[30%] bg-[#C6AFC3] px-10 text-[#5B2C4F] rounded-2xl md:rounded-none md:rounded-tl-2xl min-h-[220px] flex flex-col">
          <div className="h-[45%] flex items-center justify-center text-center">
            <h3 className="font-semibold text-[25px] leading-none pt-5 px-1">
              PSYCHOTHERAPY
            </h3>
          </div>

          <div className="h-[55%] text-[18px] leading-tight flex items-cente justify-center text-center">
            <p>
              A safe, supportive space to explore emotions, gain insight, and
              foster personal growth.
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="w-full md:w-[30%] bg-[#E9E4F0] px-10 text-[#5B2C4F] rounded-2xl md:rounded-none min-h-[220px] flex flex-col">
          <div className="h-[45%] flex items-center justify-center text-center">
            <h3 className="font-semibold text-[25px] leading-none pt-5 px-1">
              COGNITIVE BEHAVIOURAL THERAPY
            </h3>
          </div>

          <div className="h-[55%] text-[18px] mt-2 leading-tight flex items-cente justify-center text-center">
            <p>
              Helps you identify and change unhelpful thoughts and behaviours to
              improve emotional well-being.
            </p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="w-full md:w-[30%] bg-[#C6AFC3] px-10 text-[#5B2C4F] rounded-2xl md:rounded-none md:rounded-tr-2xl min-h-[220px] flex flex-col">
          <div className="h-[45%] flex items-center justify-center text-center">
            <h3 className="font-semibold text-[25px] leading-none pt-5 px-1">
              CHILD COUNSELLING
            </h3>
          </div>

          <div className="h-[55%] text-[18px] leading-tight flex items-cente justify-center text-center">
            <p>
              Gentle guidance to help children navigate emotions, behaviour, and
              life challenges.
            </p>
          </div>
        </div>

        {/* Box 4 */}
        <div className="w-full md:w-[30%] bg-[#E9E4F0] px-10 text-[#5B2C4F] rounded-2xl md:rounded-none md:rounded-bl-2xl min-h-[220px] flex flex-col">
          <div className="h-[45%] flex items-center justify-center text-center">
            <h3 className="font-semibold text-[25px] leading-none pt-5 px-1">
              BEHAVIOURAL THERAPY
            </h3>
          </div>

          <div className="h-[55%] text-[18px] leading-tight flex items-cente justify-center text-center">
            <p>
              Targets and reshapes behaviours to encourage positive, lasting
              change.
            </p>
          </div>
        </div>

        {/* Box 5 */}
        <div className="w-full md:w-[30%] bg-[#C6AFC3] px-10 text-[#5B2C4F] rounded-2xl md:rounded-none min-h-[220px] flex flex-col">
          <div className="h-[45%] flex items-center justify-center text-center">
            <h3 className="font-semibold text-[25px] leading-none pt-5 px-1">
              PARENT COUNSELLING
            </h3>
          </div>

          <div className="h-[55%] text-[18px] leading-tight flex items-cente justify-center text-center">
            <p>
              Supports parents in understanding, guiding, and strengthening
              relationships with their children.
            </p>
          </div>
        </div>

        {/* Box 6 */}
        <div className="w-full md:w-[30%] bg-[#E9E4F0] px-10 text-[#5B2C4F] rounded-2xl md:rounded-none md:rounded-br-2xl min-h-[220px] flex flex-col">
          <div className="h-[45%] flex items-center justify-center text-center">
            <h3 className="font-semibold text-[25px] leading-none pt-5 px-1">
              HABIT REVERSAL THERAPY
            </h3>
          </div>

          <div className="h-[55%] text-[18px] leading-tight flex items-cente justify-center text-center">
            <p>
              A structured approach to replace unwanted habits with healthier
              alternatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeProvide;
