describe('Protractor All method', function(){
		function calc(a,b,c){
			element(by.model("first")).sendKeys(a);
			element(by.model("second")).sendKeys(b);
			
			element.all(by.tagName("option")).each(function(item) {
				item.getAttribute("value").then(function(values) {
					
					if(values==c) {
						item.click();
					}
				})
				
			})
			
			element(by.id("gobutton")).click();
			
		}
	
	
		it('Locators', function() {
			browser.get('https://juliemr.github.io/protractor-demo/');
		
			
			calc(2,4, "MULTIPLICATION");
			calc(2,5, "ADDITION");
			calc(2,6, "MODULO");
			calc(2,7, "MODULO");
			
//			add(2,4);
//			add(62,46);
//			add(25,44);
//			add(21,44);
//			add(25,5);
			
			
			element.all(by.tagName("option")).each(function(item) {
				item.getAttribute("value").then(function(values) {
					console.log(values);
				})
				
			})

//			element.all(by.repeater("result in memory")).
//			count().then(function(text){
//				console.log("Total of rows "+ text);
//			})
//			
//			element.all(by.repeater("result in memory")).
//			each(function(item) {
//				item.element(by.css("td:nth-child(3)")).
//				getText().then(function(text){
//					console.log(text);
//				})
//				
//			})
			
		})


})
