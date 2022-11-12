import React, { useState } from 'react';
import router from '../../utils/router';

const FoobarPage = () => {
	return (
		<div>
			FoobarPage
			<span>
				<router.Link to="/">Home</router.Link>
			</span>
		</div>
	);
};

export default FoobarPage;
