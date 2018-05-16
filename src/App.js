import React, { Component } from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2'
import styled from 'styled-components';
import './App.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
require('codemirror/mode/htmlmixed/htmlmixed');


const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
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
	border: solid 2px palevioletred;
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

class App extends Component {
	state = {
		value: '<h1>Hello</h1>\n<p>Type something here!</p>'
	};

  	handleChange = (event) => {
    	this.setState({value: event.target.value});
	}
	
	createMarkup = () => {
        return {__html: this.state.value};
    }

  	render() {
    	return (
      		<Wrapper>
				<Title>{`Welcome, let's learn web development!`}</Title>
				<MainList>
					<ListItem>
					<CodeMirror
						value={this.state.value}
						options={{
								mode: 'htmlmixed',
								theme: 'monokai',
								lineNumbers: true
							}}
							onBeforeChange={(editor, data, value) => {
								this.setState({value});
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
