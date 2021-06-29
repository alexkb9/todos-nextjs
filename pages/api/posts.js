// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json([
        {id: 1, name: 'John Doe', function: "Test"},
        {id: 2, name: 'Nume Doi', function: "Programer"},
        {id: 3, name: 'Nume Trei', function: "Developer"},
        {id: 4, name: 'Nume Patru', function: "Manager"},
        {id: 5, name: 'Nume Cinci', function: "Architect"},
        {id: 6, name: 'Lavand Rodrigues', function: "Lavandier"},
    ])
}
