import "../Edit/edit.css"

const input = (props) => {
    const  {
        data,
        setData,
        label,
        inputType,
        classStyle,
    } = props;

    return ( 
        <>
            <label htmlFor="">{label}</label>
            {inputType === "textarea" ? (
                <textarea type="text" className={classStyle} placeholder={data} onChange={(e) => {setData(e.target.value)}}/>
            ) : (
                <input type="text" placeholder={data} onChange={(e) => {setData(e.target.value)}}/>
            )}
        </>
     );
}
 
export default input;