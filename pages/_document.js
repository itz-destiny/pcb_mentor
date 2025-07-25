import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap"
        />
        <style>
          {`
            :root {
              --background: #ffffff;
              --foreground: #171717;
              --primary: #4373c7;
              --text-secondary: #4b5563;
              --color-background: var(--background);
              --color-foreground: var(--foreground);
              --color-primary: var(--primary);
              --color-text-secondary: var(--text-secondary);
              --font-sans: "Manrope", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              --font-mono: "Manrope", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            body {
              background: var(--color-background);
              color: var(--color-foreground);
              font-family: var(--font-sans);
              margin: 0;
              padding: 0;
            }
          `}
        </style>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}