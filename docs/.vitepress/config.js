export default {
	title: ' ',
	appearance: false,
	themeConfig: {
		logo: 'https://get.carriercrow.com/img/logo.c3a801ec.svg',
		editLink: {
			pattern: 'https://github.com/Frozen-Crow/docs.carriercrow.com/edit/master/docs/:path',
			text: 'Edit this page on GitHub'
		},
		nav: [{
			text: 'Setup',
			link: '/setup/'
		},{
			text: 'Guides',
			link: '/guides/'
		}],
		sidebar: {
			'/setup/': [{
				text: 'Setup',
				items: [{
					text: 'Sender Authentication',
					link: '/setup/sender-authentication'
				},{
					text: 'DMARC',
					link: '/setup/dmarc'
				}]
			}],
			'/guides/campaigns/': [{
				text: 'Campaigns',
				items: [
					{
						text: 'Regular',
						link: '/guides/campaigns/regular'
					},
					{
						text: 'Triggered',
						link: '/guides/campaigns/triggered'
					},
					{
						text: 'RSS',
						link: '/guides/campaigns/rss'
					}
				]
			}],
			'/guides': [{
				text: 'Guides',
				items: [
					{
						text: 'Lists',
						link: '/guides/lists/',
					},
					{
						text: 'Templates',
						link: '/guides/templates/',
					},
					{
						text: 'Campaigns',
						link: '/guides/campaigns/',
					}
				]
			}],
		}
	}
}
