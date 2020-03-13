import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';

const Posts = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p style={{height: "50em"}}>
    	{props.show.image ? <img src={props.show.image.medium} style={{float: "left", padding: "0.5em"}} /> : null}
    	{props.show.summary.replace(/<[/]?[pb]>/g, '')}
    </p>
    
  </Layout>
);

Posts.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Posts;