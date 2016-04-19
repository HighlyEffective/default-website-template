
var dataToggleDesign = function() {
    //Toggle click generic
    //how to use? <a href="#" data-toggle="slide" data-target="html">click</a>
    //data-toggle type: slide, fade, open
    jQuery('[data-toggle]').click(function(e) {
        var $this = jQuery(this);
        var type = $this.attr('data-toggle');
        var target = $this.attr("data-target");

        if ($this.parent().hasClass('open')) { //when visible do this   

            $this.parent().removeClass('open'); // when parent is open remove class            
            if ((target != '') && (type == 'slide')) { //when data-target is true do this
                jQuery(target).removeClass('open').slideUp();
            } else if ((target != '') && (type == 'fade')) {
                jQuery(target).removeClass('open').fadeOut();
            } else if ((target != '') && (type == 'open')) {
                jQuery(target).removeClass('open');
            }
        } else { //when hidden
            $this.parent().addClass('open');
            //when data-target is true do this
            if ((target != '') && (type == 'slide')) {
                jQuery(target).addClass('open').slideDown();
            } else if ((target != '') && (type == 'fade')) {
                jQuery(target).addClass('open').fadeIn();
            } else if ((target != '') && (type == 'open')) {
                jQuery(target).addClass('open');
            }

        }
        e.preventDefault();
    });
};

jQuery(document).ready(function(){
	
	// add classes to first and last menu items in the menu's (can be removed if your CMS does this for you)
	jQuery("ul.level2 li:first-child, #level1 li:first-child").addClass("first");
	jQuery("ul.level2 li:last-child, #level1 li:last-child").addClass("last");
	
	// If menu item has submenu add class
	jQuery("li.level1-item:has(ul)").addClass("submenu").parents();
	
    // init toggles (mobile menu)
	dataToggleDesign();	

 });