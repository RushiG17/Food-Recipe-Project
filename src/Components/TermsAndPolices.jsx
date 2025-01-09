import React from "react";
import Profile from "../Images/Profile_contact.jpg";

const TermsAndPolices = () => {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
      {/* Heading */}
      <h1 className="font-serif text-4xl font-bold text-center mb-8 text-gray-800">
        Terms and Policies
      </h1>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Profile Section */}
        <div className="flex flex-col items-center md:w-1/3">
          <img
            src={Profile}
            alt="Rushikesh's Profile"
            className="rounded-full h-72 w-72 object-cover shadow-md"
          />
          <div className="text-center mt-8">
            <h2 className="text-2xl font-semibold text-gray-700">
              Hi! I’m Rushikesh.{" "}
              <span className="text-indigo-600">Nice to meet you!</span>
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed text-lg">
              I'm passionate about connecting with people and sharing
              experiences through cooking, creativity, and storytelling. Feel
              free to reach out with any questions, collaborations, or just to
              say hello!
            </p>
          </div>
        </div>

        {/* Terms and Policies Section */}
        <div className="md:w-2/3 bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-gray-700 mb-4">
            Privacy Policy
          </h3>
          <p className="text-gray-800 leading-relaxed text-lg mb-4 indent-8">
            Foodie's Fantasy found at https://www.foodiesfantasy.com/ (“Website”)
            is governed by the following privacy policy (“Privacy Policy”). We
            respect your privacy and are committed to protecting it. The purpose
            of this Privacy Policy is to inform you what personally identifiable
            information we may collect and how it may be used. This statement
            only applies to this Website.
          </p>

          <p className="text-gray-800 leading-relaxed text-lg mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            voluptatibus sapiente suscipit, quidem iure id? Sint iste eius
            assumenda, rem dolor iusto, deleniti veniam doloribus harum nam non
            maiores nisi?
          </p>

          <p className="text-gray-800 leading-relaxed text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
            cumque iusto! Libero quidem, ipsam nostrum, nisi ut dolor
            praesentium tempore quaerat quo eos est pariatur velit! Fugiat magni
            itaque pariatur?
          </p>

          <p className="text-gray-800 leading-relaxed text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            facere dolorem neque odit doloribus enim quos, recusandae incidunt
            fuga, autem culpa ab minima pariatur quo. Reprehenderit earum atque
            maxime blanditiis.
          </p>

          <p className="text-gray-800 leading-relaxed text-lg mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In tempore
            obcaecati quam amet tenetur quasi quos officia nesciunt sequi
            voluptas corporis et odit enim qui, velit eveniet molestias
            distinctio saepe!
          </p>

          <p className="text-gray-800 leading-relaxed text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            nam, fugit perferendis cumque dignissimos magnam explicabo error
            labore. Explicabo ipsa facere nobis nam quae quasi repudiandae
            eveniet doloremque, dolorum a.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndPolices;
