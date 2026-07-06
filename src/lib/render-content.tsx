import Link from "next/link";
import { Fragment, ReactNode } from "react";

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  LINK_PATTERN.lastIndex = 0;
  while ((match = LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>);
    }
    parts.push(
      <Link key={key++} href={match[2]} className="font-semibold text-brand-700 underline hover:text-brand-800">
        {match[1]}
      </Link>,
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>);
  }
  return parts;
}

export function renderArticleContent(content: string[]): ReactNode[] {
  return content.map((block, idx) => {
    if (block.startsWith("## ")) {
      return <h2 key={idx}>{block.slice(3)}</h2>;
    }
    return <p key={idx}>{renderInline(block)}</p>;
  });
}
