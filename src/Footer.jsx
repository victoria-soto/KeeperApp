import React from "react";

function Footer (){
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
var year = new Date().getFullYear();

return (<footer><p>Copyright &#169; {year}</p></footer>);
}

export default Footer;