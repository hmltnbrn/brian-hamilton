const aws = require('aws-sdk');
const createError = require('http-errors');

const getProjects = async (req, res, next) => {
    const dynamo = new aws.DynamoDB.DocumentClient({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
    });

    const params = {
        TableName: process.env.AWS_TABLE_NAME,
    };

    const ddbProm = dynamo.scan(params).promise();

    try {
        const { Items } = await ddbProm;
        const sortedItems = Items.sort((item1, item2) =>
            item1.startYear < item2.startYear
                ? -1
                : item1.startYear > item2.startYear
                ? 1
                : 0,
        );
        return res.status(200).json(sortedItems);
    } catch (e) {
        next(createError(500));
    }
};

const getProject = async (req, res, next) => {
    const dynamo = new aws.DynamoDB.DocumentClient({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
    });

    const params = {
        TableName: process.env.AWS_TABLE_NAME,
        Key: {
            id: req.params.id,
        },
    };

    const ddbProm = dynamo.get(params).promise();

    try {
        const { Item } = await ddbProm;
        return res.status(200).json(Item);
    } catch (e) {
        next(createError(500));
    }
};

const getFeaturedProjects = async (req, res, next) => {
    const dynamo = new aws.DynamoDB.DocumentClient({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
    });

    const params = {
        TableName: process.env.AWS_TABLE_NAME,
        ProjectionExpression: 'id, title, links, background',
        FilterExpression: 'featured = :featured_state',
        ExpressionAttributeValues: {
            ':featured_state': true,
        },
    };

    const ddbProm = dynamo.scan(params).promise();

    try {
        const { Items } = await ddbProm;
        return res.status(200).json(Items);
    } catch (e) {
        next(createError(500));
    }
};

module.exports = {
    getProjects,
    getProject,
    getFeaturedProjects,
};
