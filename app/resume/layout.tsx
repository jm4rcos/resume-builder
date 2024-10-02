import { Navbar } from "@/components/navbar";

const ResumeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex-col items-center justify-center bg-foreground overflow-hidden flex h-screen">
      <Navbar />
      <div className="pt-16 w-full flex justify-center mx-auto">{children}</div>
    </div>
  );
};

export default ResumeLayout;
