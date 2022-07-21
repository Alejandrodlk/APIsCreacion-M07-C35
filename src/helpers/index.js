const checkID = (id) => {
    if(isNaN(id)){
    response = {
      ok: false,
      meta: {
          status: 400,
      },
      msg : `Numero de ID incorrcto!!`
    }
    return response
  }
  return false
}


module.exports ={
    checkID
}
