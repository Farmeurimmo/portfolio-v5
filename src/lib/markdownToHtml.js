import remarkGfm from "remark-gfm";
import rehypeHighlight from 'rehype-highlight'
import ReactMarkdown from "react-markdown";

export default async function markdownToHtml(markdown) {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
        >
            {markdown}
        </ReactMarkdown>
    );
}