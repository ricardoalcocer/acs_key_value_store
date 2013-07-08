var Cloud = require('acs').ACS;
var ACS_KEY='--YOURKEY--';
var ACS_SECRET='--YOURSECRET--';

// initialize app
function start(app, express) {
	app.use(express.favicon(__dirname + '/public/images/favicon.ico'));		//set favicon
	
	Cloud.init(ACS_KEY, ACS_SECRET);

	// this is here to create a "catch all" route
	app.get('/get/*',function(req,res){
		keyname=req.path.replace(/\/$/, "").split('/').pop();
		
		Cloud.KeyValues.get({
		    name: keyname
		}, function (e) {
		    if (e.success) {
		    	res.setHeader('Content-Type', 'application/json');
				res.send(e.keyvalues[0].value);
		    } else {
		        res.setHeader('Content-Type', 'application/json');
				res.send({"success":false,"message":e.message});
		    }
		});
	});
}

// release resources
function stop() {
	
}