import Prismic from "@prismicio/client";
import { GetStaticProps } from "next";
import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Post | Ignews </title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time> 12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit, adipisicing elit.</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              itaque nam eius beatae consequuntur iste expedita, laboriosam
              pariatur sed odio. Eos reprehenderit animi est quaerat rem sit
              nesciunt vitae maxime.
            </p>
          </a>
          <a href="#">
            <time> 12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit, adipisicing elit.</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              itaque nam eius beatae consequuntur iste expedita, laboriosam
              pariatur sed odio. Eos reprehenderit animi est quaerat rem sit
              nesciunt vitae maxime.
            </p>
          </a>
          <a href="#">
            <time> 12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit, adipisicing elit.</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              itaque nam eius beatae consequuntur iste expedita, laboriosam
              pariatur sed odio. Eos reprehenderit animi est quaerat rem sit
              nesciunt vitae maxime.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'publication')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  }
    
  );

  console.log(JSON.stringify(response, null, 2))
  return {
    props: {

    }
  }
};
