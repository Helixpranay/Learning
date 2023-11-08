import React from "react";

function About() {
  return (
    <section className="w-screen mt-12">
      <div className="flex flex-1 justify-start items-center flex-col md:gap-6 xs:gap-3">
        <h5 className="md:text-4xl xs:text-2xl font-bold uppercase">Activites</h5>
        <p className="md:text-2xl xs:text-1xl uppercase font-light">
          Eduhub Institute of Technology
        </p>
        <p className="w-3/5 text-center md:text-[22px] xs:text-[15px] font-cursive">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
          voluptate sunt reprehenderit omnis officia dicta, delectus recusandae
          autem incidunt expedita non ipsum reiciendis, illo itaque rem
          laboriosam commodi ducimus veniam.
        </p>
        <div className="flex xs:flex-col md:flex-row justify-center items-center gap-6">
          <img
            className="md:w-1/4 xs:w-2/4 shadow-lg hover:shadow-2xl"
            src="https://award-attachments.g-mark.io/winners/2022/9664/main.jpg?size=large"
            alt="Img1"
          ></img>
          <img
            className="md:w-1/4 xs:w-2/4 shadow-lg hover:shadow-2xl"
            src="https://weilcollegeadvising.com/wp-content/uploads/0_kJxOd3ArYRXhhmqQ.jpeg"
            alt="Img2"
          ></img>
          <img
            className="md:w-1/4 xs:w-2/4 shadow-lg hover:shadow-2xl"
            src="https://media.licdn.com/dms/image/D5612AQEgAfFG822-bA/article-cover_image-shrink_720_1280/0/1678721944212?e=2147483647&v=beta&t=5wLQOLXK1S5UXKW00SzY_UqDHMrB2j_G2cE1iqq4RYw"
            alt="Img3"
          ></img>
        </div>
        <button className="border-red-500 border-2 p-2 rounded-md">
          View More
        </button>
      </div>
    </section>
  );
}

export default About;
