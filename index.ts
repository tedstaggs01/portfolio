/*

Type Script
TS: Static "Safer" = stric adherence to types resulting in less errors
Meaning Catching Bugs earlier than later in production (Compiler catches them)
Expanded on JS requiring a compiler for the browser to compile it into JS
As Browser cannot execute TS 
Any valid JS code is valid in TS 

Installing it: npm i typescript
tsc -v / --version
npm i -g / --global: globally meaning this library is installed for all projects 
What are the globally installed packages? 
npm list -g / npm list for only project dependencies
Avoid when it is for a specific project: npm i --save-dev typescript
Remove global installation: npm uninstall -g typescript

default: typescipt ES3 so no function for async await
So instead create a tsconfig.json file 
target compiled code to a certain JS 
watch recomplie the code whenever file is saved to have not reload the command
lib: certain libraris to be included: dom .... etc like url class




*/