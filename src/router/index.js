import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Gallery',
        component: () => import('../views/GalleryAllTags'),
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/:id',
        name: 'GalleryCatalog',
        component: Home,
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/gallery/:id',
        name: 'GalleryPage',
        component: () => import('../views/GalleryPage'),
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/article-page/:id',
        name: 'ArticlePage',
        component: () => import('../views/ArticlePage'),
        meta: {
            layout: 'tags'
        }
    },
    {
        path: '/gallery-page/:id',
        name: 'GalleryAllTag',
        component: () => import('../views/GalleryAllTagPage'),
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/info/about',
        name: 'about',
        component: () => import('../views/About'),
        meta: {
            layout: 'void'
        }
    },
    {
        path: '/articles/:id',
        name: 'articles',
        component: () => import('../views/Articles'),
        meta: {
            layout: 'tags'
        }
    },
    {
        path: '/article',
        name: 'articlesAllTags',
        component: () => import('../views/ArticlesAllTags'),
        meta: {
            layout: 'tags'
        }
    },
    {
        path: '/info/contact',
        name: 'contact',
        component: () => import('../views/Contact'),
        meta: {
            layout: 'void'
        }
    },
    {
        path: '/info/prints',
        name: 'prints',
        component: () => import('../views/Prints'),
        meta: {
            layout: 'void'
        }
    },
    {
        path: '/info/workshop',
        name: 'workshop',
        component: () => import('../views/Workshop'),
        meta: {
            layout: 'void'
        }
    },
    {
        path: '/workshop-page/:id',
        name: 'workshopPage',
        component: () => import('../views/WorkshopPage'),
        meta: {
            layout: 'void'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'text-active',
    linkExactActiveClass: 'text-active'
})

export default router
