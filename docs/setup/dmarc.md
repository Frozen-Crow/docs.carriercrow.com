---
prev: 'Validate DNS | Sender Authentication'
---
<script setup>
	import {ref} from "vue"
	const domain = ref('');
	const reportingMode = ref('');
	const reportEmails = ref('');
	const failureEmails = ref('');
	const fo = ref([]);
</script>
# DMARC

DMARC Records standardize how mail originators associate and authenticate domain identifiers with messages, handle message policies using those identifiers, and report about mail using those identifiers. According to RFC 7489, the DMARC mechanism for policy distribution enables the strict handling of email messages that fail authentication checks, such as SPF and/or DKIM. If neither of those authentication methods passes, DMARC tells the receiver how to handle the message, such as junk it (quarantine) or reject the message entirely.

## Generate a DMARC Record
<form>
	<fieldset>
		<label>Domain</label>
		<input v-model="domain" placeholder="example.com" />
	</fieldset>
	<fieldset>
		<label>Reporting Mode</label>
		<select v-model="reportingMode">
			<option disabled value="">Select an option</option>
			<option>None</option>
			<option>Quarantine</option>
			<option>Reject</option>
		</select>
	</fieldset>
	<fieldset>
		<label>Report Email(s)</label>
		<input v-model="reportEmails" placeholder="reports@example.com" />
	</fieldset>
	<fieldset>
		<label>Failure Email(s)</label>
		<input v-model="failureEmails" placeholder="failures@example.com" />
	</fieldset>
	<fieldset>
	<label>Receive failure reports when authentication does not pass, if: (optional)</label>
	<input type="checkbox" id="fo0" value="0" v-model="fo" /> <label for="fo0">DKIM and SPF fails</label>
	<input type="checkbox" id="fo1" value="1" v-model="fo" /> <label for="fo1">DKIM or SPF fails (recommended)</label>
	<input type="checkbox" id="fod" value="d" v-model="fo" /> <label for="fod">DKIM Fails</label>
	<input type="checkbox" id="fos" value="s" v-model="fo" /> <label for="fos">SPF Fails</label>
	</fieldset>	
</form>

### DNS Record
<div v-if="domain.length && reportingMode.length && reportEmails.length && failureEmails.length">

**Type**

```
TXT
```

**Host**

```-vue
{{`_dmarc.${domain}`}}
```

**Value**

```-vue
{{`v=DMARC1; p=${reportingMode.toLowerCase()}; rua=mailto:${reportEmails.split(',').join(',mailto:')}; ruf=mailto:${failureEmails.split(',').join(',mailto:')}; ${fo.length > 0 ? `fo=${fo.join(':')}` : ``}`}}
```
</div>
<div v-else>

::: warning Missing Info
Complete the form above to get your DNS Record
:::

</div>
