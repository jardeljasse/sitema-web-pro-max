export const metadata = {
  title: "Portal do aluno",
  description: "Portal do aluno no estudo online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        {children}
      </body>
    </html>
  );
}
