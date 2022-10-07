
import React from 'react'
import reactDOM from 'react-dom/client'

import {Greeting, Example} from './Greeting';
import Pepita, {Footer} from './Product';

const root = reactDOM.createRoot(document.getElementById('root'));


root.render(<>
  <Greeting/>
  <Example/>
  <Pepita/>
  <Footer/>
</>);