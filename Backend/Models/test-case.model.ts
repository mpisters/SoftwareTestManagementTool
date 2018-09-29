import {model, Schema} from 'mongoose';

const StepTestCase: Schema = new Schema({
    step: {
        stepNumber: Number,
        action: String,
        comment: String
    }
});

const TestCase: Schema = new Schema({
    testCaseTitle: {
        type: String
    },
    assignedTo: {
        type: String
    },
    description: {
        type: String
    },
    automationStatus: {
        type: Boolean
    },
    status: {
        type: String,
        default: 'Open'
    },
    steps: [StepTestCase]
});

export default model('TestCase', TestCase);
