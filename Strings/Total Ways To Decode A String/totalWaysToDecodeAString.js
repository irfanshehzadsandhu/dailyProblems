/*This problem was asked by Facebook.
    Given the mapping a = 1,b = 2, ... z = 26, and an encoded message,
    count the number of ways it can be decoded.

    For example,the message '111' would give 3,
    since it could be decoded as 'aaa', 'ka', and'ak'.

    You can assume that the messages are decodable.For example,'001' is not allowed.*/
/*Help From Following link
https://www.youtube.com/watch?v=qli-JCrSwuk&t=311s
*/
var counter = 0;
function decode(encodedMessage) {
    console.log("^^^^^^^^^^^^^", encodedMessage);
    console.log("Number of ways:", counter);
    while (encodedMessage != null) {

        if (parseInt(encodedMessage[0]) == 0) {
            console.log("Invalid Encoded Message.");
            encodedMessage = null;
        }
        else if (parseInt(encodedMessage[0]) == 1 || (parseInt(encodedMessage[0]) == 2 && parseInt(encodedMessage[1]) < 7)) {
            counter++;
            if (parseInt(encodedMessage[0]) == 1) {
                decode(encodedMessage.substring(1));
            }
            else {
                decode(encodedMessage.substring(2));
            }

        }
        else if (parseInt(encodedMessage[0]) > 1) {
            counter++;
            decode(encodedMessage.substring(1));
        }
    }
}
//decode("011");
//decode("111");
decode("4123"); //Possible ways are DABC,DLC,DAX