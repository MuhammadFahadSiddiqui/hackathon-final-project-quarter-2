import React from "react";
import BlogCard from "../component/blogCard"; // Adjust the import path as needed
import Banner from "../component/banner"; // Adjust the import path as needed
import image1 from "../../../public/images/Blog/img1.png";
import image2 from "../../../public/images/Blog/img2.png";

const Blog = () => {
  return (
    <div>
      {/* Banner Component */}
      <Banner heading="Blog" breadcrumb="Blog" />

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 gap-6 p-4 my-10">
        {/* Blog Card 1 */}
        <BlogCard
          image={image1.src}
          date="Feb 14, 2022"
          day="14"
          month="Feb"
          title="10 Reasons To Do A Digital Detox Challenge"
          description="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          author="Admin"
          comments={3}
          buttonText="Read More"
        />

        {/* Blog Card 2 */}
        <BlogCard
          image={image2.src}
          date="Jan 25, 2022"
          day="25"
          month="Jan"
          title="How To Start A Healthy Lifestyle"
          description="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores."
          author="Editor"
          comments={5}
          buttonText="Continue Reading"
        />

        {/* Add more BlogCards as needed */}
      </div>
    </div>
  );
};

export default Blog;
