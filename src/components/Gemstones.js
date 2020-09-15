// /*
//   Args:
//     offers: an array of arrays, each array representing an offer from a shop as
//             a triple of strings, <shop, gem type, gem count>
//             ex: [["Sample Shop", "diamond", "15"], ...]
//     preferences: an array of gems, most preferred gem first.
//   Returns:
//     An array of Number, how many of each gemstone you will buy. This will mirror
//     preferences. Ex: If preferences is ["jade", "ruby", "opal"], and you will
//     buy 20 jades and 10 opals, return [20, 0, 10]
// */
var offers1 = [
    ["Ralph's Rubies","opal","10"],
    ["Catseye Gems","ruby","0"],
    ["Catseye Gems","jade","20"],
  ]
  var preferences1 = ["jade", "ruby", "opal"]
  // expected output = 
  // 20
  // 0
  // 10

  
  var offers = [
  ["Lothlorien Gemstones","ruby","5"],
  ["Catseye Gems","jade","2"],
  ["Catseye Gems","emerald","4"],
  ["Ralph's Rubies","diamond","20"],
  ["Ralph's Rubies","ruby","1"],
  ["Moria Stone Shop","jade","5"],
  ]
  var preferences = ["diamond","emerald","ruby","jade"]
  // expected output = 
  // 20
  // 4
  // 5
  // 5

  function gemstones(offers, preferences) {
    var gems = {}
    preferences.forEach((pref) => {
      gems[pref] = 0
      offers.forEach((offer) => {
        if(offer.includes(pref)){
          let count = parseInt(offer[2])
          if(offer[2] === "" || offer[2] === 0){
            gems[pref] = 0
          } else {
            if(pref === preferences[0]){
              gems[pref] += count
            } else {
              gems[pref] = Math.max(gems[pref], count)
            }
          }
        }
      })
     })
    return Object.values(gems)
  }

  console.log(gemstones(offers, preferences))

  console.log(gemstones(offers1, preferences1))