import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
a {
	text-decoration: none;
	color: inherit;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
.beforerefresh {
	background: white;
}
.topbar {
	height: 100px;
	background-color: white;
	position: fixed;
	top: 0;
	width: 100%;
	transition: background-color 0.3s ease-in-out;
}


.content {
	height: 2000px;
}
.search-box {
	margin-top: 25px;
	margin-bottom: 20px;
	width: 80%;
	height: 60px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 30px;
  padding: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}

.search-box input[type="text"] {
  border: none;
  flex: 1;
  margin-right: 10px;
  font-size: 28px;
	padding-left: 10px;
  color: #333;
  outline: none;
}

.search-box button[type="submit"] {
	width: 50px;
	height: 50px;
  border: none;
  background-color: #f7941e;
  color: #fff;
  border-radius: 50%;
	text-align: center;
  font-size: 25px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.search-box button[type="submit"]:hover {
  background-color: #e67e22;
}
table {
	border-collapse: collapse;
	width: 100%;
}

th, td {
	height: 20px;
	padding: 8px;
	text-align: center;
	border-bottom: 1px solid #ddd;
	vertical-align: middle;
}


/* Cool design */
.cool-table {
	width: 100%;
	table-layout: fixed;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 3px 10px 10px rgba(0, 0, 0, 0.2);
}

.katex { font-size: 2em; }

tr:hover td {
  background-color: #f1f1f1;
	cursor: pointer;
}
.cool-table th {
	background-color: #333;
	color: #29B1DA;
	font-size: 18px;
	font-weight: bold;
	letter-spacing: 1px;
	font-family: 'Abel', sans-serif;

}

.cool-table td {
	background-color: #f9f9f9;
	font-size: 18px;
	font-family: 'Abel', sans-serif;
	
}


/* Sidebar styles */
.sidebar {
	background-color: #333;
	color: white;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	
}

.sidebar h1 {
	font-size: 18px;
	font-weight: bold;
	margin-top: 0;
	margin-bottom: 10px;
}

.sidebar p {
	margin: 0;
}

.sidebar ul {
	margin: 10px 0;
	padding: 0;
	list-style-type: none;
}

.sidebar li {
	margin-bottom: 5px;
}

.sidebar input[type="checkbox"],
.sidebar input[type="radio"] {
	margin-right: 5px;
}


.range-slider {
  position: relative;
  height: 8px;
  background-color: #fff;
	opacity: 0.9;
  margin-bottom: 10px;
	border-radius: 20px;
  box-shadow: 2px 2px 6px rgba(0,0,0,0);
}

.slider-range {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 70%;
  background-color: #aaa;
}

.input-container {
  display: flex;
  justify-content: space-between;
}

.slider-input {
	width: 100%;
	height: 100%;
  border: 1px solid #888;
  padding: 4px;
  text-align: center;
	border-radius: 3px;
}
.slider-form {
  width: 30%;
	height: 10px;
}
col.width1 {
	width: 33%;
}

col.width2 {
	width: 33%;
}

col.width3 {
	width: 33%;
}
col.width4 {
	width: 33%;
}

col.width5 {
	width: 33%;
}

col.width6 {
	width: 33%;
}
col.width7 {
	width: 33%;
}

col.width8 {
	width: 33%;
}

col.width9 {
	width: 33%;
}
col.width9 {
	width: 33%;
}
col.width10 {
	width: 33%;
}
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading-spinner {
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #383636; /* Blue */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
}

.spinner-container {
	margin-right: 100px;
  display: grid;
  justify-content: center;
  align-items: center;
  height: 350px;
}

.spinner-container1 {
	margin-top: 200px;
  display: grid;
  justify-content: center;
  align-items: center;
  height: 350px;
}
`;
