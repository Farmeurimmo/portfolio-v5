import fs from "fs";
import matter from "gray-matter";
import {join} from "path";

const postsDirectory = join(process.cwd(), "_blog");

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    try {
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const {data, content} = matter(fileContents);

        return {...data, slug: realSlug, content};
    } catch (error) {
    }

    return null;
}

export function getAllPosts() {
    const slugs = getPostSlugs();
    return slugs
        .map((slug) => getPostBySlug(slug))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}