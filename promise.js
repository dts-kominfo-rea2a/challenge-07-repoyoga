const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(emosi) => {
  try {
    let penontonIXX = await promiseTheaterIXX()
    let penontonVGC = await promiseTheaterVGC()

    let totalEmosiPenonton = [...penontonIXX, ...penontonVGC]

    // jumlah penonton marah dan tidak marah
    return totalEmosiPenonton.filter((totalEmosi)=> totalEmosi.hasil === emosi).length
  } 
  catch (err) {
    console.log(err)
  }

};

module.exports = {
  promiseOutput,
};
