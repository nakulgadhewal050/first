import "./globals.css";



export default function RootLayout({ children, team, analytics }) {
  return (
    <html lang="en">
      <body className="flex w-screen h-screen">
        <div className="w-[50%] bg-red-200">{children}</div>
        <div className="w-[50%] bg-blue-200">
          {team}
        </div>
        <div className="w-[50%] bg-green-200">
          {analytics}
        </div>
      </body>
    </html>
  );
}
