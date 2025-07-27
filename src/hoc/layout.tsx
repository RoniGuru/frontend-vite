import NavBar from '../components/UI/NavBar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full">
      <NavBar />
      {children}
    </div>
  );
};

export default RootLayout;
