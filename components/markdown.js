import { useEffect, useState } from "react";
import { Box, useClipboard, IconButton, Tooltip } from "@chakra-ui/react";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Copy as CopyIcon, Check as CheckIcon } from "react-feather";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Markdown({ source }) {
  const [codeValue, setCodeValue] = useState("");

  const { onCopy } = useClipboard(codeValue);

  useEffect(() => {
    if (codeValue !== "") {
      onCopy();
    }

    return () =>
      setTimeout(() => {
        setCodeValue("");
      }, 1000);
  }, [codeValue]);

  return (
    <ReactMarkdown
      className="markdown-body"
      rehypePlugins={[rehypeRaw]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");

          return !inline && match ? (
            <Box width="100%">
              <IconButton
                float="right"
                size="sm"
                bg="transparent"
                onClick={() => setCodeValue(String(children))}
              >
                {codeValue === String(children) ? (
                  <Tooltip label="Copied" isOpen placement="left" hasArrow>
                    <CheckIcon color="green" />
                  </Tooltip>
                ) : (
                  <CopyIcon />
                )}
              </IconButton>

              <SyntaxHighlighter
                PreTag="div"
                style={oneDark}
                language={match[1]}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            </Box>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {source}
    </ReactMarkdown>
  );
}
