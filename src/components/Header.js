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
            node.data = node.data.replace(/The Cloud/g,'My Butt');
            node.data = node.data.replace(/The cloud/g,'My butt');
            node.data = node.data.replace(/the Cloud/g,'my Butt');
            node.data = node.data.replace(/the cloud/g,'my butt');
            node.data = node.data.replace(/THE CLOUD/g,'MY BUTT');
            node.data = node.data.replace(/Cloud/g,'Butt');
            node.data = node.data.replace(/cloud/g,'butt');
            node.data = node.data.replace(/CLOUD/g,'BUTT');
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
            node.data = node.data.replace(/My Butt/g,'The Cloud');
            node.data = node.data.replace(/My butt/g,'The cloud');
            node.data = node.data.replace(/my Butt/g,'the Cloud');
            node.data = node.data.replace(/my butt/g,'the cloud');
            node.data = node.data.replace(/MY BUTT/g,'THE CLOUD');
            node.data = node.data.replace(/Butt/g,'Cloud');
            node.data = node.data.replace(/butt/g,'cloud');
            node.data = node.data.replace(/BUTT/g,'CLOUD');
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
