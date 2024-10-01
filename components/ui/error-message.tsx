export const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <p className="text-white bg-red-400 px-1 py-0.5 text-center rounded-b-md font-light text-xs">
      {message}
    </p>
  );
};
