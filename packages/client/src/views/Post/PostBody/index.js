import React from 'react';
import ReactMarkdown from 'react-markdown';

const PostBody = ({ body }) => {
  return (
    <div className="post-body">
      <ReactMarkdown allowDangerousHtml children={body} />
    </div>
  );
};

export default PostBody;
