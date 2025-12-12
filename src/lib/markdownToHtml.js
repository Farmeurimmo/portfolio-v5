import {unified} from 'unified'
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from 'rehype-highlight'
import rehypeHighlightCodeLines from 'rehype-highlight-code-lines'
import remarkImages from 'remark-images'
import rehypeRaw from "rehype-raw";

export default async function markdownToHtml(markdown) {
    const result = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype, {allowDangerousHtml: true})
        .use(rehypeRaw)
        .use(rehypeHighlight)
        .use(rehypeHighlightCodeLines)
        .use(rehypeStringify)
        .use(remarkImages)
        .process(markdown);
    return result.toString();
}