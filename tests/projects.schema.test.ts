import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import { describe, it, expect } from "vitest";

const projectsDir = join(process.cwd(), "src", "content", "projects");
const projectFiles = readdirSync(projectsDir).filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));

const projects = projectFiles.map((file) => {
  const raw = readFileSync(join(projectsDir, file), "utf-8");
  const { data } = matter(raw);
  return data as Record<string, unknown>;
});

describe("projects collection", () => {
  it("all projects have required fields", () => {
    expect(projects.length).toBeGreaterThan(0);
    projects.forEach((p) => {
      expect(p.title).toBeDefined();
      expect(["alpha", "beta", "stable"]).toContain(p.status);
      expect(p.date).toBeDefined();
    });
  });
});
