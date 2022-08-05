import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'c6a0ce3a06e14621b3fb2390bd105fb5',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Vizinhos em Lisboa',
  domain: 'vizinhos.org',
  author: 'Vizinhos em Lisboa - Associação de Moradores',

  // open graph metadata (optional)
  description: 'Uma nova geração de cidadania. Participe. Junte-se aos seus Vizinhos!',

  // social usernames (optional)
  // twitter: 'VizinhosORG',
  // github: 'transitive-bullshit',
  // linkedin: 'fisch2',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/foo': '067dd719a912471ea9a3ac10710e7fdf',
    '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  },
  //pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'A Associação',
      pageId: '6d3790fa1da644188e936fcedce66068'
    },
    {
      title: 'Núcleos Locais',
      pageId: '502555b65b0947c09921ec79ed9aff11'
    },
    {
      title: 'Iniciativas',
      pageId: '51ceb81cab5a407b8d9a53e601ef7c0d'
    },
    {
      title: 'Contactos',
      pageId: '088587a345564104afc3e4e9d621643a'
    }
  ]
})
