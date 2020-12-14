let status = "JS - OK!";

let site = null;
// =================
// @@include('frames/globalFunctions.js')
// ===============
document.addEventListener("DOMContentLoaded", function(event) { 
    if (  !document.getElementsByTagName("body")) {console.log('js error')} 
    
	// console.log('document ready')
	// if (document.documentElement.clientWidth > 991 ) {}
	
	// =================Include Modules==============================

	  /*@@include('frames/modal.js')*/
	  
	  

	site = (function() {

		const win = window,
			  dom = document,
			  body = document.body,
				app = {}
				// обнуление таблицы
				$clearFormBtns = $('.forms-button-another'),
				

			  name = document.getElementsByClassName("mainWrapper")

		
	
		const fn = {

      // реверс строки 
      recString(str){
        let newStr = '', i;
        for (i = str.length - 1; i >= 0; i--) {
         newStr += str.charAt(i);
        }
          return newStr;
      },
      
			// обнуление таблицы
			handleClearForm() {
				$clearFormBtns.on('click', function() {
					const $this = $(this);
					const $form = $this.closest('form');
					const $findBtnActive = $form.find(".button-calculate")
					$findBtnActive.removeClass("active")
					fn.resetForm($form);
				});
			},
			resetForm(formElement) {
				const form = formElement instanceof jQuery ? formElement[0] : formElement;
				form.reset();
			},

			
			domReady() {

				if ( $(".homePage").length )
				fn.handleClearForm();


			}
		}
		
		dom.addEventListener("DOMContentLoaded", fn.domReady()) ;
	
		return fn;
	
	  })();

	

});

window.onload = function() {
	console.log('Hi man! this window load')
}
