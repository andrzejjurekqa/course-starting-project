console.log('lol')

// tsc --init - compile all files
// tsc --w - run and watch for the changes

let logged;

//ok for variables, not ok for functions
function sendAnalytics(data: string) {
    console.log(data);
    logged = true;
}

sendAnalytics('The Data');


function add3(n1: number, n2: number){
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}