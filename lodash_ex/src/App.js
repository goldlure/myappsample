import { shuffle } from "lodash";
import _ from 'lodash';
var arr = ["a", "b", "c", "d"];

shuffle(arr);

var ownerArr = [
	{
		owner: 'Colin',
		pets: [ { name: 'dog1' }, { name: 'dog2' } ]
	},
	{
		owner: 'John',
		pets: [ { name: 'dog3' }, { name: 'dog4' } ]
	}
];

// Array's map method.
ownerArr.map(function(owner) {
	return owner.pets[0].name;
});

// Lodash
var out = _.map(ownerArr, 'pets[0].name');
console.log(out);

_.forIn(ownerArr, (value, key) => {

    console.log(`${key}: ${value}`);
})

var users = [
    { 'user': 'barney',  'age': 36 },
    { 'user': 'fred',    'age': 40 , 'status': true},
    { 'user': 'pebbles', 'age': 1 }
  ];

  var ind = _.findIndex(users, 'status');
  console.log(users[ind]);