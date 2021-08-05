"use strict";
// Flow of code is important. in functions you can't tell what type something may be function is defined before you call it so it has no way of knowing if what you pass in can be used.
let logged;
function sendAnalytics(data) {
    console.log(data);
    logged = true;
}
sendAnalytics('The data');
//# sourceMappingURL=analytics.js.map