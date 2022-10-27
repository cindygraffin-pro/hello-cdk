exports.handler = async (event, context) => {
    const name = process.env.NAME
    const age = process.env.AGE
    return `Hello CDK! ${name} and age ${age}`
}

