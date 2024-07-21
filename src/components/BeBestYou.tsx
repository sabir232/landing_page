import React from "react";

const BeBestYou: React.FC = () => {
  return (
    <section className="my-10 mb-5 px-4 sm:px-6 md:px-8 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="text-xl md:text-2xl lg:text-3xl font-bold p-4">
          Be Best You with EQ
        </div>
        <div className="text-base md:text-lg lg:text-xl p-4">
          People with high emotional intelligence (EQ) live more fulfilled
          lives. They tend to be happier and have healthier relationships.
        </div>
        <div className="text-base md:text-lg lg:text-xl p-4">
          They are more successful in their pursuits and make for inspiring
          leaders. According to science, they earn $29 a year more.
        </div>
      </div>
    </section>
  );
};

export default BeBestYou;
