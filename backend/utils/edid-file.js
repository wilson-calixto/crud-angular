const fs = require("fs");
const dir = process.env.INIT_CWD+'/data/edid-tables';

class EdidFile {
    
    static async checkExistDirectory(directory){
        try{
            fs.statSync(directory);
            return true;
        }catch (e){
            console.error(`Unable to check a exist directory: ${e}`);
            return false;
        }
    }
    
    static async addDirectory(directory){
        try{
            if(!(await this.checkExistDirectory(directory))){
                fs.mkdirSync(directory);
            }
            return true;
        }catch (e){
            console.error(`Unable to create a directory: ${e}`);
            return false;
        }
    }
    
    static async checkExistFile(file){
        return fs.existsSync(file);
    }
    
    static async addFile(fileName, file){
        try{
            if(await this.addDirectory(dir)){
               if(await this.checkExistFile(dir+'/'+fileName+'.dat')){
                   fs.writeFile(dir+'/'+fileName+'.dat', Buffer.from(file.split(',')[1], 'base64').toString('utf-8'), (err) => {
                      if (err) throw err;               
                   });
               }else{
                   fs.open(dir+'/'+fileName+'.dat', 'wx', (error, desc) => {
                          if(!error && desc) {
                              fs.writeFile(desc, Buffer.from(file.split(',')[1], 'base64').toString('utf-8'), (err) => {
                                  if (err) throw err;               
                              })
                          }else{
                              throw error;
                          }
                    }); 
               }
                return { success: true, path: dir};
            }else{
                return false;
            }
        }catch(e) {
            console.error(`Unable save file: ${e}`);
            return false;
        }
   
    }
    
    static async removeFiles(files){
        try{
            for(let i=0; i<files.length; i++){
                let filePath = dir+'/'+files[i]+'.dat';
                if(await this.checkExistFile(filePath)){
                    fs.unlinkSync(filePath);
                }
            }
            return true;
        }catch(e) {
            console.error(`Unable remove files: ${e}`);
            return false;
        }
    }
}

module.exports = { EdidFile: EdidFile };