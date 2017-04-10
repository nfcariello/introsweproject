/**
 * Event.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    [eventID : { type: 'int,' },

    eventTitle : { type: 'string,' },

    ownerID : { type: 'int,' },

    startDateTime : { type: 'date,' },

    endDateTime : { type: 'date,' },

    desc : { type: 'object,' },

    notes : { type: 'object,' },

    busy : { type: 'boolean]' }
  }
};

