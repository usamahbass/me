import Proptypes from "prop-types";

export default function Markdown({ source }) {
  return (
    <article
      className="markdown-body"
      style={{ marginBottom: 50 }}
      dangerouslySetInnerHTML={{ __html: source }}
    />
  );
}

Markdown.propTypes = {
  source: Proptypes.string.isRequired,
};
