const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(emosi) => {
  try {
    let penontonIXX = await promiseTheaterIXX()
    let penontonVGC = await promiseTheaterVGC()

    let emosiPenonton = [...penontonIXX, ...penontonVGC]
    let totalEmosi = emosiPenonton.filter((hasilEmosi=> hasilEmosi.hasil === emosi)).length

    // jumlah penonton marah dan tidak marah
    // return totalEmosiPenonton.filter((totalEmosi)=> totalEmosi.hasil === emosi).length
    return totalEmosi
  } 
  catch (err) {
    console.log(err)
  }

};

module.exports = {
  promiseOutput,
};
