import React, { Component, ErrorInfo } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from '../types';
import noData from '../assets/no_data.png';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	public state: ErrorBoundaryState = {
		hasError: false
	};

	public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Uncaught error:', error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			return (
				<div className="error-boundary">
					<img src={noData} alt="CodeSandbox had an error" />
					<p>
						Hi Mr. Jellybean, I’m Morty. I’m on an adventure with my grandpa.{' '}
						<span role="img" aria-label="waving">
							👋
						</span>
					</p>
					<p>
						If you're seeing an error that says something along the lines of, "The code failed to transpile"
						it is a problem with CodeSandbox due to having Dynamic Imports via React.Lazy and Suspense.
						Please refresh the page or open in a new tab.
					</p>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
