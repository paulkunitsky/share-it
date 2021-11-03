/* modules */
import Auth from '../app/modules/auth/components'
import Profile from '../app/modules/profile/components'
import Messages from '../app/modules/messages/components'

import Articles from '../app/modules/articles/components/Index'
import Article from '../app/modules/article/components/Index'

import Discover from '../app/modules/discover/components'
import Settings from '../app/modules/settings/components'
import Test from '../app/modules/test/components'

/* guards */
import AuthGuard from '../app/modules/auth/guard'

export default [
  {
    path: '/auth',
    components: {
      fullsize: Auth
    },
    beforeEnter: AuthGuard.beforeEnter,
    children: [
      {
        path: 'logout',
        beforeEnter: AuthGuard.logout.beforeEnter
      }
    ]
  },
  {
    path: '/messages',
    component: Messages
  },
  {
    path: '/articles',
    component: Articles
  },
  {
    path: '/article',
    component: Article
  },
  {
    path: '/discover',
    component: Discover
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/settings',
    component: Settings
  },
  {
    path: '/test',
    component: Test
  },
  {
    path: '*',
    redirect: '/discover'
  }
]
