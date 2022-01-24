const fs = require("fs")
const crypto = require("crypto")

class Safe {
  constructor(filepath, password) {
    this.filepath = filepath
    this.password = password
  }
  encryptAsynch(data) {
    return new Promise((resolve, reject) => {
      try {
        let cipher = crypto.createCipheriv("aes-256-gcm", this.password)
        let encrpted = Buffer.concat([
          cipher.update(new Buffer(JSON.stringify(data), "utf-8")),
          cipher.final(),
        ])
      } catch (error) {
          reject({message:error.message})
      }
      fs.writeFile(this.filepath, (encrpted, error)=> {
          if(erorr){
              reject(error)
          }
          resolve(encrpted)
      })


    })
  }
  encrypt(data) {
    try {
      let cipher = crypto.createCipheriv("aes-256-gcm", this.password)
      let encrpted = Buffer.concat([
        cipher.update(new Buffer(JSON.stringify(data), "utf-8")),
        cipher.final(),
      ])
      fs.writeFileSync(this.filepath, encrpted)
      return { message: "Encrypted" }
    } catch (error) {
      throw new Error(error.message)
    }
  }
  descryptAsynch() {
      return new Promise((resolve, reject)=> {
          fs.readFile(this.filepath, (error, data)=> {
              if(error){
                  reject(error)
              }
              try {
                let decipher = crypto.createDecipheriv("aes-256-gcm", this.password)
                let decrypted = Buffer.concat([
                    decipher.update(new Buffer(JSON.stringify(data), "utf-8")),
                  decipher.final(),
                ])
                resolve(JSON.parse(this.descrypt.toString()))
                  
              } catch (error) {
                  reject({message:error.message})
              }
          })

      })
  }
  descrypt() {
    try {
      let data = fs.readFileSync(this.filepath)
      let decipher = crypto.createDecipheriv("aes-256-gcm", this.password)
      let decrypted = Buffer.concat([
        decipher.update(new Buffer(JSON.stringify(data), "utf-8")),
        decipher.final(),
      ])
      return JSON.parse(this.descrypt.toString())
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

module.exports = Safe
