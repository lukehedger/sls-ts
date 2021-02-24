module.exports.hello = async () => {
  return {
    body: JSON.stringify({
      message: "Hello, world",
    }),
    statusCode: 200,
  };
};
