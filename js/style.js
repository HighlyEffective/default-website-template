jQuery(document).ready(function(){

    // mobile toggle of submenu
    jQuery(".menu-toggle" ).on( "click", function() {
      jQuery("#mainMenu, html").toggleClass("open");
    }); 
	
	// add classes to first and last menu items in the menu's (can be removed if the CMS does this for you)
	jQuery("ul.level2 li:first-child, #level1 li:first-child").addClass("first");
	jQuery("ul.level2 li:last-child, #level1 li:last-child").addClass("last");
	
	// If menu item has submenu add class (can be removed if the CMS does this for you)
	jQuery("li.level1-item:has(ul)").addClass("submenu").parents();

 });