import React from "react";
import { PageHeader } from "antd";
import { useRouter } from "next/router";
import Head from "next/head";

const PostDetails = ({ Details }: any) => {
  const router = useRouter();
  return (
    <div className="contaner my-5">
      <Head>
        <title>{Details.title}</title>
      </Head>
      <PageHeader
        className="site-page-header"
        onBack={() => {
          router.back();
        }}
        title="News Details"
      />

      <div className="col">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{Details.title}</h5>
            <p className="card-text">{Details.body}</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default PostDetails;

export const getServerSideProps = async (context: any) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const Details = await res.json();

  return {
    props: {
      Details,
    },
  };
};
