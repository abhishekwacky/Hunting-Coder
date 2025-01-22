import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

// step 1: collect all the data from blogdata directory
// Step 2: iterate through them and display them
const Blog = () => {
  return (
    <div>
      <main className={styles.main}>
        <div className="blogs">
          <div>
            <Link href={"/blogpost/learn-javascript"}>
              <h3 className={styles.blogItemh3}>How to Learn Javascript</h3>
            </Link>
            <p>Javascript is the language used to design for the web </p>
          </div>
        </div>

        <div className="blogs">
          <div className="blogItem">
            <h3>How to Learn Javascript</h3>
            <p>Javascript is the language used to design for the web </p>
          </div>
        </div>

        <div className="blogs">
          <div className="blogItem">
            <h3>How to Learn Javascript</h3>
            <p>Javascript is the language used to design for the web </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
