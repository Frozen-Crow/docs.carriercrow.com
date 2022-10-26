---
prev: 'Validate DNS | Sender Authentication'
---
<script setup>
	import {ref} from "vue"
	const domain = ref('');
	const handleFailures = ref('');
	const reportEmails = ref('');
	const failureEmails = ref('');
	const fo = ref([]);
</script>
# DMARC

DMARC Records standardize how mail originators associate and authenticate domain identifiers with messages, handle message policies using those identifiers, and report about mail using those identifiers. According to RFC 7489, the DMARC mechanism for policy distribution enables the strict handling of email messages that fail authentication checks, such as SPF and/or DKIM. If neither of those authentication methods passes, DMARC tells the receiver how to handle the message, such as junk it (quarantine) or reject the message entirely.

## Generate a DMARC Record
<form>
	<fieldset>
		<label>
			Domain
			<Popper arrow content="The domain name you send mail from. If you send emails from hello@example.com, this would be example.com" placement="right">
				<vue-feather style="width: 15px;" class="icon-text-2 hint" type="help-circle"></vue-feather>
			</Popper>
		</label> 
		<input type="text" v-model="domain" placeholder="example.com" />
	</fieldset>
	<fieldset>
		<label>
			Failed Message Policy
			<Popper arrow content="How do you want mail that fails DMARC to be treated by the recipient?" placement="right">
				<vue-feather style="width: 15px;" class="icon-text-2 hint" type="help-circle"></vue-feather>
			</Popper>
		</label>
		<select v-model="handleFailures">
			<option disabled value="">Select an option</option>
			<option>None</option>
			<option>Quarantine</option>
			<option>Reject</option>
		</select>
	</fieldset>
	<fieldset>
		<label>
			Report Email(s)
			<Popper arrow content="Comma separated list of emails that should receive domain reports." placement="right">
				<vue-feather style="width: 15px;" class="icon-text-2 hint" type="help-circle"></vue-feather>
			</Popper>
		</label>
		<input type="text" v-model="reportEmails" placeholder="reports@example.com" />
	</fieldset>
	<fieldset>
		<label>
			Failure Email(s)
			<Popper arrow content="Comma separated list of emails that should receive failure reports." placement="right">
				<vue-feather style="width: 15px;" class="icon-text-2 hint" type="help-circle"></vue-feather>
			</Popper>
		</label>
		<input type="text" v-model="failureEmails" placeholder="failures@example.com" />
	</fieldset>
	<fieldset>
		<label>Receive failure reports when authentication does not pass, if: (optional)</label>
		<div>
			<input type="checkbox" id="fod" value="d" v-model="fo" />
			<label for="fod">DKIM Fails</label>
		</div>
		<div>
			<input type="checkbox" id="fos" value="s" v-model="fo" />
			<label for="fos">SPF Fails</label>
		</div>
		<div>
			<input type="checkbox" id="fo1" value="1" v-model="fo" />
			<label for="fo1">Either DKIM or SPF fails (recommended)</label>
		</div>
		<div>
			<input type="checkbox" id="fo0" value="0" v-model="fo" />
			<label for="fo0">Both DKIM and SPF fails</label>
		</div>
	</fieldset>
</form>

<div v-if="domain.length && handleFailures.length && reportEmails.length && failureEmails.length">


### DNS Record


**Type**

```-vue
TXT
```


**Host**

```-vue
{{`_dmarc.${domain}`}}
```


**Value**

```-vue
{{`v=DMARC1; p=${handleFailures.toLowerCase()}; rua=mailto:${reportEmails.split(',').join(',mailto:')}; ruf=mailto:${failureEmails.split(',').join(',mailto:')}; ${fo.length > 0 ? `fo=${fo.join(':')}` : ``}`}}
```


</div>
<div v-else>

::: warning Missing Info
Complete the form above to get your DNS Record
:::

</div>
