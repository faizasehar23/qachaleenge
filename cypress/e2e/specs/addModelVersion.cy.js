const requestBody = {
    name: "automation" + Math.random().toString(36).substring(2),
    owner: "automation" + Math.random().toString(36).substring(2)
};
const requestBody2 = {
    name: "automation" + Math.random().toString(36).substring(2),
    hugging_face_model: "automation" + Math.random().toString(36).substring(2)
};

describe("Add/Get/Delete Model Version Api", () => {
    it("Add Model version Api", function() {
        cy.request({

            method: "POST",
            url: "http://localhost:8000/models",
            body: requestBody,
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            const modelId = response.body.id

            cy.request({

                method: "POST",
                url: Cypress.env('apiUrl') + "/models/" + modelId + '/versions',
                body: requestBody2,
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.id).to.be.a('string')
                expect(response.body.name).eq(requestBody2.name)
                expect(response.body.parent_model_id).eq(modelId)
                expect(response.body.hugging_face_model).eq(requestBody2.hugging_face_model)

            });
            cy.request({

                method: "Get",
                url: Cypress.env('apiUrl') + "/models/" + modelId + '/versions',
                headers: {
                    "Content-Type": "application/json"
                }

            }).then((response) => {
                const obj = JSON.stringify(response)
                cy.log(obj)
                const versionId = response.body[0].id
                expect(response.status).to.eq(200);
                expect(response.body[0].id).to.be.a('string')
                expect(response.body[0].name).eq(requestBody2.name)
                expect(response.body[0].parent_model_id).eq(modelId)
                expect(response.body[0].hugging_face_model).eq(requestBody2.hugging_face_model)

                cy.request({

                    method: "Delete",
                    url: Cypress.env('apiUrl') + "/models/" + modelId + '/versions/' + versionId,
                    headers: {
                        "Content-Type": "application/json"
                    }

                }).then((response) => {

                    expect(response.status).to.eq(200);


                });
            });
        });
    });
})