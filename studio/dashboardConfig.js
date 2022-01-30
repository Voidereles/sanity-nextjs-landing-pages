export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61f68d03628278b66a17dd48',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-n4rfqxfv',
                  apiId: 'a9398145-619c-499f-b0fd-584d8d44d4a8'
                },
                {
                  buildHookId: '61f68d03c483da29108fce78',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pxd3ykfb',
                  apiId: '999ab6b8-5b62-4a48-8027-6f2a3d844dba'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Voidereles/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pxd3ykfb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
