import React from "react";

const ApprovalCard = (props) => {
	console.log(props);
	return (
		<div className='ui card'>
			<div className='content'>{props.children}</div>
			<div className='extra content'>
				<div className='ui two buttons'>
					<div className='ui basic green button'>Approve</div>
					<div className='ui basic red button'>Reject</div>
				</div>
			</div>
		</div>
	);
};

export default ApprovalCard;

//props.childern is the CommentDetail component. In App.js we wrapped the ApprovalCard component
// around the CommentDetail making a parent child component relationship. which is why we can access CommentDetail
// as props.children here in the ApprovalCard component.
