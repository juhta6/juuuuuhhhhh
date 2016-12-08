tabris.ui.set("toolbarVisible", false);
var page = new tabris.Page({
  topLevel: true
}).open();
page.on("touchend",function(){tabris.ui.set("displayMode", "fullscreen")}).on("touchstart",function(){tabris.ui.set("displayMode", "fullscreen")});

//---------------------------------------------------------------------------------------------------------------------------

var items = [];
var i;
var item = "";
for (i = 0; i < items.length; ++i){
  item = items[i]
}

var composite = new tabris.Composite({
  top: 0, left: 0, right: 0, bottom: 68
}).appendTo(page);

	var collectionView = new tabris.CollectionView({
  layoutData: {left: 0, top: 0, right: 0},
  background: "white",
  items: items,
  itemHeight: 64,
  initializeCell: function(cell) {
    var nameTextView = new tabris.TextView({
      layoutData: {left: 30, centerY: 0, right: 30, height: 64},
      alignment: "center",
      font: "20px",
    }).appendTo(cell);
    cell.on("change:item", function(widget, item){
      nameTextView.set("text", item)
    })
  }
}).appendTo(composite);

   var add = new tabris.Button({
      layoutData: {bottom: 18, right: 2},
      text: "Add item"
   }).on("select", function(){
     if (!setItem.get("text") == ''){
          items = [];
         items.push(setItem.get("text")+' '+(++i))
         index.set("text", i)
           collectionView.insert(items)
             collectionView.refresh()
     }
   }).appendTo(page);

   var remove = new tabris.Button({
      layoutData: {bottom: 18, right: [add, 2]},
      text: "Remove item",
   }).on("select", function(){
     if (i >= 1){
     index.set("text", --i)
           collectionView.remove(0)
           items.pop(0)
     }
             collectionView.refresh()
   }).appendTo(page);
      
var index = new tabris.TextInput({
  layoutData: {bottom: 18, right: [remove, 2], width: 44, height: 48},
  kayboard: "numbers",
  message: "Index",
  text: i,
  alignment: "center"
}).on("accept",function(widget, text){
  i = text
}).appendTo(page);

var setItem = new tabris.TextInput({
  layoutData: {bottom: 18, right: [index, 2], left: 9, height: 48},
  kayboard: "ascii",
  message: "Set item..."
}).on("accept",function(widget, text){
  items = [];
}).appendTo(page);
