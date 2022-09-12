/**
 * A map of the random responses
 * @param {Object} respLookupTbl
 */
const respLookupTbl = {
  responses: ["Response 1", "Response 2", "Response 3", "Response 4"],
};

/**
 * Funtion that returns a sud0random integer based on the max size passed in
 * @param {*} max
 */
const getRandomInt = (max = 2) => {
  return Math.floor(Math.random() * max);
};

export default {
  /**
   * Main even handler for the request
   * @param {*} request
   */
  fetch(request) {
    //
    if (request) {
      return new Response(respLookupTbl.responses[getRandomInt(4)]);
    } else {
      return new Response(`The request object does not exist`);
    }
  },
};
