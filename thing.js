$(document).ready(function(){
$(".item").draggable({
  helper: "clone",

});


$("#grocery_list").droppable({
  drop: function(event, the_new_item){
    $(this).append(the_new_item.draggable.clone())
     $(the_new_item).remove();
  }
});
});