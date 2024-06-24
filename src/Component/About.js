import React from "react";
import Navbar from "./Navbar";

function About() {
  return (
    <div>
      <header className="fixed">
        <Navbar />
      </header>

      <div className="bg-gray-100 w-11/12 max-w-[1300px] mx-auto">
        <section className="hero bg-orange-500 text-black py-16">
          <h1 className="text-3xl font-bold text-center">
            Welcome to KITAB - Your Ultimate Book Search Platform
          </h1>
        </section>

        <section className="intro container mx-auto py-6">
          <p className="text-lg text-gray-700">
            At KITAB, we're passionate about helping book enthusiasts and
            readers of all kinds find their next great read with ease and
            precision. Our platform is designed with one primary goal in mind:
            to simplify your book search experience and connect you with the
            literary treasures you're looking for.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Are you on the hunt for a new novel to lose yourself in, an
            informative non-fiction book, or perhaps a collection of poetry to
            inspire your soul? Look no further. With our user-friendly and
            feature-rich book search engine, you can explore a vast world of
            literature with just a few clicks.
          </p>
        </section>

        <section className="features bg-white container mx-auto p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Discover the Key Features:
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>
              Effortless Searching: Our intuitive search interface lets you
              explore our extensive book database effortlessly.
            </li>
            <li>
              Search by Category: Filter books by genre, topic, or category to
              uncover the perfect match for your reading preferences.
            </li>
            <li>
              Author-Based Search: If you have a favorite author or want to
              explore new works by a specific writer, we've got you covered.
            </li>
          </ul>
        </section>

        <section className="user-experience container mx-auto py-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            A Seamless User Experience:
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            We take pride in providing a smooth and enjoyable user experience.
            Our interface is designed with you in mind, ensuring you can
            navigate through the literary landscape without any hassle.
          </p>
        </section>

        <section className="contact bg-white container mx-auto p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">
            Stay Connected:
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            We value your feedback and would love to hear from you. If you have
            any questions, suggestions, or need assistance, don't hesitate to
            reach out to our friendly support team. We're here to assist you in
            your book-finding journey.
          </p>
        </section>

        <section className="mission-goals container mx-auto py-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            KITAB's Mission and Goals:
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            KITAB is committed to being your trusted companion in the world of
            literature. Join us as we embark on a journey through the written
            word and explore the boundless opportunities that books offer. Thank
            you for choosing us as your book search destination.
          </p>
        </section>

        <footer>
          {/* Include links to your terms of use and privacy policy, and social media links if applicable */}
        </footer>
      </div>
    </div>
  );
}

export default About;
