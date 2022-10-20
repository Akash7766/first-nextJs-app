import React from "react";
import { Col, Pagination, Row, Space } from "antd";
import { useRouter } from "next/router";
import { PageHeader } from "antd";
import Head from "next/head";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import style from "../../styles/photos.module.scss";

const PhotosPage = ({ photos }: any) => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>
      <PageHeader
        className="site-page-header"
        onBack={() => {
          router.push("/");
        }}
        title="Photos page"
      />
      <Space>
        <Row gutter={20}>
          {photos.map((photo: any) => (
            <Col key={photo.id} xs={24} sm={12} md={8} lg={6} xl={6}>
              <Card
                className={style.cardContainer}
                hoverable
                cover={<img alt="example" src={photo.url} />}
              >
                <Meta title={photo.title} />
              </Card>
            </Col>
          ))}
        </Row>
      </Space>
      <Pagination
        defaultCurrent={1}
        total={100}
        current={Number(router.query.page) || 1}
        pageSize={Number(router.query.limit) || 4}
        onChange={(page, limit) => router.push({ query: { page, limit } })}
      />
    </div>
  );
};

export default PhotosPage;

export const getServerSideProps = async ({ query }: any) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_page=${
      query.page || 1
    }&_limit=${query.limit || 4}`
  );
  const photos = await res.json();

  return {
    props: {
      photos,
    },
  };
};
