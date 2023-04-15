import { BlogList } from '@react-monorepo/ui-template-blog-list';

const getData = async () => {
  const mkdStr = `
  # Markdown Editor
  
  ---
  
  **Hello world!!!**
  
  [![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)](https://avatars.githubusercontent.com/u/1680273?v=4)
  
  \`\`\`js
  import React from "react";
  import ReactDOM from "react-dom";
  import MEDitor from '@uiw/react-md-editor';
  
  \`\`\`
  `;
  return { props: { source: mkdStr } };
};

export const BlogListPage = async (props) => {
  const data = await getData();
  return (
    <>
      {/* <MDEditor value={data.props.source} /> */}
      <BlogList
        heading={'Articles & News'}
        data={data.props.source}
        listContents={[
          {
            title: 'Build a Full-Stack App With React, GraphQL & MongoDB',
            category: 'Cate',
            description: 'Dess',
            image:
              'https://bb.agency/wp-content/uploads/2022/10/1_FvImgRu1xgrkdeV45Ww5Hg-1400x1050@2x.jpeg',
            url: '',
          },
          {
            title: 'Build a Full-Stack App With React, GraphQL & MongoDB',
            category: 'Cate',
            description: 'Dess',
            image:
              'https://bb.agency/wp-content/uploads/2022/10/1_FvImgRu1xgrkdeV45Ww5Hg-1400x1050@2x.jpeg',
            url: '',
          },
          {
            title: 'Build a Full-Stack App With React, GraphQL & MongoDB',
            category: 'Cate',
            description: 'Dess',
            image:
              'https://bb.agency/wp-content/uploads/2022/10/1_FvImgRu1xgrkdeV45Ww5Hg-1400x1050@2x.jpeg',
            url: '',
          },
          {
            title: 'Build a Full-Stack App With React, GraphQL & MongoDB',
            category: 'Cate',
            description: 'Dess',
            image:
              'https://bb.agency/wp-content/uploads/2022/10/1_FvImgRu1xgrkdeV45Ww5Hg-1400x1050@2x.jpeg',
            url: '',
          },
          {
            title: 'Build a Full-Stack App With React, GraphQL & MongoDB',
            category: 'Cate',
            description: 'Dess',
            image:
              'https://bb.agency/wp-content/uploads/2022/10/1_FvImgRu1xgrkdeV45Ww5Hg-1400x1050@2x.jpeg',
            url: '',
          },
          {
            title: 'Build a Full-Stack App With React, GraphQL & MongoDB',
            category: 'Cate',
            description: 'Dess',
            image:
              'https://bb.agency/wp-content/uploads/2022/10/1_FvImgRu1xgrkdeV45Ww5Hg-1400x1050@2x.jpeg',
            url: '',
          },
          {
            title: 'Build a Full-Stack App With React, GraphQL & MongoDB',
            category: 'Cate',
            description: 'Dess',
            image:
              'https://bb.agency/wp-content/uploads/2022/10/1_FvImgRu1xgrkdeV45Ww5Hg-1400x1050@2x.jpeg',
            url: '',
          },
          {
            title: 'Build a Full-Stack App With React, GraphQL & MongoDB',
            category: 'Cate',
            description: 'Dess',
            image:
              'https://bb.agency/wp-content/uploads/2022/10/1_FvImgRu1xgrkdeV45Ww5Hg-1400x1050@2x.jpeg',
            url: '',
          },
          {
            title: 'Build a Full-Stack App With React, GraphQL & MongoDB',
            category: 'Cate',
            description: 'Dess',
            image:
              'https://bb.agency/wp-content/uploads/2022/10/1_FvImgRu1xgrkdeV45Ww5Hg-1400x1050@2x.jpeg',
            url: '',
          },
        ]}
      />
    </>
  );
};

export default BlogListPage;
