import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { communities } from '../../data/community_list';

const Post = (): React.ReactElement => {
  const params = useParams<{ id: string }>();
  const id = params?.id ?? '';
  const community = id && communities.find((community) => community.no === Number(id));

  return (
    <div>
      {community && (
        <>
          <Helmet>
            <title>{community.title}</title>
            <meta property="og:type" content="website" />
            <meta property="og:title" content="title text test" />
            <meta
              property="og:image"
              content="https://api0.wehago.com/DCloudStorageServer/WehagoIMG/company_9/2020/09/25/f7fdeb40-fecf-11ea-8429-c7ccda4cb63b.jpg"
            />
            <meta property="og:site_name" content="WEHAGO" />
            <meta property="og:url" content={document.location.href} />
            <meta property="og:description" content="texttext test" />
            <meta property="description" content="description test" />
          </Helmet>
          <div style={{ width: '400px', margin: '50px' }}>
            <div>
              <img src={community.thumbnail} alt={community.title} />
            </div>
            <h1>{community.title}</h1>
            <div>{community.desc}</div>
            <div>{community.date}</div>
            <div>조회수: {community.hit}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
