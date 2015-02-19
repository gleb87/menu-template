function Menu(options) {
  var self = this;

  var elem;

  var template = _.template(options.template);
  var itemTemplate = _.template(options.itemTemplate);
  
  function render() {
    /* ваш код */

    elem = $(template({
    	title: options.title,
    	items: options.items || [],
    	itemTemplate: itemTemplate,
    })).on("click", ".menu-title", onTitleClick)
    .on("click", ".menu-items a", onItemClick)
    .on("selectstart mousedown", false);

    return elem;
  }

  function onItemClick(e) {
  	selectItem($(e.target));
  }

  function onTitleClick() {
  	self.toggle();
  }

  function selectItem(item) {
  	alert(item.html());
  }

  // ---------- методы ----------
  self.getElement = function() {
  	return elem || render();
  }

  self.open = function() {
  	self.getElement().addClass("menu-open");
  }

  self.close = function() {
  	self.getElement().removeClass("menu-open");
  }

  self.toggle = function() {
  	self.getElement().toggleClass("menu-open");
  }

  self.addItem = function(item) {
  	self.getElement().find(".menu-items").append( itemTemplate(item) );
  }
}