//console.log('The Iron Yard Rocks');


var test_array = [1, 2, 3, 4, 5, 6],
    filter_object,
    filter_return,
    condition,
    map_object,
    map_function,
    map_return,
    replace_return,
    last_return;


var roscoe = roscoe || {};

//roscoe.stuff = {


//This is the filter

roscoe.filter = function(target_array, condition) {

   console.log(target_array);
   console.log(condition);
   filter_return = [];

   var item;

   target_array.forEach (function(item){
               console.log(item);
               if (condition) {
                           filter_return = item};
                           });

  return filter_return;

   //function(num){ return num % 2 == 0; }

 //  return filter_return;

 },


//This is the map function

    roscoe.map = function(target_array, action) {

        map_return = [];

        var target;

        for (target = 0; target != target_array.length; target++)

        map_return[target] = action(target_array[target]);

        return map_return;
    },


//This is the reduce function

    roscoe.reduce = function(target_array) {
    },


//This is the other function

    roscoe.last = function(target_array) {

      var target_length = target_array.length;

      console.log(target_length)

      last_return = target_array[target_length - 1];
    }
