import {TextField} from "@mui/material";

function OptionBoxFilter({label, onChange, filterField, value}) {
    function handleOnChange(e) {
        onChange({[filterField]: e.target.value});
    }

    return (
        <TextField variant={"filled"} label={label} onChange={handleOnChange} value={value}/>
    );
}

export default OptionBoxFilter;