function Learn(){

    const handleclick = (name,e) =>{
        console.log("点击成功",name,e);
    }
    return(
        <div>
            <button onClick={(e)=>handleclick('hahaah',e)}>Click me!</button>
        </div>
    );
};


export default Learn;