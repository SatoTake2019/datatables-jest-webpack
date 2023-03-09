# datatables-jest-webpack
This repository is created to investigate an issue where building JavaScript code related to DataTables initialization with webpack causes an error.

----
# How to reproduce each case about Datatables initialization expression in Javascript
In this repository, success and error cases are differentiated by placing them in their respective git branches.
## "ok-init-table-without-options" branch
Assuming yarn is already installed globally.
After cloning this repository on your local PC, run the following command from the root directory:

    $ git checkout ok-init-table-without-options
    $ cd myapps/static/js/__datatables__/
    $ yarn test

This will run the Jest tests and the tests should pass. 
Next, run the following command to build webpack and create tables.bundle.js in the directory above.

    $ yarn dev
# How to run Django's runserver
As a next step, here's how to start Django's runserver to display DataTables using myapps/static/js/tables.bundle.js as the frontend Javascript.

Assuming you already have a python virtual environment, go back to the root of this repository and run the command below.

    (venv)$ pip install -r requirements.txt
    (venv)$ cd myapps 
    (venv)$ python manage.py runserver --settings=config.settings
Visit http://localhost:8000/ in your local browser to see the sample DataTable page.
Open your browser's dev tools and look at the console to see if there are any errors. For the "ok-split-into-two-files" branch there should be no errors, except favicon errors.

# Comparing results by branch
By doing the above, you can see the behavior on the "ok-init-without-options" branch.
You can check the operation of other branches in the same way. It is summarized in the table below.

|         branch          | unit tests with Jest | build with webpack | run on browser |
|:-----------------------:|----------------------|--------------------|----------------|
| ok-init-without-options | successful           | successful         | successful     |
| error-init-with-options | fail with errors     | successful         | successful     |

If the table on the displayed web page shows a search box and is paginated, you know that DataTable's default features are enabled.


# To change into ES6 module

1. make sure nodejs version >= 16
2. add "type": "module",  in package.json
3. replace all "require()" to "import"
4. also replace all "module.exports" to "export default" or "export", including jest.config.js file
5. this also including webpack*.js file
4. write the import statement up to the extension
5. install  webpack-dev-server
    yarn add -D webpack-dev-server




### Note: The main branch is for working. To see it in action, checkout to the branches listed in the table above to see branch-specific behavior. 

## License
DataTables is under the MIT License. and its official site is https://datatables.net/. The work in this repository also draws on many discussions on https://datatables.net/forums/. This repository claims no license. 
