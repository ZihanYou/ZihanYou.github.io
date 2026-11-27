# Zihan You

Academic homepage for [Zihan You (尤子涵)](https://zihanyou.github.io/). The site is a static Next.js app. Edit the typed content under `src/content/`, then rebuild `docs/`.

The Language2Drive project page ([zihanyou.github.io/Language2Drive](https://zihanyou.github.io/Language2Drive/)) lives in another repository. Do not add a `Language2Drive/` directory to this site.

## Update the site

```bash
npm install
npm run build
```

`npm run build` exports the site and copies it to `docs/`. GitHub Pages for this repository is configured to publish the `main` branch from `/docs`. Commit both the source and `docs/` after a successful build. The build also runs `scripts/audit-docs.mjs`, which rejects private text, broken local links, and a missing CV.

```bash
npm run dev
```

opens a local preview. `npm run typecheck` checks TypeScript.

## Where content lives

| Change | File |
| --- | --- |
| Name, about text, links, navigation | `src/content/profile.ts` |
| Papers | `src/content/publications.ts` |
| Selected research | `src/content/projects.ts` |
| Research directions | `src/content/directions.ts` |
| Internships | `src/content/experience.ts` |
| News | `src/content/news.ts` |
| Awards | `src/content/awards.ts` |
| Engineering | `src/content/engineering.ts` |
| Skills | `src/content/skills.ts` |

The homepage, publications page, and CV all read these files. A publication and its selected-research card share one bibliographic record: put the title, authors, venue, and links on the publication, and point the project at it with `publicationId`.

### Add a publication

Add an object to `publications` in `src/content/publications.ts`.

- `status`: `peer-reviewed`, `preprint`, `ongoing`, or `private`.
- `publicVisibility`: `public` or `private`.
- `authorRole`: `first`, `co-first`, `second`, or `co-author`.
- Mark `{ name: "Zihan You", self: true }` in `authors`.
- Add `marker` and `markerLegend` only when the public manuscript prints that footnote.
- Fill `paperUrl`, `codeUrl`, `projectUrl`, or `datasetUrl` only when the resource exists. Leave the field out otherwise. Use `codeLabel: "Repository"` when the repository is not a runnable release, and say so in the summary.
- `topics` is any of `foundation-models`, `agentic-ai`, and `embodied-ai`.
- Put a WebP figure in `public/images/teasers/` and set `thumbnail` with its real width and height.

To feature it on the homepage, add a project in `src/content/projects.ts`. Use `emphasis: "primary"` for a large card. The homepage keeps three primary cards.

### Add news, an award, or a project

Prepend a news item. `sort` is `YYYY-MM` or `YYYY-MM-DD` and must stay in reverse chronological order. Awards and engineering cards are plain entries in their files. Do not invent a date, metric, or link.

### Replace the CV

The CV page is generated from the same content. After `npx next build`, serve `out/` and print `/cv/` to `public/Zihan_You_Academic_CV.pdf`, then run `npm run build` again so the PDF is copied into `docs/`. There is no separate industry résumé in the repository.

### Private entries

Set `publicVisibility: "private"` and `status: "private"`. Private entries are dropped before HTML, JavaScript, and the sitemap are generated. `publications` contains a canary entry, `PRIVATE_CANARY_DO_NOT_PUBLISH_7f3a9c`, so the audit fails if that filter breaks. Do not remove the canary, and do not describe real private work in a public field.

## Deployment

1. Build and audit on this branch.
2. Merge into `main`.
3. In the repository settings, GitHub Pages should stay on **Deploy from a branch**, branch `main`, folder **`/docs`**.

Publishing `main` from the repository root would not serve this site. The root is the Next.js source. Do not force-push `main`.

## 如何更新内容

修改 `src/content/` 里对应的文件，然后运行 `npm run build`。论文、主页精选研究和 CV 使用同一份数据。没有真实链接就不要填按钮。不要把 Language2Drive 项目页的文件放进这个仓库。构建通过后，同时提交源码和 `docs/`。
