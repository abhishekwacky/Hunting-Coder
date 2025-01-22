import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blogpost.module.css";

//Step 1: find the file corresponding to slug
//Step 2: Populate them inside the page
const slug = () => {
  const router = useRouter();
  console.log(router.query);

  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          harum, dolore perferendis, obcaecati ut molestiae aliquid voluptatum
          ratione enim id nulla, reprehenderit est tempora eveniet delectus
          voluptas laudantium laborum nesciunt? Cum quae ducimus laboriosam
          nulla dicta dolorem, commodi nostrum aut vero distinctio consectetur
          quas repellendus corrupti fugiat nihil eaque soluta iure aperiam
          explicabo cumque eius nam! Rem aliquid expedita nobis. Optio libero
          nobis totam mollitia est consectetur doloremque inventore, laudantium
          quam ab iste recusandae id ullam expedita, iusto omnis impedit
          voluptatibus vitae sed voluptates ad tempore, soluta dolorum eius!
          Magni! Amet perspiciatis totam minima reprehenderit asperiores nisi
          commodi veritatis blanditiis rem magni praesentium nostrum dicta vero
          magnam a nulla assumenda excepturi, ducimus beatae voluptates
          explicabo aliquam? Nulla beatae architecto molestias. Harum nesciunt
          iure ea natus quidem, facere explicabo aspernatur soluta accusamus
          consequatur ex eum quos est, eligendi facilis dicta, perspiciatis
          minus impedit! Mollitia, optio facilis? Recusandae dolorem neque omnis
          voluptate.
        </div>
      </main>
    </div>
  );
};

export default slug;
