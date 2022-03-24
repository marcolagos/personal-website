# Heading 1 (h1, one #)
<br>
## Heading 2 (h2, two #)
<br>
### Heading 3 (h3, three #)
<br>
#### Heading 4 (h4, four #)
<br>
##### Heading 5 (h5, five #)
<br>
###### Heading 6 (h6, six #)
<br>
Paragraph (p): <br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<br>
<br>
Bold (strong, two *): <br>
Lorem ipsum **dolor** sit amet, consectetur **adipiscing** elit.
<br>
<br>
Italic (em, one *): <br>
Lorem ipsum *dolor* sit amet, consectetur *adipiscing* elit.
<br>
<br>
Bold/Italic (strong/em, three *): <br>
Lorem ipsum ***dolor*** sit amet, consectetur ***adipiscing*** elit.
<br>
<br>
Blockquote (blockquote, \n blockquote \n): <br>

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

<br>
<br>
Lists:
Ordered List (ol-li, \n numbered \n, nest with indentations): <br>

1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

<br>
<br>
Unordered List (ul-li, \n *+- \n, nest with indentations): <br>

- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.

<br>
<br>
Code Component (Code, Code tag, include language as props):
<br>

<Code language="javascript">
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
&nbsp;
function App() {
&nbsp;
	return (
		\<Container fluid className="footer-container fixed-bottom">
			\<Row>
				\<Col md="4" className="">\</Col>
				\<Col md="4" className="">\</Col>
				\<Col md="4" className="">\</Col>
			\</Row>
		\</Container>
	);
}
&nbsp;
export default App;
</Code>
<br>
<br>
Links (a, \[words in brackets\] (link "hover tooltip"), turn url or email into link use angle brackets<br>
[These are the words that hold the link, hover for tooltip](https://www.youtube.com/watch?v=dQw4w9WgXcQ "Dare you to click")
<br>
<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">This opens new window</a>
<br>
<br>
Media Component (Media, \<Media>, include folder={name of post}/image={filename.extension})
<Media folder="example-markdown" image="example-picture.jpg" />
<br>
<br>
<Latex>
This is example latex. Here are some basic symbols:
$$ \phi, \lambda, \omega,  $$
</Latex>
<Latex>
This is example latex. Here are some basic symbols:
$$ \phi, \lambda, \omega,  $$
</Latex>

<br>
<br>