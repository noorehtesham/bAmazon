var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require('console.table');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,


    user: "root",


    password: "Newyorkcity1!",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    start();
});

function start() {
    var sql = "SELECT * FROM products";

    console.log("connected!");
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.table(result);
        questions();
    })
}


function questions() {
    inquirer.prompt([{
                name: "idrequest",
                type: "input",
                message: "What is the ID of the product you would like to purchase?"
    },
            {
                name: "quantity",
                type: "input",
                message: "How many would you like to purchase?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
      }
    ])
        .then(function (answer) {
                var sql = "SELECT stock_quantity FROM PRODUCTS WHERE item_id = ?";

                console.log(answer.idrequest);
                console.log("answer:" + answer.quantity);
                connection.query(sql, [answer.idrequest], function (err, res) {


                        

                        if (res[0].stock_quantity > answer.quantity) {
                            connection.query(

                                "UPDATE products SET ? WHERE item_id = ?", [{stock_quantity: res[0].stock_quantity - answer.quantity}, answer.idrequest],
                                function (err) {
                                    if (err) throw err;
                                    console.log("you have purchased this item successfully!");

                                    start();
                                }

                            );
                        } else {
                            console.log("Insufficient quantity! Please enter a different amount or order something else.");
                            start();
                        }

                    }



                );


            }

        )

}
