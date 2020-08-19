describe('Protractor All method', function(){
		function add(a,b){
			element(by.model("first")).sendKeys(a);
			element(by.model("second")).sendKeys(b);
			
			element(by.id("gobutton")).click();
			
		}
	
	
		it('Locators', function() {
			browser.get('https://juliemr.github.io/protractor-demo/');
			
			add(2,4);
			add(62,46);
			add(25,44);
			add(21,44);
			add(25,5);
//			element(by.model("first")).sendKeys("3");
//			element(by.model("second")).sendKeys("5");
//			
//			element(by.id("gobutton")).click();
//			
//			element(by.model("first")).sendKeys("36");
//			element(by.model("second")).sendKeys("51");
//			
//			element(by.id("gobutton")).click();
//			
//			element(by.model("first")).sendKeys("13");
//			element(by.model("second")).sendKeys("45");
//			
//			element(by.id("gobutton")).click();
			element.all(by.repeater("result in memory")).
			count().then(function(text){
				console.log("Total of rows "+ text);
			})
			
			element.all(by.repeater("result in memory")).
			each(function(item) {
				item.element(by.css("td:nth-child(3)")).
				getText().then(function(text){
					console.log(text);
				})
				
			})
			
		})


})
