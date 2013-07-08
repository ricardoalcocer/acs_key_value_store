var ACS = require('acs').ACS

function index(req, res) {
	var payload={
		login: 'ralcocer',
		password: 'ralcocer'
	}
	ACS.Users.login(payload, function(data) {
		if (data.success){
			req.session.session_id=data.meta.session_id;
            req.session.user_id=data.users[0].id;
			req.session.fullname=data.users[0].first_name + ' ' + data.users[0].last_name;
			
			res.write('login successful');
			res.end();
		}else{
			res.write('login error');
			res.end();
		}
	});
}

function test(req,res){
	res.write('session test successful');
	res.end();
}

function setkey(req,res){
	ACS.KeyValues.set({
	    name: 'welcome_message',
	    value: 'Welcome to Appcelerator Cloud Services',
	    session_id:req.session.session_id // this is the secret to get write access
	}, function (e) {
	    if (e.success) {
	        console.log('Success');
	    } else {
	        console.log('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
}

function getkey(req,res){
	ACS.KeyValues.get({
	    name: 'welcome_message'
	}, function (e) {
	    if (e.success) {
	        console.log(e.keyvalues[0].value);
	    } else {
	        console.log('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
}

function logoff(req,res){
    ACS.Users.logout(function(data) {
		delete req.session.session_id;
     	res.redirect('/');
	});
}

function nologin(req,res){
	var payload={
		login: 'ralcocer',
		password: 'ralcocer'
	}
	ACS.Users.login(payload, function(data) {
		if (data.success){
			var session_id=data.meta.session_id;
            ACS.KeyValues.set({
			    name: 'xxxwelcome_message',
			    value: 'yxxxWelcome to Appcelerator Cloud Services',
			    session_id:session_id
			}, function (e) {
			    if (e.success) {
			        console.log('Success');
			    } else {
			        console.log('Error:\n' +
			            ((e.error && e.message) || JSON.stringify(e)));
			    }
			});
		}else{
			res.write('login error');
			res.end();
		}
	});
}

function setblindkey(req,res){
	var payload={
		login: 'ralcocer',
		password: 'ralcocer'
	}
	ACS.Users.login(payload, function(data) {
		if (data.success){
			var session_id=data.meta.session_id;
            ACS.KeyValues.set({
			    name: req.query.keyname,
			    value: req.query.keyvalue,
			    session_id:session_id
			}, function (e) {
			    if (e.success) {
			        console.log('Success');
			    } else {
			        console.log('Error:\n' +
			            ((e.error && e.message) || JSON.stringify(e)));
			    }
			});
		}else{
			res.write('login error');
			res.end();
		}
	});
}

function getmykeys(req,res){
	
}