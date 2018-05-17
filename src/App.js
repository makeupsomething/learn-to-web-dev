import React, { Component } from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2'
import styled from 'styled-components';
import './App.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
require('codemirror/mode/htmlmixed/htmlmixed');
require('codemirror/mode/css/css');


const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: turquoise;
`;

const Wrapper = styled.section`
	padding-top: 1%;
	padding-left: 1%;
	padding-right: 1%;
	height: 100%;
	background: papayawhip;
`;

const CodeOutput = styled.div`
	margin: auto;
	font-size: 1em;
	width: 90%;
	height: 300px;
	color: black;
	border: solid 2px turquoise;
`;

const MainList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%; /* Full height */
    position: fixed; /* Make it stick, even on scroll */
    overflow: auto; /* Enable scrolling if the sidenav has too much content */
`

const ListItem = styled.li`
	display: inline-block;
	float: left;
	width: 50%;
	height: 100;
`

const TabButton = styled.button.attrs({
	background: props => props.background || 'turquoise'
})`
	overflow: hidden;
    border: 1px solid #ccc;
	color: white;
    background: ${props => props.background};
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;

	${TabButton}:hover {
    	background-color: darkturquoise;
  	}
`

class App extends Component {
	state = {
		value_html: '<h1>Hello, this is a header</h1>\n<p>This is a paragraph, check out the CSS tab of your code editor and and try to change the color.</p>',
		value_css: 'p {\n color: darkviolet;\n}',
		editor: 'html',
	};

  	handleChange = (event) => {
    	this.setState({value: event.target.value});
	}
	
	createMarkup = () => {
		let finalStyle = `${this.state.value_html}
						<style type="text/css">
							${this.state.value_css}
						</style>`
        return {__html: finalStyle};
	}
	
	setEditor = (editorType) => {
		this.setState({editor: editorType});
	}

  	render() {
    	return (
      		<Wrapper>
				<Title>{`Welcome, let's learn web development!`}</Title>
				<TabButton background={this.state.editor === 'html' ? 'darkturquoise' : ''} onClick={() => this.setEditor('html')}>HTML</TabButton>
				<TabButton background={this.state.editor === 'css' ? 'darkturquoise' : ''} onClick={() => this.setEditor('css')}>CSS</TabButton>
				<MainList>
					<ListItem>
					<CodeMirror
						value={this.state.editor === 'html' ? this.state.value_html : this.state.value_css}
						options={{
								mode: this.state.editor === 'html' ? 'htmlmixed' : 'css',
								theme: 'monokai',
								lineNumbers: true,
							}}
							onBeforeChange={(editor, data, value) => {
								this.state.editor === 'html' ? this.setState({value_html: value}) : this.setState({value_css: value});
							}}
							onChange={(editor, data, value) => {}}
						/>
					</ListItem>
					<ListItem>
						<CodeOutput dangerouslySetInnerHTML={this.createMarkup()}></CodeOutput>
					</ListItem>
				</MainList>
      		</Wrapper>
    	);
  	}
}

export default App;
