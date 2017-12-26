describe ("Routes Produtos",function(){
    var Produtos = app.datasource.models.Produtos, 
 
        defaultProduto={
            id:1,
            nome:"Default Product"
        };

    beforeEach(function(done){
        Produtos
            .destroy({where: {}})
            .then(function(){Produtos.create(defaultProduto);})
            .then(function(){
                done();
            });
    });
    describe ("Route GET /produtos",function(){
        it("deve retornar uma lista de produtos",function(done){
            request
                .get("/produtos")
                .end(function(err,res){
                    expect(res.body[0].id).to.be.eql(defaultProduto.id);
                    expect(res.body[0].nome).to.be.eql(defaultProduto.nome);
                    done(err);
                });
        });
    });

    describe("Route GET /produtos/{id}",function(){
        it ("deve retornar um produto pelo id",function(done){
            request
                .get("/produtos/1")
                .end(function(err,res){
                    expect(res.body.id).to.be.eql(defaultProduto.id);
                    expect(res.body.nome).to.be.eql(defaultProduto.nome);
                    done(err);
                });
        });
    });

    describe("Route GET /produtos/{id}",function(){
        it("deve retornar um produto pelo id",function(done){
            request
                .get("/produtos/1")
                .end(function(err,res){
                    expect(res.body.id).to.be.eql(defaultProduto.id);
                    expect(res.body.nome).to.be.eql(defaultProduto.nome);
                    done(err);
                });
        });
    });

    describe("Route POST /produtos/",function(){
        it("deve criar um produto",function(done){
            var newProduto = {
                id:2,
                nome: "newProduto"
            };
            request
                .post("/produtos")
                .send(newProduto)
                .end(function(err,res){
                    expect(res.body.id).to.be.eql(newProduto.id);
                    expect(res.body.nome).to.be.eql(newProduto.nome);
                    done(err);
                });
        });
    });

    describe ("Route PUT /produtos/{id}",function(){
        it("deve alterar um produto",function(done){
            var updatedProduto = {
                id:1,
                nome: "Updated Produto"
            };
            request
                .put("/produtos/1")
                .send(updatedProduto)
                .end(function(err,res){
                    console.log("RESPONSE",res.body);
                    expect(res.body).to.be.eql([1]);
                
                    done(err);
                });
        });
    });

    describe ("Route DELETE /produtos/{id}",function(){
        it ("deve deletar um produto",function(done){
        
            request
                .delete("/produtos/1")
             
                .end(function(err,res){
                    console.log("RESPONSE",res.body);
                    expect(res.statusCode).to.be.eql(204);
                
                    done(err);
                });
        });
    });
});