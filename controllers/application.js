var Cloud = require('acs').ACS

function setvalue(req,res){
	var adminuser={
		login:req.body.login,
		password: req.body.password
	}	
	Cloud.Users.login(adminuser, function(data) {
		if (data.success){
			var session_id=data.meta.session_id;
            Cloud.KeyValues.set({
			    name: req.body.keyname,
			    value: req.body.keyvalue,
			    session_id:session_id
			}, function (e) {
			    if (e.success) {
			        res.setHeader('Content-Type', 'application/json');
					res.send({"success":true});
			    } else {
			    	res.setHeader('Content-Type', 'application/json');
			    	res.send({"success":false,"message":e.message});
			    }
			});
		}else{
			res.setHeader('Content-Type', 'application/json');
			res.send({"success":false,"message":data.message});
		}
	});
}

function delvalue(req,res){
	var adminuser={
		login:req.body.login,
		password: req.body.password
	}	
	Cloud.Users.login(adminuser, function(data) {
		if (data.success){
			var session_id=data.meta.session_id;
            Cloud.KeyValues.remove({
			    name: req.body.keyname,
			    session_id:session_id
			}, function (e) {
			    if (e.success) {
			        res.setHeader('Content-Type', 'application/json');
					res.send({"success":true});
			    } else {
			    	res.setHeader('Content-Type', 'application/json');
			    	res.send({"success":false,"message":e.message});
			    }
			});
		}else{
			res.setHeader('Content-Type', 'application/json');
			res.send({"success":false,"message":data.message});
		}
	});
}
