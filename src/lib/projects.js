import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'

const projectsDirectory = join(process.cwd(), '_projects')

export function getProjectsSlugs() {
    const files = fs.readdirSync(projectsDirectory)
    // Return slugs with locale information
    return files
        .filter(file => file.match(/\.(en|fr)\.md$/))
        .map(file => {
            const match = file.match(/^(.+)\.(en|fr)\.md$/)
            return {
                slug: match[1],
                locale: match[2]
            }
        })
}

export function getProjectBySlug(slug, locale) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(projectsDirectory, `${realSlug}.${locale}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const {data, content} = matter(fileContents)

    return {slug: realSlug, frontmatter: data, content}
}

export function getAllProjects() {
    const files = fs.readdirSync(projectsDirectory);
    return files
        .map(filename => {
            const slug = filename.replace(/\.md$/, '');
            const fullPath = join(projectsDirectory, filename);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const {data, content} = matter(fileContents);

            return {slug: slug, frontmatter: data, content};
        })
        .sort((project1, project2) => (project1.frontmatter.date > project2.frontmatter.date ? -1 : 1));
}

