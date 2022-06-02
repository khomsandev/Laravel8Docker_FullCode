import axios from "axios"
import { useState, useEffect } from "react"

const baseURL = "http://localhost:8100/api/products"

function App() {

  const [products, setProducts] = useState(null)

  // useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setProducts(response.data)
  //   })
  // }, [])

  useEffect(() => {

    const token = '1|nujBXOIdtwOptW4LIbNje0zqowCgBlyEuVYQrcXy'
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    axios.get(baseURL, config).then((response) => {
      setProducts(response.data)
    })
  }, [])
  
  if (!products) return null

  return (
    <div>
      <h1>Product List ({products.length})</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            {/* <th>ProductPicture</th> */}
            <th>Name</th>
            <th>Slug</th>
            <th>Price</th>
            <th>CreatedDate</th>
            <th>ModifiedDate</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(element => {
              return (
                <tr key={element.id}>
                  <td>{element.id}</td>
                  {/* <td><img src={element.ProductPicture} width="100" alt="" ></img></td> */}
                  <td>{element.name}</td>
                  <td>{element.slug}</td>
                  <td>{element.price}</td>
                  <td>{element.created_at}</td>
                  <td>{element.updated_at}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )

  
  /*
  return (
    <div>
      <h1>Product List ({products.length})</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>ProductName</th>
            <th>UnitPrice</th>
            <th>UnitInStock</th>
            <th>CreatedDate</th>
            <th>ModifiedDate</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(element => {
              return (
                <tr key={element.id}>
                  <td>{element.id}</td>
                  <td><img src={element.ProductPicture} width='100' alt="" /></td>
                  <td>{element.ProductName}</td>
                  <td>{element.UnitPrice}</td>
                  <td>{element.UnitInStock}</td>
                  <td>{element.CreatedDate}</td>
                  <td>{element.ModifiedDate}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
  */

  
}

export default App