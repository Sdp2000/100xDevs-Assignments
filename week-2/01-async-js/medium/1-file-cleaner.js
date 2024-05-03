/* ## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
``` */




const fs=require("fs")


read=()=>{
    return new Promise((res,rej)=>{
        fs.readFile('text_clean.txt','utf-8',(err,data)=>{
            res(data);
        })
    })
}

let ans='';
read().then((res)=>{
    console.log(res);
    return read()
}).then((res)=>{
    let val=res;
    let temp=val.split(" ");


    temp.forEach((elm)=>{
        if(elm.length!==0){
            ans+=elm;
            ans+=" ";
        }
    })

    fs.writeFile('text_clean.txt',ans,(err)=>{
        if(err){
            console.log(err);
        }
    });

    return read();

}).then((res)=>{
    console.log(res);
})




