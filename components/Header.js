import React from 'react';
import { Menu, Segment,Label, Button } from 'semantic-ui-react';
import {Link} from '../routes';

export default () => {
return (
<Segment style = {{height: '100px'}} inverted>

<Menu style = {{marginTop: '10px'}} inverted pointing secondary>


<Link route ="/">
<a className = "item">Job Contracts
</a>
</Link>


<Link route ="/about">
<a className = "item">About
</a>
</Link>



<Menu.Menu position = "right">
<Link route ="/contracts/new">
<Button content ="Create Contract" icon= "add circle" primary/>
</Link>

</Menu.Menu>
</Menu>
</Segment>
);

}
