// Registry of web tools shown on /tools/.
// To add one: copy src/pages/tools/_template.astro to src/pages/tools/<slug>.astro,
// build it, then add an entry here with the same slug.
export interface Tool {
  slug: string;       // matches the file name in src/pages/tools/
  title: string;
  summary: string;    // one line: what it does for the person using it
  tags?: string[];
}

export const TOOLS: Tool[] = [
  // { slug: 'csv-to-sql', title: 'CSV to SQL', summary: 'Paste a CSV and get INSERT statements.', tags: ['SQL', 'Data'] },
];
