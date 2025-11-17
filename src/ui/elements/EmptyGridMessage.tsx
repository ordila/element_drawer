import { Alert } from "@mui/material";

type EmptyGridMessageProps = {
  columnSpan: number;
};

export const EmptyGridMessage = ({ columnSpan }: EmptyGridMessageProps) => {
  return (
    <Alert severity="warning" sx={{ gridColumn: `1 / span ${columnSpan}` }}>
      Add at least one line to preview the form.
    </Alert>
  );
};
