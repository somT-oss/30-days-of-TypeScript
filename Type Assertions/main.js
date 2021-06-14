var message = 'abc';
var EndsWithC = message.endsWith("c");
// Type assertitions shows the methods that are available or can be used on a particular data type
// For example a string has an in-built function that can be called with it name 'endsWith()'.
// In the examole above we decleared a varible type string which could the 'endswith function' but let us checkout another use case 
var secondMessage;
secondMessage = 'abc';
// In the variable we decleared above it has a data type of any, and cannot be able to use the in-built function 'endswith' of a string. if we want to use any in-built message applicable to only stringd we can use it by adding this to our code.
var endsWihtC = secondMessage.endsWith("c");
var alternativeWway = secondMessage.endsWith("c");
// And that is how we do it uding type assertions 
