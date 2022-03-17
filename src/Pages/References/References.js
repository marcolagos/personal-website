import React from "react";
import ReferencesCard from "../../Components/ReferencesCard/ReferencesCard";
import Background from "../../Assets/mountain-night.jpeg";
import { Container, Row, Col } from "react-bootstrap";

function References() {
	return (
		<section className="references-section">
			<Container fluid className="references-container">
				<Container className="references-intro">
					<h1 className="references-title" data-aos="fade-up" data-aos-duration="1500">
						References
					</h1>
					<p className="references-comment" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
						Feel free to leave comments{" "}
						<a href="/contact" target="_blank" rel="noreferrer" className="dim-orange">
							here
						</a>
						!
					</p>
					<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
						<Col
							md={4}
							className="references-card"
							data-aos="fade-left"
							data-aos-duration="1000"
							data-aos-delay="100"
						>
							<ReferencesCard
								date={"01/31/2022"}
								title={"Predict Stock Prices Using Python & Machine Learning"}
								github={"https://github.com/marcolagos/marco-lagos"}
								description={
									"In this article I will show you how to write a python program that predicts the price of stocks using two different machine learning algorithms, one is called a Support Vector Regression (SVR) and the other is Linear Regression. So you can start trading and making money !"
								}
								article={
									"In this article I will show you how to write a python program that predicts the price of stocks using two different machine learning algorithms, one is called a Support Vector Regression (SVR) and the other is Linear Regression. So you can start trading and making money ! Actually this program is really simple and I doubt any major profit will be made from this program, but it may be slightly better than guessing! It is extremely hard to try and predict the direction of the stock market, but in this article I will give it a try. Even people with a good understanding of statistics and probabilities have a hard time doing this. A Support Vector Regression (SVR) is a type of Support Vector Machine, and is a type of supervised learning algorithm that analyzes data for regression analysis. In 1996, this version of SVM for regression was proposed by Christopher J. C. Burges, Vladimir N. Vapnik, Harris Drucker, Alexander J. Smola and Linda Kaufman. The model produced by SVR depends only on a subset of the training data, because the cost function for building the model ignores any training data close to the model prediction. Linear regression is a linear approach to modeling the relationship between a scalar response (or dependent variable) and one or more explanatory variables (or independent variables). If you prefer not to read this article and would like a video representation of it, you can check out the YouTube Video below. It goes through everything in this article with a little more detail, and will help make it easy for you to start programming your own Machine Learning model even if you don’t have the programming language Python installed on your computer. Or you can use both as supplementary materials for learning about Machine Learning ! If you are also interested in reading more on machine learning to immediately get started with problems and examples then I strongly recommend you check out Hands-On Machine Learning with Scikit-Learn and TensorFlow: Concepts, Tools, and Techniques to Build Intelligent Systems. It is a great book for helping beginners learn how to write machine learning programs, and understanding machine learning concepts."
								}
							/>
						</Col>
						<Col
							md={4}
							className="references-card"
							data-aos="fade-left"
							data-aos-duration="1000"
							data-aos-delay="100"
						>
							<ReferencesCard
								date={"01/31/2022"}
								title={"Personal Website"}
								github={"https://github.com/marcolagos/marco-lagos"}
								description={
									"Used React.js/React.js Libraries and Firestore, designed this website, and launched it on Netlify. Some React libraries include React Router, React Bootstrap, React Icons, and Framer Motion."
								}
							/>
						</Col>
						<Col
							md={4}
							className="references-card"
							data-aos="fade-left"
							data-aos-duration="1000"
							data-aos-delay="100"
						>
							<ReferencesCard
								date={"01/31/2022"}
								title={"Personal Website"}
								github={"https://github.com/marcolagos/marco-lagos"}
								description={
									"Used React.js/React.js Libraries and Firestore, designed this website, and launched it on Netlify. Some React libraries include React Router, React Bootstrap, React Icons, and Framer Motion."
								}
							/>
						</Col>
						<Col
							md={4}
							className="references-card"
							data-aos="fade-left"
							data-aos-duration="1000"
							data-aos-delay="100"
						>
							<ReferencesCard
								date={"01/31/2022"}
								title={"Personal Website"}
								github={"https://github.com/marcolagos/marco-lagos"}
								description={
									"Used React.js/React.js Libraries and Firestore, designed this website, and launched it on Netlify. Some React libraries include React Router, React Bootstrap, React Icons, and Framer Motion."
								}
							/>
						</Col>
					</Row>
				</Container>
			</Container>
		</section>
	);
}

export default References;
