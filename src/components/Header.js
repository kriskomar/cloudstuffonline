import React from 'react';
//import { Link } from 'gatsby';
import '../assets/sass/main.scss';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

const allButt = () => {
  walkTheDOM(document.body, function (node) {
    if (node.nodeType === 3) { // Is it a Text node?
        var text = node.data.trim();
        if (text.length > 0) { // Does it have non white-space text content?
            // process text
            node.data = node.data.replace('The Cloud','My Butt');
            node.data = node.data.replace('The cloud','My butt');
            node.data = node.data.replace('the Cloud','my Butt');
            node.data = node.data.replace('the cloud','my butt');
            node.data = node.data.replace('THE CLOUD','MY BUTT');
            node.data = node.data.replace('Cloud','Butt');
            node.data = node.data.replace('cloud','butt');
            node.data = node.data.replace('CLOUD','BUTT');
        }
    }
  });
}

const noButt = () => {
  walkTheDOM(document.body, function (node) {
    if (node.nodeType === 3) { // Is it a Text node?
        var text = node.data.trim();
        if (text.length > 0) { // Does it have non white-space text content?
            // process text
            node.data = node.data.replace('My Butt','The Cloud');
            node.data = node.data.replace('My butt','The cloud');
            node.data = node.data.replace('my Butt','the Cloud');
            node.data = node.data.replace('my butt','the cloud');
            node.data = node.data.replace('MY BUTT','THE CLOUD');
            node.data = node.data.replace('Butt','Cloud');
            node.data = node.data.replace('butt','cloud');
            node.data = node.data.replace('BUTT','CLOUD');
        }
    }
  });
}

const walkTheDOM = (node, func) => {
  func(node);
  node = node.firstChild;
  while (node) {
      walkTheDOM(node, func);
      node = node.nextSibling;
  }
}

const handleChange = (event) => {
  // do something with event.target.checked
  event.target.checked ? allButt() : noButt();
}

const Header = () => (
  <header id="header">
    <nav>
    <label>
      <Toggle
        //defaultChecked={this.state.buttIsGo}
        onChange={handleChange} />
      <span> Enable Butt</span>
    </label>
{/*       <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/generic">Generic</Link>
        </li>
        <li>
          <Link to="/elements">Elements</Link>
        </li>
      </ul> */}
    </nav>
  </header>
);

export default Header;
