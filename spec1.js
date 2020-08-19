describe('Protractor babe steps',function() {
	//First parameter - Test suite name
	//Second Parameter - function(will have all tests (it blocks))
	
	it('Open Angular Website', function() {
		//Write your protractor code
		browser.get("https://angularjs.org/");
		
		browser.get("https://juliemr.github.io/protractor-demo/");
		browser.sleep(5000).then(function() {
			browser.get("https://angularjs.org/");
			console.log("I am the last step to execute");	
		
			
		});
		
	})
	
	it('Close browser', function() {
		
	})
})


