Crafty.c('sulphur', {
    init: function() {
        this.requires('resource')
            .addComponent('shining--sulphur')
        ;
    },

    remove: function(isDestroyed) {
        if (!isDestroyed) return;

        var amount = Crafty.math.randomInt(3, 6);
        console.log('pick up sulphur: ' + amount);
    }
});
