const fs = require('fs');
const path = require('path') ;
const Buffer = require('buffer').Buffer;
/**
 * @param {String} fileName 
 */
function encode_base64(fileName){
    console.log(fileName)
    fs.readFile(path.join(__dirname,fileName),(err,data)=>{
        if(err){
            throw err;
        }else{
            let buf = Buffer.from(data);
            let base64 = buf.toString('base64');
            fs.writeFile(path.join(__dirname,'voice.txt'),base64,err =>{
                if(err) throw err;
            });
            return base64;
        }
    })
}
/**
 * 
 * @param {String} base64Str 
 * @param {String} fileName 
 */
function decode_base64(base64Str,fileName){
    let data = Buffer.from(base64Str,'base64');
    fs.writeFile(path.join(__dirname,fileName),data,err =>{
        if(err){
            throw err;
        }else{
            return true;
        }
    })
}
encode_base64('voice.png');

let pigBaseStr = "iVBORw0KGgoAAAANSUhEUgAAAFwAAAASCAYAAADWvblEAAAG50lEQVR42tWZd4wVRRzH0Z3du4M7RARRREXFih1LYiWWiL2iRkmsscSOBSshsZfYS/Tt7uOOA+OpIWrEggaNJYC9YxcLdkRfO2zr73PMeHPjK8u74w83mey9nZ3ZX/3+vr+5fubKR/5WhYx3Zz7jLcxlvB/l/nUuVA/lQ/+4pGN00O9/cnWGDaNymeCoQqgm50NvWj6jZudD9XqXXqH3k4zf5O9O7jL/rej4nsw/KuOaQuTtm2RHNvaVLGLP/fKRuvY/e/IhEaIohk7KDZn7SgQc726YzGgZUgz9HQqhv01fOCVJkpVKbY3r1bO2GHmHigG/Q95ejdD7AZ36wuDizI/YsxirnbqV7BjaLA9zaYQRb92WxM1Dc5F/lkTEW858ThSOkuygQTU9H/on5sPgGPe5rM8WQu+OepSToAidIPlLxiLkFMVfkEh/VsaT8vsZfhPZYtxfyuoZqqfYsz45gi0LGf+UXEZNYS++0SMYgQz7YwhFxBfjprVl0ViMiPBpI0Te/7LY3jSimlA4TN5dknSM98wzIrtrj6nB6HoUXRoHmwmMXA6csEcya1RDqnWZYFORebpjgzfqMnY22EL2Kjn2+FOce6Ud9leZSVIgSaas7G6E4TFQz9RTCyTiJxZi72DB/+NFyLetj2RdqMiFwealWO0uEby/OHCGjqSLChl1GfdixjtsmbLBBLIkiYa0AFUSEOcVIv+0FYn7yatjfJF5qZUd7fXuhaM7sw0bin1m6r0WGXTQEa4usYw4s7L3/K0pOmA9RkBIe56otjHfnsNw8vwT2/tu+pOKpHm5eQ0zK+wCVu0sBvLMHIEiDt9u+aFFvSZ7fg+c5KLgyHzkxQSeTPgnWAXj46rYO63/mqW2pnUqzVP19T4/V9wj628v87+S9jAj0hD40s4fR6TLfZKMufLeXTiilnIEjRjp5F7g7oQezs8OWMNABIyGZ0BWmr1KYeO6IAVr5P580jGiqSdctDWvLpO/mw+WsmrXeoQGjw3TwVhVjDOOd9wM4YKOJm3DBvA3sCNwc0Wt7xIAsm6x7HtBvcwI2mgVzMctWW81zzEec2R3bQcOGAbUig6t+Sg4tgx98e7rTmH1EkLY8+k8q3azhL6xSqrd4DCbbDJnrNIKvkLG6ffeld/XdVPX/sO5Uy9436S7rP9GFCuYLOGiSMGtychacpPuNnxhKJ4TmUBoGfgr1tqTOkh9q/xCa8tq4K7ZtJ5ooUky68H7SliJEmQACgEvGqMP0Qa/GYZQbG1aSwz5tymWZIMEwgf8Dc4DOdope5PywsEPd+DBQOTdVQ3z2PD+NER27THMSb59Uvl6oibXtkVwtMh4ffUIjdQuUBiDY3DJ1BgYq30sSjW7SnTfwjsSpecuc8Cqq+gKfqGdJTiEe+fUhg2o+tKx3S4Gf07XiQgjF2J/WxNNdpZZbGMJGFwD+yc5fcZEAzNkmMPK3teOrXpBb8XRn6axH2ziVCLLgperSd9aPBbs5X2UpRBWghwcSSdHpPOMyGadXfBQTBt9ngVBpPoBXfOx2sPw/VK2caSTZQ8bHl2ryFErHMhYjFzaEXtiB7IKZyN7CpilYz8IZiL7dhBE6aAh8s9wuq65nE8wV46f8wHzLmvLnm/EjeubttuOEnnWxjOyi99QKDHayzqiXsTZna0NGxVj7wgnMmcZCLDhC4NB4dIYh+bLaVCm2wQAuEl9rBD7OyKT3ifP+Qlyp8Zj2m7DOEzk0jpD6A3mAw8GgrgbmLAvDEbqG/Iv495/MyMbbAI7QkBgAyomQj9hiqne937wu9wZDrxev1MSWS7mW8vJk+c7gTXPfCsNCyE7YTFQaZtSUrDRs65TN2iQ26bS+oOP1kc+I83xMhW/q7UO/TNhG0QwRjXGM0bBwKS9aWqoAeAyv0lHGIe8/wW/cQIKss5ttMBZS7bPhbKdw1qXMQiejkEW9pRv7UX0mmDpMeDPkbopl/HPpvlBB1l7OvRU5u/hHMYEjztwPIUWW1D0KxqWkzFwGAWgUeAi6UCawyExcOVTRLoz9SBYL8I+QncFX+VwyEQpBueMgzS3O0+jIIWT30SYXWiQR569afCV+uKej8B0aJnJQNdw7MdADuc0MAPE8XcfDPT7AwraGTVsnCqSMTJnGTKeNp1ipaGjYklKQUivmXDl8o5WO9N0VZONc2SKpjkSINrMnBvt2ukLqshDx/gAxsb5BnOXd+hi+iGtOhkAvPar90JBOk1R8nwaEqKbjQuRulRS/0CiEWFhIqQd3Bto0M3HQlHiHaADPMcIfXbWEQ4czDfTFEMgBbbAKSiwYNIcVuJ2mBR94ELrMR+HgckYlMM40WcOB1n8c4K9CJKkffDA3ujyD4LApAHD9OQvAAAAAElFTkSuQmCC";
decode_base64(pigBaseStr,'pig.png');