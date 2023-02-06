/**
 * write a function called foo() which prints"foo" and a function called bar() which prints "bar". call function bar() in the foo() function after printing. what will be the output? Now call the foo() to see the output.
 */

function foo(){
    console.log("foo");
    bar();
}
function bar(){
    console.log("bar")
}
foo();
