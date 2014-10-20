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
    initial_return,
    reject_return,
    sum;


var roscoe = roscoe || {};

//roscoe.stuff = {


//This is the filter function

roscoe.filter = function(target_array, condition) {

   //console.log(target_array);
   //console.log(condition);
   filter_return = [];

   var item;

   target_array.forEach (function(item){
               //console.log(item);
               if ( condition(item)) {
                           filter_return [filter_return.length] = item};
                           //console.log(filter_return);
                           });
  return filter_return;

},

//This is the reject function

roscoe.reject = function(target_array, condition) {

   //console.log(target_array);
   //console.log(condition);
   reject_return = [];

   var item;

   target_array.forEach (function(item){
               //console.log(item);
               if ( condition(item) == false) {
                           reject_return [reject_return.length] = item};
                           //console.log(reject_return);
                           });
  return reject_return;

   //function(num){ return num % 2 == 0; }

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



    roscoe.reduce = function(target_array, initial_value) {

      var target;

      initial_value = typeof initial_value !== 'undefined' ?  initial_value : 0;

      sum = initial_value;

      for (target = 0; target != target_array.length; target++)

      sum = sum + target_array[target];

      console.log(sum);

      return sum;

      replace_return = sum;
    },


//This is the last function

    roscoe.last = function(target_array) {

      var target_length = target_array.length;

      //console.log(target_length)

      last_return = target_array[target_length - 1];

      return last_return;
    }


//This is the first function

    roscoe.initial = function(target_array) {

      var target_length = target_array.length;

      // console.log(target_length)

      initial_return = target_array[0];

      return initial_return;
    }
