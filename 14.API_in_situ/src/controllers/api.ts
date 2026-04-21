import { env } from '../config/env.ts';
import debug from 'debug';
import { readFile } from 'fs/promises';
import { marked } from 'marked';
import matter from 'gray-matter';
import type { Request, Response } from 'express';

const log = debug(`${env.PROJECT_NAME}:controllers:api`);
log('Loading API controller...');

export const apiController = async (_req: Request, res: Response) => {
    const readme = await readFile('./readme.api.md', 'utf-8');
    const { data, content } = matter(readme);

    const tokens = marked.lexer(content);
    const listItems = tokens.filter((token) => token.type === 'list') as {
        items: { text: string }[];
    }[];

    const endpoints = listItems.flatMap((list) =>
        list.items.map((item) => item.text),
    );
    log('Received request to /api endpoint');
    return res.json({
        message: 'Welcome to the API',
        title: data.title,
        description: data.description,
        endpoints,
    });
};
