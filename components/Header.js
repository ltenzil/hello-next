import Link from 'next/link';
import {Menu} from 'semantic-ui-react';

const Header = () => (
  <div class="ui fluid menu borderless">
  	<Menu>
	    <Link href="/">
	      <a>Home</a>
	    </Link>
	  
	    <Link href="/about">
	      <a>About</a>
	    </Link>
	    <Link href="/blog">
	      <a>Blogs</a>
	    </Link>
	  </Menu>
  </div>
);

export default Header;