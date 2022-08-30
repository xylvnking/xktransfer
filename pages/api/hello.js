// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// so even though

export default function handler(req, res) {
  let response
  console.log(req.method)
  fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  
        .then((res) => res.json())
        .then((x) => {
          response = x
          res.status(200).json(response)
        })
}
