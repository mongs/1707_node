const express = require('express')
const formidable = require('formidable')
const fs = require('fs')
const app = express()

app.post('/upload', (req, res) => {
  // parse a file upload 
  const form = new formidable.IncomingForm();
  // 文件上传的目录
  form.uploadDir = "./dir";
  /**
   * fields  文本域
   * files   文件域
   */
  form.parse(req, (err, fields, files) => {
    console.log(fields, files)
    const oldPath = files.file.path
    const newPath = './dir/' + files.file.name
    // console.log(oldPath, newPath)
    // 修改文件名
    fs.rename(oldPath, newPath, err => {
      if(!err){
        res.send('上传成功')
      }else{
        res.send('上传失败')
      }
    })
  });

})

app.listen(3000)

/**
 * 上传文件:
 *  form 上 加属性  enctype="multipart/form-data"
 *  模块 formidable
 *    https://www.npmjs.com/package/formidable
 * 
 * 
 * 
 * { file:
   File {
     size: 26838,   // 大小
     path: 'dir\\upload_1c8f794e1b95a1cc5c20aedebf1a5e15',  // 路径
     name: '53abd1fc79d51.jpg', // 文件的名字
     type: 'image/jpeg',  // 类型
     lastModifiedDate: 2017-11-16T09:08:46.065Z,
     } }
 */