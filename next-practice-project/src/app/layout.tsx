import "@/app/globals.css";

export const metadata = {
  title: "Sports Legends",
  description: "Find profiles of famous sports legends",
};

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
