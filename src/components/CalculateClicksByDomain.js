

// You are in charge of a display advertising program. Your ads are displayed on websites all over the internet. You have some CSV input data that counts how many times that users have clicked on an ad on each individual domain. Every line consists of a click count and a domain name, like this:

// counts = [ "900,google.com",
//      "60,mail.yahoo.com",
//      "10,mobile.sports.yahoo.com",
//      "40,sports.yahoo.com",
//      "300,yahoo.com",
//      "10,stackoverflow.com",
//      "20,overflow.com",
//      "2,en.wikipedia.org",
//      "1,m.wikipedia.org",
//      "1,mobile.sports",
//      "1,google.co.uk"]

// Write a function that takes this input as a parameter and returns a data structure containing the number of clicks that were recorded on each domain AND each subdomain under it. For example, a click on "mail.yahoo.com" counts toward the totals for "mail.yahoo.com", "yahoo.com", and "com". (Subdomains are added to the left of their parent domain. So "mail" and "mail.yahoo" are not valid domains. Note that "mobile.sports" appears as a separate domain near the bottom of the input.)

// Sample output (in any order/format):

// calculateClicksByDomain(counts) =>
// com:                     1340
// google.com:              900
// stackoverflow.com:       10
// overflow.com:            20
// yahoo.com:               410
// mail.yahoo.com:          60
// mobile.sports.yahoo.com: 10
// sports.yahoo.com:        50
// org:                     3
// wikipedia.org:           3
// en.wikipedia.org:        2
// m.wikipedia.org:         1
// mobile.sports:           1
// sports:                  1
// uk:                      1
// co.uk:                   1
// google.co.uk:            1

// n: number of domains in the input
// (individual domains and subdomains have a constant upper length)


const counts = [ 
  "900,google.com",
  "60,mail.yahoo.com",
  "10,mobile.sports.yahoo.com",
  "40,sports.yahoo.com",
  "300,yahoo.com",
  "10,stackoverflow.com",
  "20,overflow.com",
  "2,en.wikipedia.org",
  "1,m.wikipedia.org",
  "1,mobile.sports",
  "1,google.co.uk" ]



  function calculateClicksByDomain(counts){
    let result = {}
    
    for(let i = 0; i < counts.length; i++){
      // A new subdomain is creared at each counts[i]
      let subdomain = counts[i].split(",")[1]
      let lastSubdomain = subdomain.split(".").slice(-1).join(" ")
      let lastTwoSubdomain = subdomain.split(".").slice(-2).join(".")
      let lastThreeSubdomain = subdomain.split(".").slice(-3).join(".")
      // Initializing the subdomains keys with a value of 0 so I could perform addition depending...
      result[subdomain] = 0
      result[lastSubdomain] = 0
      result[lastTwoSubdomain] = 0
      result[lastThreeSubdomain] = 0

      for(let j = 0; j < counts.length; j++){
        // Creates a new domain which will be used to pull out the subdomains
        let domain = counts[j].split(",")[1]
        let count = parseInt(counts[j].split(",")[0])
        if(domain === subdomain){ // If the full domain from counts[j] === the subdomain on counts[i] then append all counts
            result[subdomain] += count 
          }
          if(domain.split(".").slice(-1).join("") === lastSubdomain){ // If the last domain from counts[j] === the lastSubdomain on counts[i] then append all counts
            result[lastSubdomain] += count
          }
          if(domain.split(".").length >= 3 && domain.split(".").slice(-2).join(".") === lastTwoSubdomain ){ // If the last two domain from counts[j] >= 3 && === the lastTwoSubdomain on counts[i] then append all counts
             result[lastTwoSubdomain] += count
          }
          if(domain.split(".").length >= 4 && domain.split(".").slice(-3).join(".") === lastThreeSubdomain ){ // If the last three domain from counts[j] >= 4 && === the lastTwoSubdomain on counts[i] then append all counts
             result[lastThreeSubdomain] += count
          }
        } 
      }
    return Object.entries(result) // Returns the key values pair of each domain + their total count
  }
  
  console.log(calculateClicksByDomain(counts))