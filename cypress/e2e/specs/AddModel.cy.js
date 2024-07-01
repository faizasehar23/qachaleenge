describe("Add/Get/Delete Model Api", () => {
  it("Add Model Api", function() {
      const requestBody = {
          name: "automation12" + Math.random().toString(36).substring(2),
          owner: "automation11" + Math.random().toString(36).substring(2)
      };
      cy.request({

          method: "POST",
          url: Cypress.env('apiUrl') + "/models",
          body: requestBody,
          headers: {
              "Content-Type": "application/json"
          }
      }).then((response) => {
          // Assertions on response body
          expect(response.status).to.eq(200);
          expect(response.body.id).to.be.a('string')
          expect(response.body.name).eq(requestBody.name)
          expect(response.body.owner).eq(requestBody.owner)
      });
  });
  it("Add Model with empty owner name Api", function() {
      // Create Request Body Data
      const requestBodyConst = {
          "name": "test10",
          "owner": ""
      };

      cy.request({

          method: "POST",
          url: Cypress.env('apiUrl') + "/models",
          failOnStatusCode: false,
          body: requestBodyConst,
          headers: {
              "Content-Type": "application/json"
          }

      }).then((response) => {
          // Assertions on response 
          const objResponse = JSON.stringify(response)
          cy.log(objResponse)
          expect(response.status).to.eq(400);
          expect(response.body.id).to.be.a('string')
      });
  });
  it("Get Model Api", function() {

      cy.request({

          method: "Get",
          url: Cypress.env('apiUrl') + "/models",
          headers: {
              "Content-Type": "application/json"
          }

      }).then((response) => {
          //Assertions on response body
          expect(response.status).to.eq(200);
          expect(response.body[0].id).to.be.a('string')
          expect(response.body[0].name).to.be.a('string')
          expect(response.body[0].owner).to.be.a('string')
      });
  });
  it("Delete Model Api", function() {
      const requestBody = {
          name: "automation12" + Math.random().toString(36).substring(2),
          owner: "automation11" + Math.random().toString(36).substring(2)
      };
      cy.request({
          method: "POST",
          url: Cypress.env('apiUrl') + "/models",
          body: requestBody,
          headers: {
              "Content-Type": "application/json"
          }
      }).then((response) => {
          expect(response.status).to.eq(200);
          const modelId = response.body.id

          cy.request({

              method: "Delete",
              url: Cypress.env('apiUrl') + "/models/" + modelId,
              headers: {
                  "Content-Type": "application/json"
              }
          }).then((response) => {
              //Assertions on response
              expect(response.status).to.eq(200);

          });
      });
  });
})