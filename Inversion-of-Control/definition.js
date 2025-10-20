//Definition:

// The first part of our program that executes now and the second part that executes
// in the callback and when we give that callback to someone else(like, for example,
// an external API). That’s what inverts the control and puts them in charge of
// executing the second part of our program. Passing the control of one function to
// another function can lead to many problems.

/*-----------------------------------------------------------------------------------*/

//Problems it might cause:

// 1. A Callback may be called multiple times.
// 2. A Callback would never get called.
// 3. A Callback may be called synchronously.
