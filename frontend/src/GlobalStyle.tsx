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
	text-decoration: none
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
	height: 50px;
	background-color: white;
	position: fixed;
	top: 0;
	width: 100%;
	transition: background-color 0.3s ease-in-out;
}

.topbar.scrolled {
	background-color: #212121;
}

.content {
	height: 2000px;
}
.search-box {
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
  font-size: 16px;
  color: #333;
  outline: none;
}

.search-box button[type="submit"] {
  border: none;
  background-color: #f7941e;
  color: #fff;
  border-radius: 50%;
  padding: 10px 16px;
  font-size: 16px;
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
	padding: 8px;
	text-align: left;
	border-bottom: 1px solid #ddd;
}

th {
	background-color: #4CAF50;
	color: white;
}

tr:hover {
	background-color: #f5f5f5;
}

/* Cool design */
.cool-table {
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.cool-table th {
	background-color: #333;
	color: white;
	font-weight: bold;
	text-transform: uppercase;
	font-size: 14px;
	letter-spacing: 1px;
}

.cool-table td {
	background-color: #f9f9f9;
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

// 여기서 부

.middle {
	position: relative;
	width: 50%;
	max-width: 500px;
}

.slider {
	position: relative;
	z-index: 1;
	height: 10px;
	margin: 0 15px;
}
.slider > .track {
	
	
	position: absolute;
	z-index: 1;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	border-radius: 5px;
	background-color: #c6aee7;
}
.slider > .range {
	position: absolute;
	z-index: 2;
	left: 25%;
	right: 25%;
	top: 0;
	bottom: 0;
	border-radius: 5px;
	background-color: #6200ee;
}
.slider > .thumb {
	position: absolute;
	z-index: 3;
	width: 30px;
	height: 30px;
	background-color: #6200ee;
	border-radius: 50%;
	box-shadow: 0 0 0 0 rgba(98,0,238,.1);
	transition: box-shadow .3s ease-in-out;
}
.slider > .thumb.left {
	left: 25%;
	transform: translate(-15px, -10px);
}
.slider > .thumb.right {
	right: 25%;
	transform: translate(15px, -10px);
}
.slider > .thumb.hover {
	box-shadow: 0 0 0 20px rgba(98,0,238,.1);
}
.slider > .thumb.active {
	box-shadow: 0 0 0 40px rgba(98,0,238,.2);
}

input[type=range] {
	position: absolute;
	pointer-events: none;
	-webkit-appearance: none;
	z-index: 2;
	height: 10px;
	width: 100%;
	opacity: 0;
}
input[type=range]::-webkit-slider-thumb {
	pointer-events: all;
	width: 30px;
	height: 30px;
	border-radius: 0;
	border: 0 none;
	background-color: red;
	-webkit-appearance: none;
}

`;
