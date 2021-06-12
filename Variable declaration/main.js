// Variable declaration in Typescript
// You can use the var keyword or the let keyword
function doSomething() {
    for (var i = 1; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally " + i);
}
doSomething();
// A variable declared with the 'var' keyword can be scoped to the nearest function. This also means that once we declear tje var variable anywhere in our function it's readiy available there
function doSomething() {
    for (var i = 1; i < 5; i++) {
        console.log(i);
    }
    // console.log("Finally " + i);
}
doSomething();
// For declaring of varibles using the let keyword, the varible cannot be accessible outside the block the varible the was decleared, hence the error. We still got our javascript file after compilling it that is becuase the error doesn't stop the compilling but shows us the error we have in order to fix it before compilling
