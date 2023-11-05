export  const imageUrl =(path)=>{
    return new URL(`/assest/${path}`,import.meta.url).href;

}