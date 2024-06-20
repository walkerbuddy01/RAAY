import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface ErrorMessageProps {
  message?: string;
}

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    message && (
      <div className=" bg-destructive/30 dark:bg-destructive/70 text-destructive dark:text-red-300 font-medium text-sm p-3 rounded-md flex items-center ">
        <ExclamationTriangleIcon className="h-4 w-4 mr-2" /> {message}
      </div>
    )
  );
}
400;

export default ErrorMessage ;
