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
            <meta property="og:title" content={community.title} />
            <meta property="og:image" content={community.thumbnail} />
            <meta property="og:site_name" content="WEHAGO" />
            <meta property="og:description" content={community.desc} />
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
