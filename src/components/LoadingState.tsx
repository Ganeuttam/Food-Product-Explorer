interface LoadingStateProps {
  message: string;
}

export function LoadingState({
  message,
}: LoadingStateProps) {
  return (
    <div className="state" role="status">
      <div className="spinner" />
      <p>{message}</p>
    </div>
  );
}