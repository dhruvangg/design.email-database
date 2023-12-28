## Functions

<dl>
<dt><a href="#getTemplates">getTemplates([page], [limit])</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Retrieves a paginated list of templates from the database.</p>
<p>This function connects to the database and fetches a specific page of templates, 
excluding their HTML content. It also returns the total count of templates 
available for pagination purposes. If there&#39;s an error during the database
operation, the function throws an error with the relevant message.</p>
</dd>
<dt><a href="#getTemplatesByQuery">getTemplatesByQuery(condition, [select], [limit])</a> ⇒ <code>Promise.&lt;Array&gt;</code></dt>
<dd><p>Retrieves templates based on the specified query conditions.</p>
</dd>
<dt><a href="#getTemplate">getTemplate(id)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Retrieves a specific template by its ID.</p>
</dd>
<dt><a href="#deleteTemplate">deleteTemplate(id)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Deletes a specific template by its ID.</p>
</dd>
<dt><a href="#deleteTemplates">deleteTemplates(ids)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Deletes multiple templates based on their IDs.</p>
</dd>
<dt><a href="#updateTemplate">updateTemplate(condition, data)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Updates a template based on the given condition.</p>
</dd>
<dt><a href="#updateTemplateById">updateTemplateById(condition, data)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Updates a specific template by its ID.</p>
</dd>
<dt><a href="#updateManyTemplates">updateManyTemplates(condition, updateData)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Updates multiple templates based on the given condition.</p>
</dd>
</dl>

<a name="getTemplates"></a>

## getTemplates([page], [limit]) ⇒ <code>Promise.&lt;Object&gt;</code>
Retrieves a paginated list of templates from the database.

This function connects to the database and fetches a specific page of templates, 
excluding their HTML content. It also returns the total count of templates 
available for pagination purposes. If there's an error during the database
operation, the function throws an error with the relevant message.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - A promise that resolves to an object containing the pagination data and a list of templates.
                           The returned object has the structure { page, limit, count, templates }.  
**Throws**:

- <code>Error</code> If there is an issue during the database operation, an error is thrown with the specific error message.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [page] | <code>number</code> | <code>1</code> | The page number of the templates to retrieve. |
| [limit] | <code>number</code> | <code>10</code> | The maximum number of templates to retrieve per page. |

<a name="getTemplatesByQuery"></a>

## getTemplatesByQuery(condition, [select], [limit]) ⇒ <code>Promise.&lt;Array&gt;</code>
Retrieves templates based on the specified query conditions.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array&gt;</code> - A promise that resolves to an array of templates matching the conditions.  
**Throws**:

- <code>Error</code> If there is an error during database operation.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| condition | <code>Object</code> |  | The query conditions to filter the templates. |
| [select] | <code>Object</code> \| <code>null</code> | <code></code> | Specific fields to select in the returned documents. |
| [limit] | <code>number</code> \| <code>null</code> | <code></code> | Limit on the number of templates to retrieve. |

<a name="getTemplate"></a>

## getTemplate(id) ⇒ <code>Promise.&lt;Object&gt;</code>
Retrieves a specific template by its ID.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - A promise that resolves to an object containing the template data.
                           Returns success status and data, or failure status and error message.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the template. |

<a name="deleteTemplate"></a>

## deleteTemplate(id) ⇒ <code>Promise.&lt;Object&gt;</code>
Deletes a specific template by its ID.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - A promise that resolves to the deletion result. 
                           Returns the deleted data or an error message if failed.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the template to delete. |

<a name="deleteTemplates"></a>

## deleteTemplates(ids) ⇒ <code>Promise.&lt;Object&gt;</code>
Deletes multiple templates based on their IDs.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - A promise that resolves to the result of the deletion operation.
                           Indicates success or failure and includes data or error message.  

| Param | Type | Description |
| --- | --- | --- |
| ids | <code>Array.&lt;string&gt;</code> | An array of template IDs to delete. |

<a name="updateTemplate"></a>

## updateTemplate(condition, data) ⇒ <code>Promise.&lt;Object&gt;</code>
Updates a template based on the given condition.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - A promise that resolves to the updated template document.  
**Throws**:

- <code>Error</code> If there is an error during the update operation.


| Param | Type | Description |
| --- | --- | --- |
| condition | <code>Object</code> | The conditions to find the template to update. |
| data | <code>Object</code> | The data to be updated in the template. |

<a name="updateTemplateById"></a>

## updateTemplateById(condition, data) ⇒ <code>Promise.&lt;Object&gt;</code>
Updates a specific template by its ID.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - A promise that resolves to the updated template document.  
**Throws**:

- <code>Error</code> If there is an error during the update operation.


| Param | Type | Description |
| --- | --- | --- |
| condition | <code>Object</code> | The condition to find the template (usually the ID). |
| data | <code>Object</code> | The data to update in the template. |

<a name="updateManyTemplates"></a>

## updateManyTemplates(condition, updateData) ⇒ <code>Promise.&lt;Object&gt;</code>
Updates multiple templates based on the given condition.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - A promise that resolves to the result of the update operation.  
**Throws**:

- <code>Error</code> If there is an error during the update operation.


| Param | Type | Description |
| --- | --- | --- |
| condition | <code>Object</code> | The conditions to find the templates to update. |
| updateData | <code>Object</code> | The data to be updated in the templates. |

