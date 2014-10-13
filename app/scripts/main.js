//console.log('The Iron Yard Rocks');


var test_array = [1, 2, 3, 4, 5, 6],
    filter_object,
    filter_return,
    condition,
    map_object,
    map_function,
    map_return,
    replace_return,
    last_return,
    initial_return;


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
               if ( condition(item)) {
                           filter_return [filter_return.length] = item};
                           console.log(filter_return);
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

    roscoe.reduce = function(target_array, iteratee, memo, context) {

      var value;

      var sum;

      memo;

      for (value = 0; value != target_array.length; value++)

      memo = iteratee(target_array[value]);

      console.log(memo);

      return memo;

      replace_return = memo;
    },


//This is the last function

    roscoe.last = function(target_array) {

      var target_length = target_array.length;

      console.log(target_length)

      last_return = target_array[target_length - 1];
    }


//This is the last function

    roscoe.initial = function(target_array) {

      var target_length = target_array.length;

      console.log(target_length)

      initial_return = target_array[0];
    }
