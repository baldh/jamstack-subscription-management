export const handler = async (event, context) => {
  const { identity, user } = context.clientContext

  console.log(identity,user)
  return {
    statusCode: 200,
    body: "ok"
  }
}