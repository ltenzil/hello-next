import Header from './Header';
import { Grid, Loader } from 'semantic-ui-react';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <Grid>
    <Header />
    {props.children}
  </Grid>
);

export default Layout;