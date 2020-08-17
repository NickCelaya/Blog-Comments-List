import React from "react";
// import faker from "faker";

const CommentDetail = (props) => {
	console.log(props);
	return (
		<div>
			<div className='comment'>
				<a href='/' className='avatar'>
					<img alt='avatar' src={props.avatar} />
				</a>
				<div className='content'>
					<a href='/' className='author'>
						{props.author}
					</a>
				</div>
				<div className='metadata'>
					<span className='date'>{props.time}</span>
				</div>
				<div className='text'>{props.comment}</div>
			</div>
		</div>
	);
};

export default CommentDetail;
