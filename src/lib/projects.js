import fs from "fs";
import {join} from "path";

export function getAllProjectSlugs() {
    const locale = "fr";
    const projectsDir = join(process.cwd(), "src/app", locale, "projects");
    return fs.readdirSync(projectsDir).filter((name) =>
        fs.statSync(join(projectsDir, name)).isDirectory()
    );
}