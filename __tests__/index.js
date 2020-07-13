import * as uniformsMongoose from "uniforms-bridge-mongoose";

it("exports everything", () => {
        expect(uniformsMongoose).toEqual({
                default: expect.any(Function),
                MongooseBridge: expect.any(Function),
        });
});
