import {Author} from "./Author";

export class BlogPost {
    constructor(slug, title, date, coverImage, author, excerpt, ogImage, content, preview) {
        this.slug = slug;
        this.title = title;
        this.date = date;
        this.coverImage = coverImage;
        this.author = Author;
        this.excerpt = excerpt;
        this.ogImage = ogImage;
        this.content = content;
        this.preview = preview;
    }
}