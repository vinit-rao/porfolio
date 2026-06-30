import projectsData from '../data/projects';

// Turn a project title into a URL-safe slug, e.g. "Refuse Music Video" -> "refuse-music-video"
export const slugify = (title = '') =>
    title
        .toLowerCase()
        .replace(/['’]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

// Where a card should take you. Projects with a bespoke page keep their
// explicit internalLink (e.g. Benny's); everything else gets a generated
// in-site detail route.
export const projectHref = (project) =>
    project.internalLink || `/project/${slugify(project.title)}`;

export const findProjectBySlug = (slug) =>
    projectsData.find((p) => slugify(p.title) === slug);

// Pull a YouTube video id out of the various URL shapes used in the data.
export const youtubeId = (url = '') => {
    const m = url.match(/(?:v=|youtu\.be\/|\/shorts\/|\/embed\/)([A-Za-z0-9_-]{11})/);
    return m ? m[1] : null;
};
