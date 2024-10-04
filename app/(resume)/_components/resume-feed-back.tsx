export const ResumeFeedback = ({ feedback }: { feedback: string[] }) => {
  return (
    <div className="gap-2 flex flex-col cursor-pointer">
      {feedback.length > 0 && (
        <>
          <h3 className="text-lg font-semibold text-center">
            How to improve your resume
          </h3>
          {feedback.map((f, i) => {
            if (f === "") return null;
            return (
              <div
                key={i}
                className="p-3 border border-blue-500 rounded-lg bg-blue-200"
              >
                <p className="text-sm font-semibold text-blue-500">{f}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
