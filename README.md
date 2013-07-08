# Generic Key-Value Store API using Node.ACS and ACS
This project implements a generic web service that allows you to use ACS as a backend to store JSON data as key-value pairs.  ACS allows you to store up to 2MB of data in each key, which equates to roughly 2 million characters including JSON array and object delimiters.


## Installation and configuration

<ol>
	<li>Create a new Node.acs app by typing: acs new (you may have to login first with acs login)
	<li>Replace the contents of the folder with the files in this repo.
	<li>Go to my.appcelerator.com/apps and create a new ACS-only app
	<li>On your App Management screen copy your OAuth Credentials onto lines 2 and 3 of app.js
	<li>On your Terminal go to your app's folder and type: acs publish.  This will give you a public URL in return
</ol>


## Methods

<table>
	<tr>
		<td><b>Name</b></td><td><b>HTTP Method<b></td><td><b>Notes<b></td>
	</tr>
	<tr>
		<td>setvalue</td><td>POST</td><td><b>Input variables:</b> keyname, keyvalue (JSON), login, password</td>
	</tr>
	<tr>
		<td>delvalue</td><td>POST</td><td><b>Input variables:</b> keyname, login, password</td>
	</tr>
	<tr>
		<td>getvalue</td><td>GET</td><td><b>Browse to:</b> Your-Public-URL/get/your-key-name</td>
	</tr>
</table>