# Sender Authentication Overview

Sender authentication is one of the most important steps to making sure you successfully deliver email. In order to make sure you correctly secure your email sending, you have to setup your sending domain as and Authenticated Sender before you can deliver emails from Carrier Crow.

**Carrier Crow Sender authentication consists of 3 main components:**
- [SPF](#spf)
- [DKIM](#dkim)
- [Link Branding](#link-branding)

## SPF

The Sender Policy Framework (SPF) is an email authentication mechanism that prevents unauthorized senders from hijacking your domain for their own purposes. In your DNS manager for the domain you wish to send mail from you will configure an SPF record that tells inboxes which ip address are valid sender ip's. In the event mail is received from an unauthorized sender, the inbox provider can quikly and safely, block or quarantine the message.

## DKIM

Domain Keys Identified Mail (DKIM) is a process by which a key is used to create a digital signature and attach it to every email sent. The digitial signature allows the receiving inbox to verify that the content sent was, in fact, sent by an authentic sender. It also ensures that message contents have not been tampered with by a third party, often referred to as a "man in the middle" attack.

## Link Branding

Link branding also helps to ensure secure emails as well as brand continuity. A branded link will make sure all of the links in your email template are wrapped in a redirect and authorized from the original sent email. Branded links create a consistent experience for the end user and help protect against untrusted links.
