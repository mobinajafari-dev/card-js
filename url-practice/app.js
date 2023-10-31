const googleURL = new URL('https://google.com');

const emailURL = new URL ('mail/u/0/?tab=rm&ogbl#sent/KtbxLxglpNPNmWpsbXrkdrCWCHXVQtnjnq','https://mail.google.com/');

console.log(emailURL.hash);
console.log(googleURL.hash);

console.log(emailURL.host);
console.log(googleURL.host);

console.log(emailURL.hostname);
console.log(googleURL.hostname);

console.log(googleURL.href);
console.log(emailURL.href);

console.log(googleURL.origin);
console.log(emailURL.origin);

console.log(googleURL.password);
console.log(emailURL.password);

console.log(googleURL.pathname);
console.log(emailURL.pathname);

console.log(googleURL.port);
console.log(emailURL.port);

console.log(googleURL.protocol);
console.log(emailURL.protocol);

console.log(emailURL.search);
console.log(googleURL.search);

console.log(googleURL.searchParams);
console.log(emailURL.searchParams);

console.log(emailURL.toJSON());
console.log(googleURL.toJSON());

console.log(emailURL.toString());

console.log(emailURL.username);

let searchParams = emailURL.searchParams;

searchParams.append('lan','en');
console.log(emailURL.href);
searchParams.delete('lan','en');
console.log(emailURL.href);

for (const [key, value] of searchParams.entries()) {
    console.log(`${key}, ${value}`);
}


searchParams.forEach((value, key) => {
    console.log(value, key);
});

console.log(searchParams.get('tab'));

console.log(searchParams.getAll('tab'));

console.log(searchParams.has('tab'));

for (const key of searchParams.keys()) {
    console.log(key);
}

searchParams.set('lan','en');
console.log(emailURL.href);

searchParams.sort();
console.log(emailURL.href);

for (const value of searchParams.values()) {
    console.log(value);
}
