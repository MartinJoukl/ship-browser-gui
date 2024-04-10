import {forwardRef} from "react";
import {TextField} from "@mui/material";

function StringFilter({label, onChange, filterField, value}) {

    function handleOnChange(e) {
        onChange({[filterField]: e.target.value});
    }

    return (
        <TextField variant={"filled"} label={label} onChange={handleOnChange} value={value} fullWidth={true} />
    );
}

export default StringFilter;