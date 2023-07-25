import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Marchotridyo</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="Marchotridyo is a full-stack web developer with a good sense in design and product management. You can see his portfolio and blog here."
        />
      </Head>
      <main
        className={`${outfit.variable} ${plusJakartaSans.variable} bg-offwhite`}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: "light",
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </main>
    </>
  );
}
