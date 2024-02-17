
import { test as base } from '@playwright/test';
import { HomePage } from './pagesLeobit/Home.page';
import { ServicesPage } from './pagesLeobit/Services.page';
import { IndustriesPage } from './pagesLeobit/Industries.page';
import { SolutionsPage } from './pagesLeobit/Solutions.page';
import { TechnologiesPage } from './pagesLeobit/Technologies.page';
import { ProjectsPage } from './pagesLeobit/Projects.page';
import { ApproachPage } from './pagesLeobit/Approach.page';
import { AboutPage } from './pagesLeobit/About.page';
import { CareerPage } from './pagesLeobit/Career.page';
import { BlogPage } from './pagesLeobit/Blog.page';
import { Header } from './pagesLeobit/components/Header.co';
import { Footer } from './pagesLeobit/components/Footer.co';

export const test = base.extend({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    servicesPage: async ({ page }, use) => {
        await use(new ServicesPage(page));
    },
    industriesPage: async ({ page }, use) => {
        await use(new IndustriesPage(page));
    },
    solutionsPage: async ({ page }, use) => {
        await use(new SolutionsPage(page));
    },
    technologiesPage: async ({ page }, use) => {
        await use(new TechnologiesPage(page));
    },
    projectsPage: async ({ page }, use) => {
        await use(new ProjectsPage(page));
    },
    approachPage: async ({ page }, use) => {
        await use(new ApproachPage(page));
    },
    aboutPage: async ({ page }, use) => {
        await use(new AboutPage(page));
    },
    careerPage: async ({ page }, use) => {
        await use(new CareerPage(page));
    },
    blogPage: async ({ page }, use) => {
        await use(new BlogPage(page));
    },
    header: async ({ page }, use) => {
        await use(new Header(page));
    },
    footer: async ({ page }, use) => {
        await use(new Footer(page));
    },
})

