/**
 * Created by jerzybatalinski on 2015-08-02.
 */

export default ngModule => {
    describe(`game-directive`, () => {
        beforeEach(window.module(ngModule.name));

        it(`should test properly`, () => {
            expect(true).to.be.true;
        });
    });
};