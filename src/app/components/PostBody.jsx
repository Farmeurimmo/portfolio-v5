import markdownStyles from "./markdown-styles.module.css";

export function PostBody({content}) {
    return (
        <div className="max-w-3xl mx-auto mb-8">
            <div
                className={markdownStyles["markdown"]}
                dangerouslySetInnerHTML={{__html: content}}
            />
        </div>
    );
}