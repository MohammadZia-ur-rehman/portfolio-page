import "./globals.css";
import Railway from "next/font/local";

const railway = Railway({ src: "./Raleway-Regular.ttf" });

export const metadata = {
  title: "Portfolio Application",
  description: "Created in NextJS using Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${railway.className} flex justify-center content-center`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
