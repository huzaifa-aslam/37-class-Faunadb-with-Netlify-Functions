1- create netlify.toml file

and place 

[build]
   command="yarn build"
   publish="public/"
   functions="functions/"

2- create netlify function

netlify functions:create addMessage // addMessage will be the name of file

3-inside functions initilize npm "npm init"

4-intall fauna DB "npm install faunadb --save"

5- create faunadb query for data entry inside functions

