describe("Add/Get/Delete Model Api", () => {
    it("Add Model Api", function () {
      const requestBody = {
        name : "automation" + Math.random().toString(36).substring(2),
      owner: "automation" + Math.random().toString(36).substring(2)
      };
    
   cy.request({
        
        method: "POST",
        url : "http://localhost:8000/models",
        body:  requestBody,
       headers : {
         "Content-Type": "application/json"
       }
    }).then ((response)=> {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.be.a('string')
        expect(response.body.name).eq(requestBody.name)
        expect(response.body.owner).eq('string')
    
  
      });
    });
    it("Add Model with empty owner name Api", function () {
      
      const requestBody = {
        "name": "test10",
      "owner": ""
      };
    
   cy.request({
        
        method: "POST",
        url : "http://localhost:8000/models",
        failOnStatusCode: false,
        body:  requestBody,
       headers : {
         "Content-Type": "application/json"
       }
       
    }).then ((response)=> {
      
        expect(response.status).to.eq(400);
        expect(response.body.id).to.be.a('string')
        expect(response.body.name).eq('test11')
        expect(response.body.owner).to.be.a('string')
    
  
      });
    });
    it("Get Model Api", function () {
      
      
    
   cy.request({
        
        method: "Get",
        url : "http://localhost:8000/models",  
       headers : {
         "Content-Type": "application/json"
       }
       
    }).then ((response)=> {
      
        expect(response.status).to.eq(400);
        expect(response.body.id).to.be.a('string')
        expect(response.body.name).eq('test11')
        expect(response.body.owner).to.be.a('string')
    
  
      });
    });
})
