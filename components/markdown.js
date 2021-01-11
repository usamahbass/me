import Proptypes from "prop-types";

export default function Markdown({ source }) {
  return (
    <article
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: source }}
    />
  );
}

Markdown.propTypes = {
  source: Proptypes.string.isRequired,
};
