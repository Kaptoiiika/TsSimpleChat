const fs = require("fs")
var path = require("path")
const config = require("config")

class FileManager {
  createDir(group, dir) {
    const filePath = `${config.get("filePath")}\\${group}\\${dir}`
    return new Promise((resolve, reject) => {
      try {
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath)
          return resolve({ message: "File was created" })
        } else {
          return resolve({ message: "File already exist" })
        }
      } catch (error) {
        return reject({
          message: { message: "File error", error: error.message },
        })
      }
    })
  }
  createFile(group, dir, file) {
    const filePath = `${config.get("filePath")}\\${group}\\${dir}\\${file.name}`
    return new Promise((resolve, reject) => {
      try {
        file.mv(filePath)
        return resolve({ message: "File was created" })
      } catch (error) {
        return reject({
          message: { message: "File error", error: error.message },
        })
      }
    })
  }

  duplicateFile(group, dir, filePath) {
    const NewfilePath = `${config.get(
      "filePath"
    )}\\${group}\\${dir}\\avatar.png`
    return new Promise((resolve, reject) => {
      try {
        fs.copyFile(filePath, NewfilePath,(err)=>{
          console.log(err)
        })
        return resolve({ message: "File was created" })
      } catch (error) {
        return reject({
          message: { message: "File error", error: error.message },
        })
      }
    })
  }

  deleteFile(file) {
    const path = this.getPath(file)
    if (file.type === "dir") {
      fs.rmdirSync(path)
    } else {
      fs.unlinkSync(path)
    }
  }

  getFile(path) {
    return config.get("filePath") + "\\" + file.user + "\\" + file.path
  }
}

module.exports = new FileManager()
