const ResumeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full items-center justify-center bg-slate-100 flex min-h-screen">
      <div className="max-w-6xl w-full flex justify-center mx-auto">
        {children}
      </div>
    </div>
  );
};

export default ResumeLayout;
