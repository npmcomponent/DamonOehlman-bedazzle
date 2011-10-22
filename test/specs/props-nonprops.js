describe('multiprop parser - non properties', function() {
    it('does not parse instruction labels', function() {
        var props = parseMultiProp(':rotateRight');
        expect(props).toBeUndefined();
    });
    
    it('does not parse \'with\' instructions', function() {
        var props = parseMultiProp('with .box');
        expect(props).toBeUndefined();
    });
});