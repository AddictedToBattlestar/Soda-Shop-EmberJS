import DS from 'ember-data';
const { Model, attr } = DS;

export default class Person extends Model {
    @attr('string') name;
    @attr() image;
}