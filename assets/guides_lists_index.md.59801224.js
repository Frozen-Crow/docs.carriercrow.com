import{_ as e,o as i,c as s,e as t}from"./app.4d3cd1ac.js";const a="/images/screens/list-select-imports.png",n="/images/screens/list-create-import-form.png",o="/images/screens/list-import-mapping.png",r="/images/screens/list-add-subscriber.png",l="/images/screens/list-subscription-form.png",v=JSON.parse('{"title":"Lists","description":"","frontmatter":{},"headers":[{"level":2,"title":"Creating / Editing Lists","slug":"creating-editing-lists","link":"#creating-editing-lists","children":[{"level":3,"title":"List Name","slug":"list-name","link":"#list-name","children":[]},{"level":3,"title":"List Description (optional)","slug":"list-description-optional","link":"#list-description-optional","children":[]},{"level":3,"title":"Contact Email","slug":"contact-email","link":"#contact-email","children":[]},{"level":3,"title":"Homepage","slug":"homepage","link":"#homepage","children":[]},{"level":3,"title":"Recipients Name Template","slug":"recipients-name-template","link":"#recipients-name-template","children":[]},{"level":3,"title":"Send Configuration","slug":"send-configuration","link":"#send-configuration","children":[]},{"level":3,"title":"Namespace","slug":"namespace","link":"#namespace","children":[]},{"level":3,"title":"Custom Form Selection","slug":"custom-form-selection","link":"#custom-form-selection","children":[]},{"level":3,"title":"Public Subscription Toggle","slug":"public-subscription-toggle","link":"#public-subscription-toggle","children":[]},{"level":3,"title":"Unsubscription Method","slug":"unsubscription-method","link":"#unsubscription-method","children":[]},{"level":3,"title":"Unsubscribe Header Toggle","slug":"unsubscribe-header-toggle","link":"#unsubscribe-header-toggle","children":[]}]},{"level":2,"title":"Adding Fields","slug":"adding-fields","link":"#adding-fields","children":[]},{"level":2,"title":"Adding Users","slug":"adding-users","link":"#adding-users","children":[{"level":3,"title":"Bulk Import of Users","slug":"bulk-import-of-users","link":"#bulk-import-of-users","children":[]},{"level":3,"title":"Add users Individually & Subscription Form","slug":"add-users-individually-subscription-form","link":"#add-users-individually-subscription-form","children":[]}]},{"level":2,"title":"Adding Segments","slug":"adding-segments","link":"#adding-segments","children":[]}],"relativePath":"guides/lists/index.md"}'),d={name:"guides/lists/index.md"},c=t('<h1 id="lists" tabindex="-1">Lists <a class="header-anchor" href="#lists" aria-hidden="true">#</a></h1><p>Lists make it easy to manage your users. From custom fields to mailing segments, you have full control over your data in order to send with success.</p><h2 id="creating-editing-lists" tabindex="-1">Creating / Editing Lists <a class="header-anchor" href="#creating-editing-lists" aria-hidden="true">#</a></h2><p>When creating our editing lists you&#39;ll have access to some basic options, including:</p><ul><li>List Name</li><li>List Description</li><li>Contact Email</li><li>Homepage</li><li>Recipients name template</li><li>Send Configuration</li><li>Namespace</li><li>Custom Form Selection</li><li>Public Subscription Toggle</li><li>Unsubscription Method</li><li>Unsubscribe Header Toggle</li></ul><p>Let&#39;s take a minute to discuss each field</p><h3 id="list-name" tabindex="-1">List Name <a class="header-anchor" href="#list-name" aria-hidden="true">#</a></h3><p>This is the name of the list that shows up in the app dashboard and all public forms and headers</p><h3 id="list-description-optional" tabindex="-1">List Description (optional) <a class="header-anchor" href="#list-description-optional" aria-hidden="true">#</a></h3><p>This shows up in the app dashboard and on public forms</p><h3 id="contact-email" tabindex="-1">Contact Email <a class="header-anchor" href="#contact-email" aria-hidden="true">#</a></h3><p>This is the email address that should be used if someone one the list needs support</p><h3 id="homepage" tabindex="-1">Homepage <a class="header-anchor" href="#homepage" aria-hidden="true">#</a></h3><p>This is the url of the website this list is responsible for and will show as a clickable button on some public forms</p><h3 id="recipients-name-template" tabindex="-1">Recipients Name Template <a class="header-anchor" href="#recipients-name-template" aria-hidden="true">#</a></h3><p>This is a field that customized the <code>To</code> name header when sending emails to list recipients</p><h3 id="send-configuration" tabindex="-1">Send Configuration <a class="header-anchor" href="#send-configuration" aria-hidden="true">#</a></h3><p>This is the sending config for your account. In most cases you&#39;ll have just one, but your account manager my provide you with multiple send configurations depending on your needs.</p><h3 id="namespace" tabindex="-1">Namespace <a class="header-anchor" href="#namespace" aria-hidden="true">#</a></h3><p>This is the namespace your list will be grouped under. Namespaces help to organize resources, user access and analytics in the Carrier Crow dashboard.</p><h3 id="custom-form-selection" tabindex="-1">Custom Form Selection <a class="header-anchor" href="#custom-form-selection" aria-hidden="true">#</a></h3><p>After creating a custom form you can apply those styles to your list here.</p><h3 id="public-subscription-toggle" tabindex="-1">Public Subscription Toggle <a class="header-anchor" href="#public-subscription-toggle" aria-hidden="true">#</a></h3><p>This allows you to allow or disallow if users can publicly subscribe via the list subscripiton form.</p><h3 id="unsubscription-method" tabindex="-1">Unsubscription Method <a class="header-anchor" href="#unsubscription-method" aria-hidden="true">#</a></h3><p>We allow a few different workflows once a user clicks the unsubscribe link in your emails:</p><ul><li>One-step - user is immediately unsubscribe with no confirmation <strong>(recommended)</strong></li><li>One-step with form - user must confirm unsubscribe on landing page</li><li>Two-step - user will receive a confirmation email before being unsubscribed</li><li>Two-step with form - user must confirm on landing page &amp; will receive a confirmation email</li><li>Manual - only an administrator can unsubscribe users from the dashboard</li></ul><h3 id="unsubscribe-header-toggle" tabindex="-1">Unsubscribe Header Toggle <a class="header-anchor" href="#unsubscribe-header-toggle" aria-hidden="true">#</a></h3><p>Some email clients provide easy to use unsubscribe buttons when we send a list unsubscribe header, you can disable the header using this feature</p><h2 id="adding-fields" tabindex="-1">Adding Fields <a class="header-anchor" href="#adding-fields" aria-hidden="true">#</a></h2><p>Custom fields can be added to your list from the fields tab after your list has been created. <strong>More docs on fields coming soon</strong></p><h2 id="adding-users" tabindex="-1">Adding Users <a class="header-anchor" href="#adding-users" aria-hidden="true">#</a></h2><p>With Carrier Crow there is essentially 5 different ways to add users:</p><ul><li>Bulk Import</li><li>Individual Added by Admin</li><li>Individual Subscribed from Subscription Form</li><li>Individual Subscribed from Widget</li><li>Individual Subcribed via API Call</li></ul><p>In this documentation we will go over the bulk import, individual admin and the subscription form. You can find documentation for the API and widget usage in the top level menu on this site.</p><h3 id="bulk-import-of-users" tabindex="-1">Bulk Import of Users <a class="header-anchor" href="#bulk-import-of-users" aria-hidden="true">#</a></h3><p>Bulk import allows you to upload a CSV file of many users to your list. This feature is generally used when migrating from another platform, buying data or importing from another data management platform or service.</p><p><strong>Step 1: Browse to a list &amp; click the imports tab</strong></p><img src="'+a+'"><p>Once in the imports page you&#39;ll press the <code>Create Import</code> button at the top right and then be presented with a form where you&#39;ll be able to upload a csv file form your computer.</p><p><strong>Step 2: Upload your users file</strong></p><p>You can optionally create a name for you import, otherwise the system will automatically use the file name.</p><img src="'+n+'"><p>Once your file has uploaded you&#39;ll be presented with mapping options.</p><p><strong>Step 3: Select which file fields map to your list fields</strong></p><p>We&#39;ll do our best to auto select fields when possible, but make sure to review each mapping before importing your data</p><img src="'+o+'"><p>Once you map your fields and save the import process will begin. There&#39;s no need to keep the import page open as the process will continue running in the background. However, if there&#39;s any errors with your import you can check by viewing your import record at any time. If you have any issues please contact our support by clicking the chat bubble in the bottom right of the screen if you need help.</p><h3 id="add-users-individually-subscription-form" tabindex="-1">Add users Individually &amp; Subscription Form <a class="header-anchor" href="#add-users-individually-subscription-form" aria-hidden="true">#</a></h3><p>Occassionally you may need to add an individual user or provide and endpoint where users can subscribe themselves. Fortunatley we provide easy to use options for this that work similary for an admin or end user.</p><p><strong>For admins</strong></p><p>Browse to a list and click the <code>Add Subscriber</code> button</p><img src="'+r+'"><p><strong>For End Users</strong></p><p>Click the button that says <code>Subscription From</code> then copy the resulting url and paste it as a link anywhere on your site. The subscription form is publicly accessible and customizable and will also trigger a double opt-in email to protect your list from exploitation.</p><img src="'+l+'"><p>The forms in either scenario are similar and can be customized fully with custom forms and custom fields.</p><h2 id="adding-segments" tabindex="-1">Adding Segments <a class="header-anchor" href="#adding-segments" aria-hidden="true">#</a></h2><p>Segments are the building blocks of intellegent email sending. They allow you to group users by fields and engagement behavior in order to create a highly customizable outreach for your list.</p><p><strong>More docs on segements coming soon</strong></p>',60),u=[c];function h(p,m,g,b,f,y){return i(),s("div",null,u)}const k=e(d,[["render",h]]);export{v as __pageData,k as default};
