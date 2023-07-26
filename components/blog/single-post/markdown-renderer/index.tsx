import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism } from "@mantine/prism";
import { Language } from "prism-react-renderer";

export default function MarkdownRenderer({ children }: { children: string }) {
  /* eslint-disable @next/next/no-img-element */

  return (
    <ReactMarkdown
      components={{
        h1: ({ children, ...props }) => (
          <h1 className="heading font-bold !max-w-full my-[1rem]" {...props}>
            {children}
          </h1>
        ),
        h2: ({ children, ...props }) => (
          <h2 className="subheading font-bold !max-w-full my-[1rem]" {...props}>
            {children}
          </h2>
        ),
        p: ({ children, ...props }) => (
          <p className="paragraph !max-w-full my-[1rem]" {...props}>
            {children}
          </p>
        ),
        img: ({ alt, ...props }) => (
          <img alt={alt} {...props} className="max-w-full mx-auto" />
        ),
        code: ({ node, inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || "");

          return !inline && match ? (
            <Prism
              withLineNumbers
              language={match[1] as Language}
              colorScheme="dark"
            >
              {String(children).replace(/\n$/, "")}
            </Prism>
          ) : (
            <code className="bg-darkgray p-[0.25rem]" {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
