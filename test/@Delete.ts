import { Back, Controller, Service, Delete, Route, Request, Response, RequestBody, ResponseBody } from "../index";
var request = require('supertest')
    , assert = require('assert');
import "mocha";
import bodyParser = require("body-parser");

describe('@Delete', function () {
 

        it('should return value', function (done) {
            Back.reset();

            @Controller
            @Route("/product")
            class ProductController {

                constructor() { }

                @Delete("/:product_id")
                someMethod(req : Request, res : Response, product_id : number) {
                    assert.equal(product_id,45);
                    res.end("I just deleted a product");
                }

            }

            let app = Back.express();

            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({ extended: false }));

            Back.prepare(app);
            request(app)
                .delete('/product/45')
                .expect("I just deleted a product", done);

        });
 

 



});
