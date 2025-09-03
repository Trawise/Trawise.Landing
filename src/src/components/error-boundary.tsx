import { Component, type ReactNode, type ErrorInfo } from 'react';
import { Container } from './ui';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <main className="min-h-screen flex items-center">
                    <Container>
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <div className="text-center space-y-6">
                                <h1 className="font-extrabold text-4xl leading-tight md:text-5xl lg:text-6xl text-gray-900">
                                    Something went wrong
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                                    We're sorry, but something unexpected happened. Please try refreshing the page.
                                </p>
                            </div>

                            <div className="pt-8">
                                <button
                                    onClick={() => window.location.reload()}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Refresh Page
                                </button>
                            </div>
                        </div>
                    </Container>
                </main>
            );
        }

        return this.props.children;
    }
}
