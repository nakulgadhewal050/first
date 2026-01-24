import "./globals.css";



export default function RootLayout({ children, team, analytics }) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
