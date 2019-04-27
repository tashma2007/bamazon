var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection to overcome Error: ER_NOT_SUPPORTED_AUTH_MODE
var connString = 'mysql://myuser:mypass@myhost/mdb?charset=utf8_general_ci&timezone=-0700';
var conn = mysql.createConnection(connString);

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    port: 8889,
    user: "root",
    password: "root",
    database: "bamazonDB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    console.log("connection successful!");
    queryAllProducts();
    start();
});

function queryAllProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        }
    });
}
function start() {
    inquirer
        .prompt([
            {
                name: "productId",
                type: "input",
                message: "What is the ID number of the product that you would like to buy?",
                validate: function (value) {
                    if (isNaN(value) == false) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                name: "quantity",
                type: "input",
                message: "How many units of the product would you like to buy?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }

            }
        ])
        .then(function (answer) {
            connection.query(`SELECT * FROM products WHERE productId = ${answer.productId}`, function (err, res) {
                if (err) throw err;

                if (parseInt(res[0].stock_quantity) >= parseInt(answer.quantity)) {
                    totalCost = answer.quantity * res[0].price;
                    sellInventory(res, answer);
                }
                else {
                    console.log(`
Insufficient Quantity. We only have ${res[0].stock_quantity} ${res[0].product_name} in stock.`);
                    userPrompt();
                }
            })
        })
}

// 
function sellInventory(res, answer) {
    console.log(`
Congratulations. You've purchased ${answer.quantity} ${res[0].product_name}(s). Your total is $${totalCost}`)
    connection.query(`UPDATE products SET ? WHERE ?`,
        [
            {
                stock_quantity: res[0].stock_quantity - answer.quantity,
            },
            {
                id: answer.id
            }
        ]);
    endConnection();
};

function endConnection() {
    connection.end();
}