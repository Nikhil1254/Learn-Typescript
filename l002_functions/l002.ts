const heros = ["thor", "ironman", "spiderman"];

heros.map((hero): string => {
    return `Hero is ${hero}`;
});

// void means function will not return a value
// good practice to mention void externally
function consoleError(errMsg: string): void {
    console.log(errMsg);
}

// never means function will never return anything.
// it's used for error handling we are intensionally crashing the function.
// forceful termination of program.
function handleError(errMsg: string): never {
    throw new Error(errMsg);
}