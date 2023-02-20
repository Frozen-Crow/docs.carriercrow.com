export default {
	title: 'Carrier Crow',
	description: 'Send successful email, fast.',
	appearance: false,
	themeConfig: {
		logo: 'https://get.carriercrow.com/img/logo.c3a801ec.svg',
		lastUpdated: true,
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
		},{
			text: 'Widgets',
			link: '/widgets/'
		},{
			text: 'API',
			link: 'https://app.carriercrow.com/login?next=/account/api'
		}],
		sidebar: {
			'/setup/': [{
				text: 'Setup',
				items: [{
					text: 'Sender Authentication',
					collapsible: true,
					items: [{
						text: 'Overview',
						link: '/setup/sender-authentication/'
					},{
						text: 'Setup Instructions',
						link: '/setup/sender-authentication/instructions.md'
					},{
						text: 'Validate DNS',
						link: '/setup/sender-authentication/validate-dns.md'
					}]
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
			'/widgets': [{
				text: 'Widgets',
				items: [
					{
						text: 'List Subscribe Widget',
						link: '/widgets/list-subscribe',
					}
				]
			}],
		}
	}
}
