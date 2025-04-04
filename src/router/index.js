import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'first',
      component: () => import('../views/firstPage.vue'),
      meta: {
        title: 'first',
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/loginPage.vue'),
      meta: {
        title: 'login',
        backButtonExist: true
      },
    },
    // { //from getting token from backend & route.push to home  
    //   path: '/login/token:',
    //   name: 'login-status',
    //   component: () => import('../views/loginStatusPage.vue'),
    //   meta: {
    //     title: 'login',
    //   },
    // },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/registerPage.vue'),
      meta: {
        title: 'register',
        backButtonExist: true
      },
    },
    {
      path: '/adminLogin',
      name: 'adminLogin',
      component: () => import('../views/adminLoginPage.vue'),
      meta: {
        title: 'adminLogin',
        backButtonExist: true
      },
    },
    {//get token from backend & route.push to admin page (not built yet)
      path: '/adminHome',
      name: 'adminHome',
      component: () => import('../views/adminHomePage.vue'),
      meta: {
        title: 'adminHome',
        navBarExist: true
      },
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomePage.vue'),
      meta: {
        title: 'Home',
        navBarExist: true
      },
    },
    {   //don't touch this, it works
      path: '/api/school-details/:school_name',
      name: 'SchoolDetails',
      component: () => import('../components/schoolDetails.vue'),
      props: true,
      meta: {
        title: 'School Details',
        navBarExist: true,
      },
    },
    {
      path: '/:pathMatch(.)',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'),
      meta: {
        title: '404 Not Found',
        navBarExist: true,

      },
    },
    {
      path: '/DashBoard',
      name: 'DashBoard',
      component: () => import('../views/DashBoard.vue'),
      meta: {
        title: 'DashBoard',
        navBarExist: true,

      },
    },
    {
      path: '/Ranking',
      name: 'Ranking',
      component: () => import('../views/rankingPage.vue'),
      meta: {
        title: 'ranking',
        navBarExist: true,

      },
    },
    {
      path: '/Compare',
      name: 'schoolCompare',
      component: () => import('../views/schoolCompare.vue'),
      meta: {
        title: 'compare',
        navBarExist: true,

      },
    },
    {
      path: '/filter',
      name: 'filter',
      component: () => import('../views/schoolFilter.vue'),
      meta: {
        title: 'filter',
        navBarExist: true,

      },
    },
  ],
})

//page title
router.beforeEach((to) => {
  const { title } = to.meta
  const defaultTitle = 'Default Title'
  document.title = title || defaultTitle
})

export default router
