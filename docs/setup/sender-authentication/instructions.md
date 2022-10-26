---
prev: 'Overview | Sender Authentication'
next: 'Validate DNS | Sender Authentication'
---
# Sender Authenticaiton Setup Instructions
Setting up sender authentication can be started by logging into Carrier Crow, clicking the <code class="icon-code"><vue-feather type="settings"></vue-feather> Administration</code> menu in the sidebar, then clicking `Sender Authentication`.

![Sender Authentication Form](/images/screens/sender-authentication-form.png)
<small class="text-muted">Figure 1.1</small>

When filling out the sender authentication form (figure 1.1 above), you will need to provide the following info:
- **Domain**
	- This is the domain name you will be sending mail from
	- e.x. mail@`domain.com`
- **Default "from" email**
	- This is the full email address your email will be sent from
	- This MUST be from the domain listed above
	- e.x. `mail@domain.com`
- **Default "from" name**
	- This is the pretty display name that will show in most inboxes
	- e.x. `My Company Name`
- **Default "reply-to" email**
	- This is the email address that will populate the `to` field when a user clicks reply from their inbox.
	- This does not have to be from the same domain
	- e.x. `support@supportdomain.com`

Once you've filled out the necessary info, click the `Save` button and you'll be taken to the DNS Setup instructions for validation.
