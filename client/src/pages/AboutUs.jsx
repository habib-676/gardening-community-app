import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-base-200 rounded-3xl p-6 my-10 text-primary-content">
      <h2 className="text-3xl font-bold text-center mb-4">🌱 About Us</h2>
      <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
        Welcome to{" "}
        <span className="text-primary font-semibold">GreenConnect</span> — your
        all-in-one gardening community and resource hub! Whether you’re a
        seasoned gardener or just starting your journey with a few pots on your
        balcony, our platform is here to support and inspire you every step of
        the way.
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="bg-secondary p-4 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">🌿 Our Mission</h3>
          <p>
            We aim to bring gardening enthusiasts together from all walks of
            life to share tips, post plant care guides, discover local experts,
            and connect over eco-friendly practices like composting,
            hydroponics, and more.
          </p>
        </div>

        <div className="bg-secondary p-4 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">🤝 What We Offer</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Share and discover helpful garden tips</li>
            <li>Connect with local and active gardeners</li>
            <li>Join or organize gardening events</li>
            <li>Ask plant care questions in a friendly community</li>
            <li>Access beginner to advanced-level content</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-lg italic">
          “Let’s grow together — one leaf, one root, and one tip at a time.”
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
