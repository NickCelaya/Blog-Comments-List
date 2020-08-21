import React from "react";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import "./App.css";
import faker from "faker";

const App = () => {
	return (
		<div className='ui container comments'>
			<ApprovalCard>
				<CommentDetail
					author='Nick'
					time='Today at 3:00am'
					comment='So hot!'
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author='Jessica'
					time='Today at 10:00am'
					comment='I like this post!'
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author='Ronan'
					time='Today at 5:00pm'
					comment="If you wrote a book I'd buy it"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
};

export default App;
