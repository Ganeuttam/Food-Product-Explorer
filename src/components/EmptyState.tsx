interface EmptyStateProps {
  message: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({
  message,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="state">
      <p>{message}</p>

      {actionLabel && onAction && (
        <button
          type="button"
          className="btn btn-outline"
          onClick={onAction}
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}