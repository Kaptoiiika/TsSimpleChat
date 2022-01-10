const fs = require("fs")
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
