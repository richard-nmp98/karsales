import * as React from 'react';
import ReactDOM from 'react-dom';

if (process.env.NODE_ENV === 'development') {
	if (typeof window !== 'undefined') {
		const config = {
			noHtml: true,
		};
		const context = {
			include: [['#__next']],
		};

		const axe = require('@axe-core/react');
		axe(React, ReactDOM, 1000, config, context);
	}
}
