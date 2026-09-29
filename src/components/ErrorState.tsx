import type { ReactNode } from "react";

interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
  children?: ReactNode;
}

export function ErrorState({
  message,
  onRetry,
  children,
}: ErrorStateProps) {
  return (
    <div className="state state-error" role="alert">
      <p>{message}</p>

      {onRetry && (
        <button
          type="button"
          className="btn"
          onClick={onRetry}
        >
          Retry
        </button>
      )}

      {children}
    </div>
  );
}