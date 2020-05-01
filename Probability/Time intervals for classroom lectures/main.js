/*
This problem was asked by Snapchat.

Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.
*/
function numberOfClassRooms(array) {
  var roomCounter = [];
  for (var i = 1; i < array.length; i++) {
    //We will find the overlapping intervals

    if (array[i][0] <= array[i - 1][1]) {
      var startTime = Math.min(array[i][0], array[i - 1][0]);
      var endTime = Math.max(array[i][1], array[i - 1][1]);
      roomCounter.push([startTime, endTime]);
    } else {
      roomCounter.push(array[i]);
    }
  }
  return roomCounter;
}
var array = [
  [30, 75],
  [0, 50],
  [60, 150],
];
var rooms = numberOfClassRooms(array);
console.log(rooms.length);
for (var i = 0; i < rooms.length; i++) {
  console.log(rooms[i]);
}
