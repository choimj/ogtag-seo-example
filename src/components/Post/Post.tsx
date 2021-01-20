import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { communities } from '../../data/community_list';

const Post = (): React.ReactElement => {
  const params = useParams<{ id: string }>();
  const id = params?.id ?? '';
  const community = id && communities.find((community) => community.no === Number(id));

  return (
    <div>
      {community && (
        <>
          <HelmetProvider>
            <Helmet>
              <title>{community.title}</title>
              <meta property="og:site_name" content="WEHAGO22222" />
              <meta property="og:title" content={community.title} />
              <meta property="og:image" content={community.thumbnail} />
              <meta property="og:url" content={document.location.href} />
              <meta property="og:description" content={community.desc} />
            </Helmet>
          </HelmetProvider>
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
