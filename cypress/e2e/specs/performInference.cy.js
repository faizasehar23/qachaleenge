describe("Add Inference Api", () => {
    it("Add Inference Api", function() {

        const requestBody = {
            name: "automation" + Math.random().toString(36).substring(2),
            owner: "automation" + Math.random().toString(36).substring(2)
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
            const requestBody2 = {
                name: "automation" + Math.random().toString(36).substring(2),
                hugging_face_model: "automation" + Math.random().toString(36).substring(2)
            };
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
                const versionId = response.body.id

                const requestBody3 = {

                    text: "automation" + Math.random().toString(36).substring(2),
                    apply_template: false,
                    max_new_tokens: 256,
                    do_sample: true,
                    temperature: 0.7,
                    top_k: 50,
                    top_p: 0.95

                };

                cy.request({

                    method: "POST",
                    url: Cypress.env('apiUrl') + "/models/" + modelId + '/versions/' + versionId + '/infer',
                    body: requestBody3,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((response) => {
                    expect(response.status).to.eq(200);




                });
            })
        })
    });
})