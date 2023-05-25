/* CLIENTE */
try {
  const {data} = await axios.get("www.cosa.com")
  setCharacter(data)
} catch (error) {
  console.log(error)
}








/* SERVIDOR   www.cosa.com  */

router