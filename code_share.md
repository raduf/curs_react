    ======================================================================
MATERIAL CURS/Exercitii/Auth Doc and Example(NodeJS/ReactJS Get Token)
https://we.tl/t-l07q6W0CNe 
======================================================================

ReactJS Starters
https://we.tl/t-L2iZBJE78Q  [01-04]
https://we.tl/t-QH0SzsOzl8  [05-07]
https://we.tl/t-14DKponxwp  [08-09]
https://we.tl/t-kuf5Agm38T  [10-11]

===============================================
https://academy-feedback.cloud.esolutions.ro/#/feedback-form/link/Re32534578
===============================================


istoric commituri curs: https://github.com/raduf/curs_react

https://getbootstrap.com/docs/4.3/components/buttons/


Initial JS Quizz [TH29]
https://www.classroomclipboard.com/768253/Test/D9C03BB3-9603-484E-8A86-C1B6DEBFD048
https://www.classroomclipboard.com/768253

NPM Repo
https://www.npmjs.com/



=========================

=========STYLES========

Inline styles
https://formidable.com/open-source/radium/

https://emotion.sh/docs/introduction

activare module css
https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2

========================

Upload file with ReactJS
https://malcoded.com/posts/react-file-upload/

https://www.jslint.com/

NVM - Node Version Manager
https://github.com/coreybutler/nvm-windows
https://github.com/creationix/nvm

Json Server
npm i -g json-server

postman
https://www.getpostman.com/

Bootstrap CSS Framework
https://getbootstrap.com

Librarii ReactJS
================

// Forms
https://jaredpalmer.com/formik/
https://redux-form.com/8.1.0/


Hooks  16.8
https://reactjs.org/docs/hooks-intro.html   (Motivation)
https://reactjs.org/docs/hooks-overview.html 

Testing frameworks
==================
https://www.robinwieruch.de/react-testing-tutorial/


-----------------------------


Development Tools
=================

https://caniuse.com

https://www.npmjs.com/

https://babeljs.io 

https://github.com/typicode/json-server 

https://facebook.github.io/immutable-js

=======


PrivateRoute Auth Example
https://tylermcginnis.com/react-router-protected-routes-authentication/


===============

{
    "project": {
        "noTasksMessage": "Selected project has no tasks! (settings message)",
        "showHideButton": true
    }
}




=====
var task = {
    subject: 'Design Services Page',
    save: function(a,b) {
        console.log('Saving: ' + this.subject + ' - ' + b); 
    }
}
var task2 = {
  subject: 'Design About Page'
}

// console.log( task.save.apply(task2, [100, 'A']) )
var subject = 'Global task'
var save = task.save.bind(task2, 100)  ;
save(200)
====

var task = {    
    statuz: 'New',
    description: 'New task' 
};

function getStatus(){
    return this.statuz;
}
let getStatusArr = () => {
  return this.statuz
}

console.log(getStatus.call(task));
console.log(getStatusArr.call(task));

==========

var user = { 
  id: 10, 
  username: 'qwe',
  adresa: { 
      oras: 'Bucuresti',
      strada: 'Ingusta',
      arr: [1,2,3]
  }
};

var { username:usr, adresa: { oras, arr: [,b]} } = user;

console.log(usr,oras,b)

========

pentru vizualizare event loop in JS

http://latentflip.com/loupe


           