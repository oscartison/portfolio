import Home from 'components/home-page/home';
import { GetStaticProps, NextPage } from 'next';
import { BlogPostProps } from 'interfaces/interface';
import PageLayout from 'components/layouts/pageLayout';

const Index: NextPage<BlogPostProps> = (props) => {
  const { posts } = props;
  return (
    <PageLayout title="Oscar Tison - Full Stack Developer">
      <Home posts={posts} />
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = [];

  if (!posts) {
    return {
      notFound: true
    };
  }

  return {
    props: { posts },
    revalidate: 1
  };
};

export default Index;
