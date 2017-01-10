import DS from 'ember-data';

export default DS.Model.extend({

    body: DS.attr(),
    head: DS.attr(),
    type: DS.attr(),
    link: DS.attr()


});
