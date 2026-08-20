import { Component, type ReactNode, type ErrorInfo } from "react";
import i18n from "../i18n";
import { Container, buttonClass } from "./ui";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen flex items-center">
          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-6">
                <h1 className="font-extrabold text-4xl leading-tight md:text-5xl lg:text-6xl text-gray-900">
                  {i18n.t("errorBoundary.title")}
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {i18n.t("errorBoundary.description")}
                </p>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => window.location.reload()}
                  className={buttonClass("primary", "md", "gap-2")}
                >
                  {i18n.t("errorBoundary.refresh")}
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
