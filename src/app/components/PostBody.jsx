export function PostBody({content}) {
    return (
        <div className="max-w-5xl mx-auto mb-8 px-4 overflow-scroll">
            <div
                className={"markdown"}>
                {content}
            </div>
        </div>
    );
}