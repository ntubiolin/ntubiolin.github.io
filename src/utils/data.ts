import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';
import { formatText } from './format';
// @ts-ignore
import bibtexParse from 'bibtex-parse-js';

export interface CVData {
    name: {
        first: string;
        last: string;
    };
    email: string;
    pdf: string;
    src: string;
    url: string;
    social: {
        github: string;
        linkedin: string;
        google_scholar: string;
    };
    about: string;
    current_position: Position[];
    education: Education[];
    positions: Position[];
    honors: Honor[];
    service: Service;
    skills: Skill[];
    teaching: Teaching[];
    repos: Repo[];
    talks: Talk[];
    advising: Advising[];
}

export interface Position {
    place: string;
    location?: string;
    title: string;
    dates: string;
    details?: string[];
    inline_detail?: string;
}

export interface Education {
    school: string;
    location: string;
    degree: string;
    dates: string;
    overallGPA?: string;
    majorGPA?: string;
    details?: string[];
}

export interface Honor {
    title: string;
    year: string;
    url?: string;
    descr?: string;
}

export interface Service {
    reviewing: string[];
    main: {
        details: string;
        year: string;
        url?: string;
    }[];
}

export interface Skill {
    title: string;
    details: string;
}

export interface Teaching {
    semester: string;
    name: string;
    short: string;
    position: string;
}

export interface Repo {
    repo_url: string;
    year: number;
    desc: string;
    name?: string;
    stars?: string;
}

export interface Talk {
    year: number;
    location: string;
    title: string;
    url?: string;
}

export interface Advising {
    year: string;
    name: string;
    details: string;
    url: string;
}

export function getCVData(): CVData {
    const filePath = path.join(process.cwd(), 'src/data/cv.yaml');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = yaml.load(fileContents) as CVData;

    // Format fields that might contain LaTeX
    data.about = formatText(data.about);

    // Helper to format recursive structures if needed
    // For now, we'll format on demand in components or add more formatting here

    return data;
}

export interface Publication {
    entryTags: {
        title: string;
        author: string;
        year: string;
        booktitle?: string;
        journal?: string;
        url?: string;
        abstract?: string;
        [key: string]: string | undefined;
    };
    entryType: string;
}

export function getPublications(): Publication[] {
    const filePath = path.join(process.cwd(), 'src/assets/all.bib');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const parsed = bibtexParse.toJSON(fileContents);
    return parsed;
}
