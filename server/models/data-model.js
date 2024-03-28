const { Schema, model } = require('mongoose');

const resourceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

const subjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    resources: [resourceSchema]
});

const dataSchema = new Schema({
    userClass: {
        type: Number,
        required: true
    },
    subjects: [subjectSchema]
});

// Specify the collection name explicitly as 'studyMaterials'
const StudyMaterial = model('StudyMaterial', dataSchema, 'studyMaterials');

module.exports = StudyMaterial;
