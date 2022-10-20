import { GetServerSideProps } from "next";
import Link from "next/link";
import React, { useState } from "react";
import { Pagination } from "antd";
import { useRouter } from "next/router";
import { PageHeader } from "antd";
import Head from "next/head";
import style from "../../styles/news.module.scss";

const Newses = ({ newses }: any) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>News</title>
      </Head>
      <PageHeader
        className="site-page-header"
        onBack={() => {
          router.push("/");
        }}
        title="News page"
      />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {newses.map((news: any) => (
          <div className="col" key={news.id}>
            <div className={`card h-100 ${style.customCard}`}>
              <div className="card-body">
                <h5 className="card-title">{news.title}</h5>
                {/* <p className="card-text">{news.body}</p> */}
              </div>
              <div className="card-footer">
                <Link href={`newses/${news.id}`}>
                  <a className="nav-link">
                    <button className="btn">Details</button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        defaultCurrent={1}
        current={Number(router?.query?.page || 1)}
        total={100}
        pageSize={Number(router?.query?.limit || 5)}
        onChange={(page, limit) => router.push({ query: { page, limit } })}
      />
    </div>
  );
};

export default Newses;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${
      query.page || 1
    }&&_limit=${query.limit || 6}`
  );
  const newses = await res.json();

  return {
    props: {
      newses,
    },
  };
};
